import { neutralColor } from '@/styles/theme/colors'
import theme from '@/styles/theme/theme'
import { Chip, css, styled } from '@mui/material'

export const StyledChip = styled(Chip)(
  ({ theme }) => css`
    color: ${neutralColor.white1};
  `
)
