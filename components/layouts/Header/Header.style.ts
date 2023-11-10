'use client'
import customBreakpoints from '@/styles/theme/breakpoints'
import { neutralColor } from '@/styles/theme/colors'
import { flexbox } from '@/styles/utils/flexbox'
import { textStyle } from '@/utils/text'
import { AppBar, css, styled } from '@mui/material'

export const StyledHeader = styled(AppBar)(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    height: 64px;
    padding: 0 16px;
    background-color: ${neutralColor.white1}; // #FFFFFF
    color: ${theme.palette.primary.dark}; // #6979F8
    box-shadow: none;
    border-bottom: 1px solid ${neutralColor.white3}; // #ECE9F1

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
        }
      }
    }

    ${customBreakpoints.tablet} {
      padding: 0 24px;

      .header-left {
        ${flexbox()}

        .nav-link-container {
          a {
            ${textStyle('body', 2)};
            padding: 8px;
            transition:
              background-color 0.3s ease,
              border-radius 0.3s ease;
            &:hover {
              background-color: ${neutralColor.white2}; // #F7F5F9
              border-radius: 8px;
            }
          }

          .navigation {
            color: ${neutralColor.dark2}; // #3F3356
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
