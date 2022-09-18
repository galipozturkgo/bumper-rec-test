import { useLocalStorage } from "base/utils/localStorage";
import { RegisterProps } from "pages/partner/partner-register/register-form/RegisterForm";
import { createContext, useContext, useState } from "react";


const REGISTERED_PARTNERS = "registeredPartners";

interface RegisteredPartnersProviderProps {
  children: JSX.Element
}

interface RegisteredPartnersContextProps {
  registeredPartners: RegisterProps[],
  addNewPartner: (values: RegisterProps) => void,
}

const RegisteredPartnersContext = createContext<RegisteredPartnersContextProps>({
  registeredPartners: [],
  addNewPartner: (values: RegisterProps) => { },
});

const RegisteredPartnersProvider: React.FC<RegisteredPartnersProviderProps> = ({ children }) => {
  const storage = useLocalStorage();
  const inLocalStorage = storage.getItem(REGISTERED_PARTNERS);

  const [registeredPartners, setRegisteredPartners] = useState<RegisterProps[]>((inLocalStorage && JSON.parse(inLocalStorage)) || []);

  const addNewPartner = (values: RegisterProps) => {
    const updated = [...registeredPartners, values];
    setRegisteredPartners(updated);
    storage.setItem(REGISTERED_PARTNERS, JSON.stringify(updated));
  }

  return (
    <RegisteredPartnersContext.Provider value={{ registeredPartners, addNewPartner }}>
      {children}
    </RegisteredPartnersContext.Provider>
  );
}

export default RegisteredPartnersProvider;

export const useRegisteredPartners = () => {
  return useContext(RegisteredPartnersContext);
}
