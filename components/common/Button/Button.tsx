import { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { StyledButton } from './Button.style'

interface I_ButtonProps extends MuiButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ children, ...props }: I_ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
