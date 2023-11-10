import customBreakpoints from '@/styles/theme/breakpoints'
import theme from '@/styles/theme/theme'
import { Box, css, styled } from '@mui/material'

export const StyledMainCardItemList = styled(Box)(
  ({ theme }) => css`
    ${customBreakpoints.desktop} {
      display: flex;
    }
  `
)
