import { StyledCheckbox, StyledCheckboxIcon, StyledCheckboxInput } from './CheckBox.style'

type T_CheckboxProps = {
  className?: string
  text?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Checkbox({ className, text, checked, disabled, onChange }: T_CheckboxProps) {
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
  }

  return (
    <StyledCheckbox>
      <StyledCheckboxInput
        className={className}
        type="checkbox"
        id="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleCheck}
      />

      <StyledCheckboxIcon className="checkbox-icon" />

      <span className="checkbox-text">{text}</span>
    </StyledCheckbox>
  )
}

export default Checkbox
