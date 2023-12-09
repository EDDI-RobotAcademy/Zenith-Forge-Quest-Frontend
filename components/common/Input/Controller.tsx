'use client'
import { Control, Controller, RegisterOptions } from 'react-hook-form'
import { InputSize, StyledController } from './styled'
import Input from './Input'
import ErrorMessage from './ErrorMessage'

type InputControllerProps = {
  control: Control<any>
  name: string
  rules?: Partial<RegisterOptions>
  type?: string
  placeholder?: string
  $size?: InputSize
}

function InputController({ control, name, rules, type, placeholder, $size }: InputControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <StyledController>
          <Input type={type} field={field} placeholder={placeholder} $size={$size} $error={!!fieldState.error} />
          <ErrorMessage error={fieldState.error?.message} />
        </StyledController>
      )}
    />
  )
}

export default InputController
