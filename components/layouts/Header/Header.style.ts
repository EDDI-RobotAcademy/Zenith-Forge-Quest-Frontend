'use client'
import customBreakpoints from '@/styles/theme/breakpoints'
import { AppBar, css, styled } from '@mui/material'

export const StyledHeader = styled(AppBar)(
  ({ theme }) => css`
  display: flex;
  justify-content: center;
  height: 64px;
  padding: 0 16px 0 16px;
  background-color: #ffffff;
  color: ${theme.palette.secondary.main};
  box-shadow: none;
  border-bottom: 1px solid #dae2ed;

  .header-right {
    .icon {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  .user-btn-container {
    button {
      font-weight: 700;
    }
    .login-btn {
      margin-right: 8px;
    }
  }

  .nav-link-container {
    a {
      &:hover {
        opacity: 0.5;
      }

      &:not(:last-child) {
        margin-right: 40px;
      },
    }
  }

  ${customBreakpoints.tablet} {
    .header-right {
      display: flex;
    }
  }
`
)

export default StyledHeader
