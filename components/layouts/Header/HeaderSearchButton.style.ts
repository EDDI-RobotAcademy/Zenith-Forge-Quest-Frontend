import { Button, css, styled } from '@mui/material'

const HEADER_SEARCH_MARGIN = 8

export const StyledHeaderSearchButton = styled(Button)(
  ({ theme }) => css`
    min-width: 160px;
    height: 32px;
    background-color: #f3f6f9;
    border: 1px solid ${theme.palette.grey[300]};
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
