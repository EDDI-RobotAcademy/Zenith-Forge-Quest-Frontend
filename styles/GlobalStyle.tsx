import { GlobalStyles, css } from '@mui/material'
import { notoSansKR } from './theme/fonts'
import { neutralColor } from './theme/colors'
import theme from './theme/theme'
import customBreakpoints from './theme/breakpoints'

const globalStyles = (
  <GlobalStyles
    styles={css`
      * {
        margin: 0;
        box-sizing: border-box;
        font-family: ${notoSansKR};
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }

      html {
        width: 100%;
        height: 100vh;
      }

      body {
        width: 100%;
        max-width: 100vw;
        height: 100vh;
        background-color: ${neutralColor.background};

        ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #f0f0f0;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #d0d0d0;
          border-radius: 12px;

          &:hover {
            background-color: #b0b0b0;
          }
        }
      }

      h1 {
        margin: 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button,
      input,
      select,
      textarea {
        font-family: inherit;
        background-color: transparent;
        border: 0;
        box-shadow: 0;

        &:focus {
          outline: none;
          box-shadow: none;
        }
      }

      a,
      button {
        cursor: pointer;
      }

      ul,
      ol {
        padding-left: 0;
        list-style: none;
      }

      .a11y {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }

      ::selection {
        color: #ffffff;
        background-color: ${theme.palette.primary.dark}; // #6979F8
      }

      //* 반응형 미디어 쿼리
      ${customBreakpoints.mobile} {
        .mobile-hidden {
          display: none !important; /* 모바일 화면 크기에서만 보이지 않음 */
        }
      }

      ${customBreakpoints.tablet} {
        .tablet-hidden {
          display: none !important; /* 태블릿 화면 크기에서만 보이지 않음 */
        }
      }

      ${customBreakpoints.desktop} {
        .desktop-hidden {
          display: none !important; /* 데스크탑 화면 크기에서만 보이지 않음 */
        }
      }

      .mobile-only {
        display: none;
        ${customBreakpoints.mobile} {
          display: block !important; /* 모바일 화면 크기에서만 보임 */
        }
      }

      .tablet-only {
        display: none;
        ${customBreakpoints.tablet} {
          display: block !important; /* 태블릿 화면 크기에서만 보임 */
        }
      }

      .desktop-only {
        display: none;
        ${customBreakpoints.desktop} {
          display: block !important; /* 데스크탑 화면 크기에서만 보임 */
        }
      }
    `}
  />
)

export default globalStyles
