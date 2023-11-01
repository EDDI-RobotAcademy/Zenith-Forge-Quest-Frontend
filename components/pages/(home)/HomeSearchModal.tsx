import { Modal, ModalProps as MuiModalProps } from '@mui/material'
import StyledHomeSearchModal from './HomeSearchModal.style'

interface I_SearchModalProps extends MuiModalProps {}

function HomeSearchModal({ children, open, ...props }: I_SearchModalProps) {
  return (
    <StyledHomeSearchModal open={open} {...props}>
      {children}
    </StyledHomeSearchModal>
  )
}

export default HomeSearchModal
