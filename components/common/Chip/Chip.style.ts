import { neutralColor } from '@/styles/theme/colors'
import theme from '@/styles/theme/theme'
import { Chip, css, styled } from '@mui/material'

export const StyledChip = styled(Chip)(
  ({ theme }) => css`
    color: ${neutralColor.white1};
    font-weight: 600;
    &.link-chip {
      &:hover {
        opacity: 0.8;
      }
    }
    .MuiChip-label {
      padding-bottom: 1px;
    }
  `
)
