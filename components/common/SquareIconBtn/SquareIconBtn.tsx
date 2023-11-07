import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton/IconButton'
import StyledSquareIconBtn from './SquareIconBtn.style'

interface SquareIconBtnProps extends MuiIconButtonProps {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

function SquareIconBtn({ children, size = 'small', ...props }: SquareIconBtnProps) {
  return (
    <StyledSquareIconBtn size={size} {...props}>
      {children}
    </StyledSquareIconBtn>
  )
}

export default SquareIconBtn
