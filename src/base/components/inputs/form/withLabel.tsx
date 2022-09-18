import { DefaultLabelProps } from "./types";
import { TextInputProps } from "./TextInput";
import { SwitchInputProps } from "./SwitchInput";
import { DropdownInputProps } from "./DropdownInput";

export const InputLabel: React.FC<DefaultLabelProps> = (props) => {
  return <div className="flex space-x-2 items-center">
    {props?.icon && <span className="fill-brandPrimary">{props.icon}</span>}
    {props?.label && <label htmlFor={props.name} className="font-semibold">{props.label}</label>}
  </div>
}

const withLabel = (Component: any) => (props: TextInputProps | SwitchInputProps | DropdownInputProps) => {
  if (!props.label) {
    return <Component {...props} />;
  }

  return <div className="space-y-2">
    <InputLabel {...props} />
    <Component {...props} />
  </div>;
};

export default withLabel;
