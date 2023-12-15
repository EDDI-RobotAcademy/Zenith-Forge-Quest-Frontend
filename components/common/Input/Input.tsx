'use client'
import React from 'react'
import type { ControllerRenderProps, FieldValues } from 'react-hook-form'
import { InputSize, StyledInput } from './styled'
import clsx from 'clsx'

type InputProps = {
  className?: string
  value?: string
  field?: ControllerRenderProps<FieldValues>
  placeholder?: string
  type?: string
  onClick?(): void
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  $size?: InputSize
  $error?: boolean
}

function Input({ className, value, field, placeholder, type, onClick, onChange, $size, $error }: InputProps) {
  return (
    <StyledInput $size={$size} className="common-input-container">
      <input
        {...field}
        className={clsx(className, 'input', { error: $error })}
        value={value}
        type={type}
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />
    </StyledInput>
  )
}

export default Input
