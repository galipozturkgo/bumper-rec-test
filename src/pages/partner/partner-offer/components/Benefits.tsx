import React from 'react'
import Decor from 'images/Decor.svg';

const Benefits = () => {
  const Benefit: React.FC<{ title: string, text: string }> = ({ title, text }) => {
    return <div className="flex flex-col space-y-2">
      <span className="font-bold text-4xl lg:text-6xl text-brandAccent">{title}</span>
      <span className="text-2xl">{text}</span>
    </div>
  }

  return <div className="bg-brandSecondary">
    <div className="w-full bg-center" style={{ backgroundImage: `url(${Decor})` }}>
      <div className="py-10 lg:py-16 px-4 lg:px-6 mx-auto inset-x-0 lg:w-[90%] text-brandReverse space-y-6">
        <div>
          <span className=" uppercase font-bold text-2xl lg:text-3xl">Benefits our other parners have noticed offering PayLater</span>
        </div>
        <div className="grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 lg:gap-6">
          <Benefit title="71%" text="of customers authorised more work because they split their bill with Bumper" />
          <Benefit title="90%" text="of customers would return to the same garage because they offered Bumper" />
          <Benefit title="+350%" text="increase in average invoice of customers using Bumper to split their bill." />
          <Benefit title="89%" text="of customers felt less stressed because they used Bumper to spread the cost." />
        </div>
        <div className="space-x-1">
          <span>Source:</span>
          <span className="font-extralight">Survey of 2,750 Bumper customers in Feb 2021</span>
        </div>
      </div>
    </div>
  </div>
}

export default Benefits
