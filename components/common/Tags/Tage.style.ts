'use client'

import { basePalette, neutralColor } from '@/styles/theme/colors'
import { flexbox } from '@/styles/utils/flexbox'
import { assertUnreachable } from '@/utils/assertUnreachable'
import { textStyle } from '@/styles/utils/text'
import { css } from '@emotion/react'
import { styled } from '@mui/material'

export type T_TagVariant = 'primary' | 'secondary' | 'tertiary'

export type T_StyledTagProps = {
  $variant: T_TagVariant
}

export const tagStyle = css`
  ${flexbox('between')}
  width: fit-content;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 2px;
  border-radius: 4px;

  .text {
    ${textStyle('body', 2)}
    font-weight: 600;
    margin-right: 8px;
  }

  button {
    display: flex;
    align-items: center;

    &:hover {
      .MuiSvgIcon-root {
        &:hover {
          transform: rotate(270deg);
        }
      }
    }

    .MuiSvgIcon-root {
      font-size: 1rem;
      transition: transform 0.5s ease;
    }
  }
`

export const primaryTagStyle = css`
  background-color: ${basePalette.primary.light}; // #E5E7FA

  .text {
    color: ${basePalette.primary.dark}; // #6979F8
  }

  button {
    .MuiSvgIcon-root {
      color: ${basePalette.primary.dark}; // #6979F8
    }
  }
`

export const secondaryTagStyle = css`
  background-color: ${basePalette.secondary.light}; // #EEDFF2

  .text {
    color: ${basePalette.secondary.dark}; // #BE52F2
  }

  button {
    .MuiSvgIcon-root {
      color: ${basePalette.secondary.dark}; // #BE52F2
    }
  }
`

export const tertiaryTagStyle = css`
  background-color: ${neutralColor.white3}; // #ECE9F1

  .text {
    color: ${neutralColor.dark2}; // #3F3356
  }

  button {
    .MuiSvgIcon-root {
      color: ${neutralColor.dark2}; // #3F3356
    }
  }
`

export function tagVariantStyle($variant: T_TagVariant) {
  switch ($variant) {
    case 'primary':
      return primaryTagStyle
    case 'secondary':
      return secondaryTagStyle
    case 'tertiary':
      return tertiaryTagStyle
    default:
      return assertUnreachable($variant)
  }
}

export const StyledTag = styled('div')<T_StyledTagProps>`
  ${tagStyle}
  ${({ $variant }) => tagVariantStyle($variant)}
`
