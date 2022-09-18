import * as Yup from 'yup';

const alphaNumericStringRegex = /^[a-zA-Z0-9\s]*$/i;
const mobilePhoneRegex = /^0(\s*)(7)(\s*)(\d(\s*)){9}$/;

export const validationSchema = Yup.object({
  "name": Yup
    .string()
    .required('Field is required')
    .max(255, 'Must be 255 characters or less')
    .test('', 'Should be non alpha numeric', (value) => {
      if (!value) return false;
      return alphaNumericStringRegex.test(value);
    }),
  company: Yup
    .string()
    .required('Field is required'),
  mobile_phone: Yup
    .string()
    .test('', 'Invalid phone number', (value) => {
      if (!value) return false;
      return mobilePhoneRegex.test(value);
    }),
  email_address: Yup
    .string()
    .required('Field is required')
    .min(5, 'Must be 5 characters or more')
    .max(255, 'Must be 255 characters or less')
    .email('Invalid email address'),
  postcode: Yup
    .string()
    .max(30, 'Must be 30 characters or less')
    .required('Field is required')
    .test('', 'Should be non alpha numeric', (value) => {
      if (!value) return false;
      return alphaNumericStringRegex.test(value);
    }),
  pay_method: Yup
    .string()
    .required('Field is required')
});
