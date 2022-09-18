import Nav from "./Nav"
import { Link } from "react-router-dom"
import Button from "base/components/inputs/Button";
import WrenchIcon from "base/components/icons/WrenchIcon";
import HomeIcon from "base/components/icons/HomeIcon";
import { useMobileMenu } from "base/contexts/MobileMenuContext"

const RightNavs = () => {
  const { toggleMobileMenu } = useMobileMenu();

  return <div className="h-full py-4 lg:py-0 space-y-4 lg:space-y-0 border-b-[1px] border-brandContrast lg:border-none lg:flex lg:items-center">
    <Nav to="partner/partner-offer" text="Partner sign up">
      <WrenchIcon />
    </Nav>
    <div className="ml-6">
      <Link to="/partner/partner-login">
        <Button
          classNames="w-max"
          text="Partner login"
          onClick={() => toggleMobileMenu(false)}>
          <HomeIcon />
        </Button>
      </Link>
    </div>
  </div>
}

export default RightNavs
