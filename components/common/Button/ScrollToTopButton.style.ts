import { Fab, css, styled } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export const StyledScrollToTopButton = styled(Fab)(
  ({ theme }) => css`
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    background-color: ${theme.palette.secondary.main};

    &:hover {
      background-color: ${theme.palette.secondary.dark};
    }

    &.hidden {
      display: none;
    }
  `
)

export const StyledArrowIcon = styled(KeyboardArrowUpIcon)(
  css`
    color: #ffffff;
  `
)
