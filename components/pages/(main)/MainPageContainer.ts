'use client'

import customBreakpoints from '@/styles/theme/breakpoints'
import { flexbox } from '@/styles/utils/flexbox'
import { textStyle } from '@/utils/text'
import { Grid, css, styled } from '@mui/material'

export const StyledMainPageContainer = styled(Grid)(
  ({ theme }) => css`
    margin-top: 80px;
    padding: 0 16px;

    .MuiPaper-root {
      margin-bottom: 24px;
    }

    .main-section-first {
      ${flexbox('space-between')}
      margin-bottom: 24px;

      .section-header {
        font-weight: 400;
      }

      .section-link {
        display: flex;

        .show-more-text {
          ${textStyle('body', 1)}
          font-weight: 600;
          color: ${theme.palette.secondary.main}; // #BE52F2
        }
      }
    }

    ${customBreakpoints.tablet} {
      padding: 0 24px;
    }

    ${customBreakpoints.desktop} {
      width: 1200px;
      padding: 0px;
      margin: 120px auto 0 auto;
    }
  `
)
