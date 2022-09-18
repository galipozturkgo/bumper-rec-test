import React from 'react'
import { Link } from "react-router-dom"

const AboutUs = () => {
  return <div className="flex items-center justify-center p-32">
    <div className="space-x-2 text-[18px]">
      <span>About us not implemented yet.</span>
      <Link className="text-brandAccent" to="/partner/partner-offer">Partner sign up</Link>
    </div>
  </div>
}

export default AboutUs
