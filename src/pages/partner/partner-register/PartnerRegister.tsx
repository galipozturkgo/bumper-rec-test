import { useNavigate } from "react-router-dom"
import Button from "base/components/inputs/Button"
import LeftArrowIcon from "base/components/icons/LeftArrowIcon"
import RegisterForm from "./register-form/RegisterForm";

const PartnerRegister = () => {
  const navigate = useNavigate();

  return <div className="pt-20 lg:py-40">
    <div className="px-4 lg:px-32 mx-auto inset-x-0 lg:w-[90%]">
      <div className="text-brandReverse space-y-4">
        <Button
          onClick={() => navigate("/partner/partner-offer")}
          classNames="border-none">
          <LeftArrowIcon />
        </Button>
        <div>
          <span className="font-semibold text-4xl">Join our network</span>
        </div>
        <div className="flex flex-col">
          <span>
            Offer <span className="font-semibold">PayLater</span> to split servicing and repair work into monthly instalments - interest-free.
          </span>
          <span>
            Use <span className="font-semibold">PayNow</span> to take secure payments online.
          </span>
        </div>
      </div>

      <div className="mt-4">
        <RegisterForm />
      </div>
    </div>
  </div>
}

export default PartnerRegister
