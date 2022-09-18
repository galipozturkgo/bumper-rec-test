import React from 'react'

type ButtonColors = "primary" | "secondary" | "accent" | "reverse";

interface ButtonProps {
  onClick: () => void,
  disabled?: boolean,
  color?: ButtonColors,
  classNames?: string,
  text?: string,
  type?: "button" | "submit" | "reset"
  children?: JSX.Element,
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, color, classNames, text, type, children }) => {
  let buttonClasses = [
    "flex",
    "items-center",
    "align-center",
    "space-x-2",
    "border-[1px]",
    "rounded-full",
    "flex",
    "justify-center",
    "w-full",
    "h-[34px]",
    !text && "w-[34px]",
    text ? "px-[18px]" : "px-[10px]",
  ];

  let textClasses = [
    "",
  ]
  let iconClasses = [
    "",
  ]

  if (disabled) {
    buttonClasses.push("opacity-70")
  }

  if (classNames) {
    buttonClasses.push(classNames);
  }

  if (color) {
    switch (color) {
      case "primary":
        buttonClasses.push("border-brandPrimary");
        textClasses.push("text-brandPrimary");
        iconClasses.push("fill-brandPrimary");
        break;
      case "secondary":
        buttonClasses.push("border-brandSecondary");
        textClasses.push("text-brandSecondary");
        iconClasses.push("fill-brandSecondary");
        break;
      case "accent":
        buttonClasses.push("border-brandAccent");
        textClasses.push("text-brandAccent");
        iconClasses.push("fill-brandAccent");
        break;
      case "reverse":
        buttonClasses.push("border-brandReverse");
        textClasses.push("text-brandReverse");
        iconClasses.push("fill-brandReverse");
        break;
      default:
        break;
    }
  } else {
    buttonClasses.push("border-brandContrast");
    textClasses.push("text-brandContrast");
    iconClasses.push("fill-brandContrast");
  }

  return <button
    disabled={disabled}
    type={type || "button"}
    onClick={onClick}
    className={buttonClasses.join(" ")}
  >
    {text && <span className={textClasses.join(" ")}>{text}</span>}
    {children && <div className={iconClasses.join(" ")}>{children}</div>}
  </button>
}

export default Button
