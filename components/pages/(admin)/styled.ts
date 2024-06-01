'use client'

import { flexbox } from '@/styles/utils/flexbox'
import { css, styled } from '@mui/material'

const ADMIN_PAGE_PADDING = 8
const ADMIN_PAGE_MARGIN = 8
const ADMIN_PAGE_BORDER_RADIUS = 8

export const StyledAdminPageContainer = styled('main')(
  ({ theme }) => css`
    ${flexbox()}
    height: 100vh;
  `
)

export const StyledAdminLoginForm = styled('form')(
  ({ theme }) => css`
    ${flexbox()}
    flex-direction: column;
    width: 300px;
    margin: auto;
    padding: ${ADMIN_PAGE_PADDING * 2}px;
    border-radius: ${ADMIN_PAGE_BORDER_RADIUS}px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px #00000029;

    p {
      font-weight: 700;
    }

    .title-container {
      ${flexbox()}
      height: 48px;

      .form-title {
        margin-right: ${ADMIN_PAGE_MARGIN}px;
      }
    }

    .form-text {
      margin-bottom: ${ADMIN_PAGE_MARGIN}px;
    }

    .controller-container {
      margin-right: ${ADMIN_PAGE_MARGIN}px;
    }

    .submit-btn {
      width: 100%;
      height: 40px;
      font-weight: 700;
      border-radius: ${ADMIN_PAGE_BORDER_RADIUS}px;
    }
  `
)
