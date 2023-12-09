import { StyledDropdownToggle } from './styled'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
type T_DropdownToggleProps = {
  id: string
  show: boolean
  toggle(e: React.MouseEvent<HTMLButtonElement>): void
  value: string
  formatter?(value: string): string
}

function DropdownToggle({ id, show, toggle, formatter, value }: T_DropdownToggleProps) {
  return (
    <StyledDropdownToggle
      id={id}
      className="dropdownToggle"
      type="button"
      onClick={toggle}
      aria-controls="menu"
      aria-haspopup
    >
      {formatter?.(value) ?? value}

      {show ? <ArrowDropUpIcon className="icon" /> : <ArrowDropDownIcon className="icon" />}
    </StyledDropdownToggle>
  )
}

export default DropdownToggle
