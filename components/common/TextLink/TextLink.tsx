import { Body1 } from '../Typography/Typography'
import { StyledTextLink } from './TextLink.style'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'

type T_TextLinkProps = {
  href: string
  text: string
}

function TextLink({ href, text }: T_TextLinkProps) {
  return (
    <StyledTextLink href={href}>
      <Body1 className="text">{text}</Body1>
      <ExpandCircleDownIcon className="icon" fontSize="small" />
    </StyledTextLink>
  )
}

export default TextLink
