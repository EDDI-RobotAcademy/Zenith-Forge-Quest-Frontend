'use client'
import customBreakpoints from '@/styles/theme/breakpoints'
import { flexbox } from '@/styles/utils/flexbox'
import { textStyle } from '@/utils/text'
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

    .user-btn-container {
      button {
        font-weight: 700;
      }

      .login-btn {
        margin-right: 8px;
      }
    }
  }

  .header-left {
    .left-style {
      &:not(:last-child) {
        margin-right: 40px;
      },
    }
  }

  ${customBreakpoints.tablet} {
    .header-left {
      ${flexbox()}
      
      .nav-link-container {
        a {
          ${textStyle('body', 2)};
          padding: 8px;
          transition: background-color 0.3s ease, border-radius 0.3s ease;
          &:hover {
            background-color: #f3f6f9;
            border-radius: 8px;
          }
        }

        .navigation {
          color: ${theme.palette.grey[700]};
        }
      }
    }
  }

  ${customBreakpoints.desktop} {
    .header-container {
     width: 1200px;
     margin: 0 auto;
    }
  }
`,
)

export default StyledHeader
