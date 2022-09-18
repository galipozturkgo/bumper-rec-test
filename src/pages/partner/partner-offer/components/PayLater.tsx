import React from 'react'
import Phone from 'images/Phone.png';
import { useNavigate } from "react-router-dom";
import Button from "base/components/inputs/Button";
import RightArrowIcon from "base/components/icons/RightArrowIcon";

const PayLater = () => {
  const navigate = useNavigate();

  const Offer = () => {
    return <div className="flex flex-col space-y-2 lg:space-3 xl:space-y-4">
      <span className="font-medium">PayLater</span>
      <span>Allow your customers to split their repair or service bill over monthly repayments.</span>

      <div className="text-3xl lg:text-5xl font-extrabold text-brandPrimary">
        <div className="hidden lg:flex flex-col">
          <span>NO RISK FOR DEALERS, </span>
          <span>NO WORRY FOR DRIVERS</span>
        </div>
        <div className="lg:hidden flex flex-col">
          <span>NO RISK FOR YOU, </span>
          <span>NO WORRY FOR DRIVERS</span>
        </div>
      </div>
    </div>;
  }

  const MobilePhone = () => {
    return <div className="h-[220px] lg:h-[540px] w-[50%] bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${Phone})` }} />
  }

  const Steps = () => {
    const Step: React.FC<{ number: number, title: string, text: string, last?: boolean }> = ({ number, title, text, last }) => {
      return <div className="flex space-x-4">
        <div className="h-[inherit] flex flex-col items-center">
          <div className="bg-brandPrimary min-w-[24px] h-[24px] text-center rounded-full border-brandContrast border-[1px]">
            <span>{number}</span>
          </div>
          {!last && <div className="w-[1px] h-full bg-brandContrast" />}
        </div>

        <div className="flex flex-col mb-4">
          <span className="font-semibold lg:uppercase">{title}</span>
          <span className="lg:w-[80%]">{text}</span>
        </div>
      </div>
    }

    return <div>
      <div className="pb-6">
        <span className="font-medium">It’s as simple as</span>
      </div>
      <Step
        number={1}
        title="Fix it"
        text="Your customers bring their vehicle to you. You repair and service the car. Everything just like it works right now."
      />
      <Step
        number={2}
        title="Split it"
        text="When the customer gets their bill or quote, Bumper either intergrates into your existing online checkout or can be done on-site before you hand back the keys. All in just a few clicks."
      />
      <Step
        number={3}
        title="Sorted"
        text="You and your customer part ways happy. You’re paid in full direct from Bumper, the customer repays Bumper over their chosen payment plan."
        last
      />
    </div>
  }

  return <div className="bg-brandReverse py-8 lg:py-16">
    <div className="px-4 lg:px-6 mx-auto inset-x-0 lg:w-[90%]">
      <div className="hidden lg:flex w-full flex ">
        <div className="space-y-4 w-[50%]">
          <Offer />
          <Steps />
        </div>
        <MobilePhone />
      </div>
      <div className="lg:hidden w-full">
        <div className="space-y-4 w-full flex">
          <Offer />
          <MobilePhone />
        </div>
        <Steps />
      </div>
      <Button
        classNames="w-max bg-brandAccent"
        text="Register your interest"
        onClick={() => navigate("/partner/partner-register")}>
        <RightArrowIcon />
      </Button>
    </div>
  </div>
}

export default PayLater
