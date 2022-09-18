export interface DefaultLabelProps {
  name: string,
  label?: string,
  icon?: JSX.Element
}

export interface DefaultInputProps extends DefaultLabelProps {
  type?: "text" | "password" | "email" | "tel",
  placeholder?: string
}
