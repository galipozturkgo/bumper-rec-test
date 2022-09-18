import { Link, useNavigate } from "react-router-dom";
import Button from "base/components/inputs/Button";
import { Formik, Form, FormikHelpers } from 'formik';
import { validationSchema } from "./validationSchema";
import UserIcon from "base/components/icons/UserIcon";
import PhoneIcon from "base/components/icons/PhoneIcon";
import EmailIcon from "base/components/icons/EmailIcon";
import WrenchIcon from "base/components/icons/WrenchIcon";
import CompanyIcon from "base/components/icons/CompanyIcon";
import TextInput from "base/components/inputs/form/TextInput";
import RightArrowIcon from "base/components/icons/RightArrowIcon";
import SwitchInput from "base/components/inputs/form/SwitchInput";
import { InputLabel } from "base/components/inputs/form/withLabel";
import HomeVariantIcon from "base/components/icons/HomeVariantIcon";
import { useRegisteredPartners } from "base/contexts/RegisteredPartnersContext";

const REGISTER_URL = "https://dev.bumper.co.uk/core/dealership/reg/sandbox";

export interface RegisterProps {
  "name": string,
  "company": string,
  "mobile_phone": string,
  "email_address": string,
  "postcode": string,
  "pay_later": string,
  "pay_now": string,
}


interface RegisterFormProps {
  "name": string,
  "company": string,
  "mobile_phone": string,
  "email_address": string,
  "postcode": string,
  "pay_method": undefined | string,
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const { addNewPartner } = useRegisteredPartners();

  const beforeSubmit = (values: RegisterFormProps): RegisterProps => {
    const pay_method = values.pay_method;
    delete values.pay_method;

    return {
      ...values,
      pay_later: pay_method === "now" ? "false" : "true",
      pay_now: pay_method === "later" ? "false" : "true",
    };
  }

  const onSubmit = async (values: RegisterFormProps, formikHelpers: FormikHelpers<RegisterFormProps>) => {
    const sendValues = beforeSubmit(values);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendValues)
    };

    try {
      formikHelpers.setSubmitting(true);
      await fetch(REGISTER_URL, requestOptions)
      addNewPartner(sendValues);
      navigate("/partner/registered-partners");
    } catch (err) {
      console.log("err", err)
    } finally {
      formikHelpers.setSubmitting(false);
    }
  }

  return <div className="bg-brandReverse text-brandContrast space-y-4 p-4 lg:p-8 rounded-[32px] border-[1px] border-brandContrast">
    <div className="flex flex-col text-[18px]">
      <h1 className="font-semibold">Join our network</h1>
      <span>Free to join, no monthly fees</span>
    </div>

    <Formik<RegisterFormProps>
      validateOnBlur
      initialValues={{
        "name": "",
        "company": "",
        "mobile_phone": "",
        "email_address": "",
        "postcode": "",
        "pay_method": undefined,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ isSubmitting, isValid }) => {
        return <Form className="flex flex-col space-y-6">
          <TextInput
            name="name"
            label="Name"
            icon={<UserIcon />}
          />

          <TextInput
            label="Company"
            name="company"
            icon={<CompanyIcon />}
          />

          <TextInput
            label="Mobile phone number"
            name="mobile_phone"
            type="tel"
            icon={<PhoneIcon />}
          />

          <TextInput
            label="Email address"
            name="email_address"
            type="email"
            icon={<EmailIcon />}
          />

          <TextInput
            label="Postcode"
            name="postcode"
            icon={<HomeVariantIcon />}
            placeholder="Start typing to match your address"
          />

          <div className="space-y-2">
            <InputLabel
              label="What services are you interested in?"
              name=""
              icon={<WrenchIcon />}
            />
            <span className="opacity-60">Please select the services you’re interested in offering your customers</span>

            <SwitchInput
              name="pay_method"
              active="later"
              passive="now"
              activeLabel="PayLater"
              passiveLabel="PayNow"
            />
          </div>

          <Button
            disabled={isSubmitting}
            type="submit"
            classNames="bg-brandAccent"
            text="Register"
            onClick={() => null}>
            <RightArrowIcon />
          </Button>

          <div className="space-x-2 text-[18px] w-full text-center pb-4">
            <span>Already registered?</span>
            <Link className="text-brandAccent" to="/partner/partner-login">Login</Link>
          </div>

        </Form>
      }}
    </Formik>
  </div>;
};

export default RegisterForm;