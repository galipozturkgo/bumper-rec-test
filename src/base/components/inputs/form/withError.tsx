import { useField } from 'formik';
import { TextInputProps } from "./TextInput";
import { SwitchInputProps } from "./SwitchInput";
import { DropdownInputProps } from "./DropdownInput";

const withError = (Component: any) => (props: TextInputProps | SwitchInputProps | DropdownInputProps) => {
  const [field, meta] = useField(props);

  return <div className="space-y-1">
    <Component {...props} />
    {
      field && meta.touched && meta.error ? (
        <div className="text-primaryDanger text-sm">{meta.error}</div>
      ) : null
    }
  </div>;
};

export default withError;
