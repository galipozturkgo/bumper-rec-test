import Search from "./components/Search";
import { useEffect, useState } from 'react'
import PartnerSearchResult from "./components/PartnerSearchResult";
import { RegisterProps } from "../partner-register/register-form/RegisterForm";
import { useRegisteredPartners } from "base/contexts/RegisteredPartnersContext";

const RegisteredPartners = () => {
  const { registeredPartners } = useRegisteredPartners();

  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filteredPartners, setFilteredPartners] = useState<RegisterProps[]>(registeredPartners.reverse());

  useEffect(() => {
    const keyword = searchKeyword.toLowerCase();
    const filtered = registeredPartners.filter(
      p => p.name.toLowerCase().includes(keyword) ||
        p.company.includes(keyword) ||
        p.mobile_phone.includes(keyword) ||
        p.email_address.includes(keyword));
    setFilteredPartners(filtered);
  }, [searchKeyword, registeredPartners]);

  return <div className="pt-20 lg:py-40">
    <div className="px-4 lg:px-32 mx-auto inset-x-0 lg:w-[90%]">
      <div className="text-brandReverse space-y-4">
        <div>
          <span className="font-semibold text-4xl">Interested Dealerships</span>
        </div>
        <Search searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
        {filteredPartners.map((partner, key) => <PartnerSearchResult key={key} {...partner} />)}
      </div>
    </div>
  </div>
}

export default RegisteredPartners
