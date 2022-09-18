import { useField } from 'formik';
import withLabel from "./withLabel";
import withError from "./withError";
import { DefaultInputProps } from "./types";

export interface TextInputProps extends DefaultInputProps {
}

const BaseTextInput: React.FC<TextInputProps> = (props) => {
  const [field] = useField(props);

  return <input
    className="border-[1px] border-black w-full h-[38px] rounded-full p-2 placeholder:text-black-400"
    type={props.type || "text"}
    {...field}
    {...props}
  />;
};

const LabeledTextInput = withLabel(BaseTextInput);
const TextInput = withError(LabeledTextInput);

export default TextInput;
