import { createContext, useContext, useState } from "react";

interface MobileMenuProviderProps {
  children: JSX.Element
}

const MobileMenuContext = createContext({ isMobileMenuOpen: false, toggleMobileMenu: (isOpen: boolean) => { } });

const MobileMenuProvider: React.FC<MobileMenuProviderProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (isOpen: boolean) => setIsMobileMenuOpen(isOpen)

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export default MobileMenuProvider;

export const useMobileMenu = () => {
  return useContext(MobileMenuContext);
}
