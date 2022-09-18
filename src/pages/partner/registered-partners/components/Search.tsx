import CompanyIcon from "base/components/icons/CompanyIcon"
import { InputLabel } from "base/components/inputs/form/withLabel"

interface SearchProps {
  searchKeyword: string,
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>,
}

const Search: React.FC<SearchProps> = ({ searchKeyword, setSearchKeyword }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  }

  return <div className="bg-brandReverse text-brandContrast space-y-4 p-6 lg:p-8 rounded-[24px] border-[1px] border-brandContrast">
    <div className="space-y-2">
      <InputLabel
        name="search"
        label="Search Company"
        icon={<CompanyIcon />}
      />
      <input
        type={"text"}
        value={searchKeyword}
        onChange={handleChange}
        className="border-[1px] border-black w-full h-[38px] rounded-full p-2 placeholder:text-black-400"
        placeholder="Start typing name, company, phone or email for search"
      />
    </div>
  </div>
}

export default Search
