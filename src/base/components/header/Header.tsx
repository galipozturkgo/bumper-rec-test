import Brand from "./components/Brand";
import { Link } from "react-router-dom";
import LeftNavs from "./components/LeftNavs";
import RightNavs from "./components/RightNavs";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";
import Button from "../inputs/Button";
import { useMobileMenu } from "base/contexts/MobileMenuContext";

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return <div className="z-10 fixed mx-auto inset-x-0 h-[56px] lg:w-[90%] lg:top-[40px]">
    <div className="bg-brandPrimary relative h-[inherit] border-brandContrast border-b-[1px] lg:rounded-full lg:border-[1px]">

      <div className="h-[inherit] flex items-center ml-4 lg:ml-0 lg:absolute lg:top-[50%] lg:-translate-y-[50%] lg:left-[50%] lg:-translate-x-[50%]">
        <Link to="/">
          <Brand />
        </Link>
      </div>

      <div className="absolute mr-4 lg:mr-0 top-[50%] -translate-y-[50%] right-0 lg:hidden">
        <Button
          classNames={isMobileMenuOpen ? "bg-brandReverse opacity-[0.9]" : ""}
          onClick={() => toggleMobileMenu(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </div>

      <div className={"bg-brandPrimary lg:bg-transparent lg:h-full lg:mx-[16px] lg:absolute left-0 lg:top-[50%] lg:-translate-y-[50%] lg:block"} hidden={!isMobileMenuOpen}>
        <LeftNavs />
      </div>

      <div className={"bg-brandPrimary lg:bg-transparent lg:h-full lg:mx-[16px] lg:absolute right-0 lg:top-[50%] lg:-translate-y-[50%] lg:block"} hidden={!isMobileMenuOpen}>
        <RightNavs />
      </div>
    </div>
  </div >;
}

export default Header
