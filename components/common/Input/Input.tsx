'use client'
import React from 'react'
import type { ControllerRenderProps, FieldValues } from 'react-hook-form'
import { InputSize, StyledInput } from './styled'
import clsx from 'clsx'

type InputProps = {
  className?: string
  field?: ControllerRenderProps<FieldValues>
  placeholder?: string
  onClick?(): void
  type?: string
  $size?: InputSize
  $error?: any
}

function Input({ className, field, placeholder, type, onClick, $size, $error }: InputProps) {
  return (
    <StyledInput $size={$size}>
      <input
        {...field}
        className={clsx(className, 'input', { error: $error })}
        type={type}
        onClick={onClick}
        placeholder={placeholder}
        autoComplete="off"
      />
    </StyledInput>
  )
}

export default Input
