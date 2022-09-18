import { useField } from 'formik';
import withLabel from "./withLabel";
import withError from "./withError";
import { DefaultInputProps } from "./types";

export interface DropdownInputProps extends DefaultInputProps {
  children: JSX.Element[]
}

const BaseDropdownInput: React.FC<DropdownInputProps> = ({ label, ...props }) => {
  const [field] = useField(props);

  return <select
    className="border-[1px] border-black w-full h-[38px] rounded-full p-2 placeholder:text-black-400"
    {...field}
    {...props}
  />
};

const LabeledDropdownInput = withLabel(BaseDropdownInput);
const DropdownInput = withError(LabeledDropdownInput);

export default DropdownInput;
