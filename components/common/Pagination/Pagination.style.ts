'use client'

import { basePalette, neutralColor } from '@/styles/theme/colors'
import { flexbox } from '@/styles/utils/flexbox'
import { styled } from '@mui/material'

export const StyledPagination = styled('ul')`
  ${flexbox()}
`

export const StyledPaginationItem = styled('li')`
  button {
    height: 32px;
    margin: 0 4px;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:active {
      opacity: 0.8;
    }

    &:hover {
      background-color: ${neutralColor.white3};
    }

    &.active {
      color: ${basePalette.primary.dark};
      background-color: ${basePalette.primary.light};
    }
  }

  .current-page-btn {
    min-width: 32px;
    max-height: 100%;
    padding: 2px 8px;
    font-weight: 700;
    color: ${neutralColor.dark3};
  }

  .page-btn {
    padding: 6px;
  }
`
