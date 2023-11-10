import { neutralColor } from '@/styles/theme/colors'
import { Button, css, styled } from '@mui/material'

const HEADER_SEARCH_MARGIN = 8

export const StyledHeaderSearchButton = styled(Button)(
  ({ theme }) => css`
    min-width: 160px;
    height: 32px;
    background-color: ${neutralColor.white2}; // #F7F5F9
    border: 1px solid ${neutralColor.white3}; // #ECE9F1
    border-radius: 8px;
    margin-right: ${HEADER_SEARCH_MARGIN}px;

    .MuiSvgIcon-root {
      margin-right: ${HEADER_SEARCH_MARGIN}px;
    }

    .MuiTypography-root {
      margin-right: ${HEADER_SEARCH_MARGIN * 10}px;
    }
  `,
)

export default StyledHeaderSearchButton
