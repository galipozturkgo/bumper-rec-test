import Button from "../Button";
import withError from "./withError";
import withLabel from "./withLabel";
import { DefaultInputProps } from "./types";
import { useEffect, useState } from "react";
import { useField, useFormikContext } from 'formik';
import CheckIcon from "base/components/icons/CheckIcon";
import PlusIcon from "base/components/icons/PlusIcon";

export interface SwitchInputProps extends DefaultInputProps {
  active: string | boolean;
  passive: string | boolean;
  activeLabel: string,
  passiveLabel: string,
}

const BaseSwitchInput: React.FC<SwitchInputProps> = (props) => {
  const { name } = props;
  const [field] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [value, setValue] = useState<string | boolean | undefined>(field.value);

  useEffect(() => {
    setFieldValue(name, value, true)
  }, [value, name, setFieldValue]);

  const handleChange = (type: "active" | "passive") => {
    if (!value) {
      setValue(props[type])
    } else {
      setValue((value === props.active && props.passive) || props.active)
    }
  }

  return <div className="flex flex-row space-x-1">
    <Button
      classNames={`w-max h-[38px] ${value === props.active && "bg-brandAccent"}`}
      onClick={() => handleChange("active")}
      text={props.activeLabel}>
      {(value === props.active && <CheckIcon />) || <PlusIcon />}
    </Button>
    <Button
      classNames={`w-max h-[38px] ${value === props.passive && "bg-brandAccent"}`}
      onClick={() => handleChange("passive")}
      text={props.passiveLabel}>
      {(value === props.passive && <CheckIcon />) || <PlusIcon />}
    </Button>
  </div >;
};
const LabeledSwitchInput = withLabel(BaseSwitchInput);
const SwitchInput = withError(LabeledSwitchInput);

export default SwitchInput;
