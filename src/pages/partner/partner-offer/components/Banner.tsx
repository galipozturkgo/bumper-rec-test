import Car from 'images/Car.jpg';
import CarMobile from 'images/CarMobile.jpg';
import Button from "base/components/inputs/Button";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from "base/components/icons/StarIcon";
import RightArrowIcon from "base/components/icons/RightArrowIcon";

const Banner = () => {
  const navigate = useNavigate();

  return <div className="relative h-[475px] lg:h-[600px] bg-brandSecondary">
    <div className="hidden sm:block h-full w-full bg-center bg-no-repeat bg-cover mix-blend-hard-light" style={{ backgroundImage: `url(${Car})` }} />
    <div className="sm:hidden h-full w-full bg-center bg-no-repeat bg-cover mix-blend-hard-light" style={{ backgroundImage: `url(${CarMobile})` }} />

    <div className="absolute px-4 lg:px-6 top-[22%] text-brandReverse mx-auto inset-x-0 lg:w-[90%] space-y-4 md:space-y-3 lg:space-4 xl:space-y-5">
      <div className="flex items-center space-x-4">
        <span className="font-semibold text-2xl">Excellent</span>
        <div className="flex space-x-[2px]">
          {Array.from(Array(5).keys()).map(i => <div key={i} className="bg-secondaryAccent p-1 fill-brandReverse"><StarIcon /></div>)}
        </div>
        <div className="flex space-x-1 h-4">
          <div className="fill-secondaryAccent"><div className="scale-[1.2]"><StarIcon /></div></div>
          <span className="font-medium text-1xl">Trustpilot</span>
        </div>
      </div>

      <div className="lg:max-w-[70%]">
        <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">BECOME A BUMPER APPROVED DEPENDABLE DEALERSHIP</span>
      </div>

      <div className="lg:max-w-[45%]">
        <span className="text-[20px] lg:text-[22px]">Join our network of 3,000+ garages and dealerships who already offer Bumper to their customers.</span>
      </div>

      <Button
        classNames="w-max bg-brandAccent"
        text="Register your interest"
        onClick={() => navigate("/partner/partner-register")}>
        <RightArrowIcon />
      </Button>

      <div className="space-x-2 text-[18px]">
        <span>Already registered?</span>
        <Link className="text-brandAccent" to="/partner/partner-login">Login</Link>
      </div>
    </div>
  </div>
}

export default Banner
