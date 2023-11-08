import { Modal, ModalProps as MuiModalProps } from '@mui/material'
import StyledMainSearchModal from './MainSearchModal.style'

interface I_SearchModalProps extends MuiModalProps {}

function MainSearchModal({ children, open, ...props }: I_SearchModalProps) {
  return (
    <StyledMainSearchModal open={open} {...props}>
      {children}
    </StyledMainSearchModal>
  )
}

export default MainSearchModal
