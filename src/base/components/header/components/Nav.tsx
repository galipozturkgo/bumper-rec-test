import React from 'react'
import { NavLink } from "react-router-dom"
import { useMobileMenu } from "base/contexts/MobileMenuContext";

interface NavProps {
  to: string,
  text: string,
  disabled?: boolean,
  children?: JSX.Element,
}

const Nav: React.FC<NavProps> = ({ to, text, disabled, children }) => {
  const { toggleMobileMenu } = useMobileMenu();

  let navClasses = [
    "h-full",
    "w-full",
    "flex items-center",
    "lg:px-2",
    "group",
    disabled && "pointer-events-none"
  ];

  return <NavLink
    to={to}
    className={navClasses.join(" ")}
    onClick={() => toggleMobileMenu(false)}>
    {({ isActive }) => {
      return <div className="w-max h-[54px] lg:h-full flex flex-row lg:flex-col space-x-2 lg:space-x-0">
        <div className={`inline lg:hidden h-full w-[8px] rounded-r-lg group-hover:bg-brandReverse ${isActive && "bg-brandContrast group-hover:bg-brandContrast"}`} />
        <div className="w-max h-full flex flex-row lg:mt-2 items-center">
          <span className="tracking-widest px-2">{text}</span>
          {children && children}
        </div>
        <div className={`hidden lg:inline h-[5px] w-full rounded-t-lg group-hover:bg-brandReverse ${isActive && "bg-brandContrast group-hover:bg-brandContrast"}`} />
      </div>
    }}
  </NavLink>
}

export default Nav
