import React from 'react'
import { RegisterProps } from "pages/partner/partner-register/register-form/RegisterForm"

const PartnerSearchResult: React.FC<RegisterProps> = (props) => {

  const Line: React.FC<{ label: string, value: string }> = ({ label, value }) => {
    return <div className="flex justify-between border-black-400 border-b-[1px] h-[40px]">
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </div>
  }

  return <div className="bg-brandReverse text-brandContrast space-y-4 p-6 lg:p-8 rounded-[24px] border-[1px] border-brandContrast">
    <div className="border-black-400 border-b-[1px] h-[48px]">
      <span className="font-bold text-[20px]">{props.name}</span>
    </div>

    <Line label="Company" value={props.company} />
    <Line label="Mobile phone number" value={props.mobile_phone} />
    <Line label="Email address" value={props.email_address} />
    <Line label="Postcode" value={props.postcode} />
  </div>
}

export default PartnerSearchResult
