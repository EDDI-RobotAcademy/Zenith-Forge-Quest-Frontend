import { StyledTag, T_TagVariant } from './Tage.style'
import CancelIcon from '@mui/icons-material/Cancel'

type T_TagProps = {
  text: string
  className?: string
  $variant?: T_TagVariant
}

function Tag({ text, className, $variant = 'primary' }: T_TagProps) {
  return (
    <StyledTag className={className} $variant={$variant}>
      <p className="text"># {text}</p>

      <button type="button">
        <CancelIcon className="icon" fontSize="small" />
      </button>
    </StyledTag>
  )
}

export default Tag
