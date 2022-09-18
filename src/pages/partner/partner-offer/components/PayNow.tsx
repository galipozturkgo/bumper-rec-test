import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from "base/components/inputs/Button";
import CoinIcon from "base/components/icons/CoinIcon";
import SecureIcon from "base/components/icons/SecureIcon";
import BasketIcon from "base/components/icons/BasketIcon";
import RightArrowIcon from "base/components/icons/RightArrowIcon";

const PayNow = () => {
  const navigate = useNavigate();

  const Offer = () => {
    return <div className="flex flex-col space-y-2 lg:space-3 xl:space-y-4">
      <span className="font-medium">PayNow</span>
      <span>Our contactless payment solution that allows you to take payments online from your customers..</span>

      <div className="text-3xl lg:text-5xl font-extrabold text-brandPrimary">
        <div className="flex flex-col">
          <span className="uppercase">Accept payments anywhere, anytime</span>
        </div>
      </div>
    </div>;
  }

  const Benefit: React.FC<{ icon: JSX.Element, title: string, text: string }> = ({ icon, title, text }) => {
    return <div className="flex flex-row space-x-4">
      <div className="min-w-[72px] h-[72px] bg-brandPrimary rounded-full grid place-content-center items-center">
        {icon}
      </div>
      <div className="flex flex-col space-y-1">
        <span className="font-bold">{title}</span>
        <span className="text-[17px]">{text}</span>
      </div>
    </div>

  }

  return <div className="bg-brandReverse py-8 lg:py-16">
    <div className="px-4 lg:px-6 mx-auto inset-x-0 lg:w-[90%]">
      <Offer />

      <div className="mt-6">
        <div className="pb-6">
          <span className="font-medium">Benefits of PayNow</span>
        </div>
        <div className="grid grid-rows-3 lg:grid-rows-1 grid-flow-col gap-6 lg:gap-10 ">
          <Benefit
            icon={<SecureIcon />}
            title="Secure"
            text="Prevent customers from revealing sensitive information over the phone, GDPR safe and tested."
          />
          <Benefit
            icon={<CoinIcon />}
            title="Low cost"
            text="Low transaction fee, no setup or mobile phone fees."
          />
          <Benefit
            icon={<BasketIcon />}
            title="Fast"
            text="Set up and ready to go in minutes!"
          />
        </div>
      </div>

      <Button
        classNames="w-max bg-brandAccent mt-6 lg:mt-12"
        text="Register your interest"
        onClick={() => navigate("/partner/partner-register")}>
        <RightArrowIcon />
      </Button>
    </div>
  </div>
}

export default PayNow
