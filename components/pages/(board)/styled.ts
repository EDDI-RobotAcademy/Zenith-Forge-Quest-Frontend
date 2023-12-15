'use client'

import customBreakpoints from '@/styles/theme/breakpoints'
import { neutralColor } from '@/styles/theme/colors'
import { flexbox } from '@/styles/utils/flexbox'
import { AppBar, css, styled } from '@mui/material'

const MAIN_CARD_PADDING = 8
const MAIN_CARD_MARGIN = 8

export const StyledBoardHeader = styled(AppBar)(
  ({ theme }) => css`
    ${flexbox('space-between')}
    flex-direction: row;
    height: 56px;
    padding: 0 16px;
    background-color: ${neutralColor.background}; // #FCFCFC
    border-bottom: 1px solid ${neutralColor.white3}; // #ECE9F1
    box-shadow: none;

    .back-link {
      ${flexbox()}
      width: 30px;
      height: 40px;
    }
  `
)

export const StyledBoardPageContainer = styled('main')(
  ({ theme }) => css`
    margin-top: ${MAIN_CARD_MARGIN * 10}px;
    padding: 0 ${MAIN_CARD_PADDING * 2}px;

    .MuiPaper-root {
      margin-bottom: ${MAIN_CARD_MARGIN * 3}px;
    }

    .main-section {
      .section-header {
        ${flexbox('space-between')}
        margin-bottom: ${MAIN_CARD_MARGIN * 2}px;

        .title {
          color: ${neutralColor.dark3}; // #1A051D
          font-weight: 600;
        }
      }
    }

    ${customBreakpoints.tablet} {
      padding: 0 ${MAIN_CARD_PADDING * 3}px;
    }

    ${customBreakpoints.desktop} {
      width: 1200px;
      padding: 0px;
      margin: ${MAIN_CARD_MARGIN * 15}px auto 0 auto;
    }
  `
)

export const StyledBoardLeftForm = styled('form')(
  ({ theme }) => css`
    .dropdown,
    .editor-container {
      margin-bottom: ${MAIN_CARD_MARGIN * 2}px;
    }

    .text-container {
      display: flex;
      justify-content: flex-end;
      color: ${neutralColor.dark3}; // #1A051D
    }
  `
)
