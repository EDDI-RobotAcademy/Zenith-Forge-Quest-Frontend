import Button, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

interface ButtonProps extends MuiButtonProps {
  children?: React.ReactNode;
}

function CommonButton({ children, ...props }: ButtonProps) {
  return <Button {...props}>{children}</Button>;
}

export default CommonButton;
