import theme from '@/styles/theme/theme'
import { flexbox } from '@/styles/utils/flexbox'
import { Box, css, styled } from '@mui/material'

export const StyledImage = styled(Box)(
  ({ theme }) => css`
    ${flexbox()}
    position: relative;

    img {
      width: 100% !important;
      height: unset !important;
    }
  `
)
