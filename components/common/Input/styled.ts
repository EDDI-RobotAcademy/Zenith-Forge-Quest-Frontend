'use client'

import { motion } from 'framer-motion'
import { assertUnreachable } from '@/utils/assertUnreachable'
import { Box, css, styled } from '@mui/material'
import { textStyle } from '@/styles/utils/text'
import { neutralColor } from '@/styles/theme/colors'
import theme from '@/styles/theme/theme'
import { flexbox } from '@/styles/utils/flexbox'

export type InputSize = 'sm' | 'md' | 'lg'

export type StyledInputProps = {
  $size?: InputSize
  $error?: boolean
}

export const smInputStyle = css`
  ${textStyle('body', 2)}
  height: 24px;
`

export const mdInputStyle = css`
  ${textStyle('body', 2)}
  height: 32px;
`

export const lgInputStyle = css`
  ${textStyle('body', 1)}
  height: 40px;
`

export function inputSizeStyle($size?: InputSize) {
  if (!$size) return

  switch ($size) {
    case 'sm':
      return smInputStyle
    case 'md':
      return mdInputStyle
    case 'lg':
      return lgInputStyle
    default:
      return assertUnreachable($size)
  }
}

export const StyledInput = styled('div')<StyledInputProps>`
  width: 100%;

  .input {
    ${({ $size }) => inputSizeStyle($size)};
    width: 100%;
    padding: 9.5px 12px;
    color: ${neutralColor.dark3}; // #1A051D
    background-color: ${neutralColor.white1}; // #FFFFFF
    border: 1px solid ${neutralColor.white3}; // #ECE9F1
    border-radius: 8px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &::placeholder {
      ${textStyle('body', 2)}
      color: ${neutralColor.dark1}; // #D0C9D6
    }

    &.error {
      color: ${theme.palette.error.dark}; // #FF647C
      border-color: ${theme.palette.error.dark}; // #FF647C

      &:focus {
        box-shadow: 0 0 4px ${theme.palette.error.dark}; // #FF647C
      }
    }

    &:not(.error):focus {
      box-shadow: 0 0 4px #6979f8; // '#6979F8'
    }

    &:not(:focus, :disabled):hover {
      background-color: ${neutralColor.white2}; // #F7F5F9
    }

    &:disabled {
      background-color: ${neutralColor.disabled}; // #E9E8EA
    }
  }
`

export const StyledController = styled(Box)`
  margin-bottom: 16px;

  .controller-text-container {
    ${flexbox('space-between')}

    .value-length {
      margin-left: auto;
    }
  }
`
export const StyledErrorMessage = styled(motion.p)`
  ${textStyle('body', 2)}
  margin-top: 4px;
  margin-bottom: 4px;
  color: ${theme.palette.error.dark} !important; // #FF647C
`
