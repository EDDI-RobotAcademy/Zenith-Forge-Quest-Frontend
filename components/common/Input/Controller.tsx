'use client'
import { Control, Controller, RegisterOptions } from 'react-hook-form'
import { InputSize, StyledController } from './styled'
import Input from './Input'
import ErrorMessage from './ErrorMessage'
import { Outline } from '../Typography/Typography'

type InputControllerProps = {
  control: Control<any>
  name: string
  rules?: Partial<RegisterOptions>
  value?: string
  isValueLengthValid?: boolean
  type?: string
  placeholder?: string
  className?: string
  $size?: InputSize
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

function InputController({
  control,
  name,
  rules,
  value,
  isValueLengthValid,
  type,
  placeholder,
  className,
  $size,
  onChange,
}: InputControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <StyledController className={className}>
          <Input
            type={type}
            field={field}
            placeholder={placeholder}
            $size={$size}
            $error={!!fieldState.error}
            value={value}
            onChange={onChange}
          />

          {isValueLengthValid ? ( //* 글자수 제한이 있는 경우(board에서 사용) -성빈-
            <div className="controller-text-container">
              <ErrorMessage error={fieldState.error?.message} />
              <Outline className="value-length">{value?.length} / 100</Outline>
            </div>
          ) : (
            <ErrorMessage error={fieldState.error?.message} />
          )}
        </StyledController>
      )}
    />
  )
}

export default InputController
