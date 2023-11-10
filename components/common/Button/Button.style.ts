'use client'

import { neutralColor } from '@/styles/theme/colors'
import { Button, css, styled } from '@mui/material'

export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonVariant = 'primary' | 'secondary'

export const buttonStyle = css``

export const StyledButton = styled(Button)(
  ({ theme }) => css`
    &:disabled {
      color: ${neutralColor.dark1}; // #D0C9D6
      background-color: ${neutralColor.white3}; // #ECE9F1
    }

    &.MuiButton-contained {
      color: ${neutralColor.white1}; // #FFFFFF
    }

    &.MuiButton-outlined {
      &:disabled {
        border-color: ${neutralColor.dark1}; // #D0C9D6
        background-color: ${neutralColor.white1}; // #FFFFFF
        color: ${neutralColor.dark1}; // #D0C9D6
      }
    }
  `,
)
