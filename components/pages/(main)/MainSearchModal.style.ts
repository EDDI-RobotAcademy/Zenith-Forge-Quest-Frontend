'use client'
import { flexbox } from '@/styles/utils/flexbox'
import { css } from '@mui/material'

import { Modal, styled } from '@mui/material'

const StyledMainSearchModal = styled(Modal)(
  ({ theme }) => css`
  .search-container {
    height: 100vh;
    max-width: 768px;
    background-color: #ffffff;

    .search-header {
      ${flexbox()}
      border-bottom: 1px solid #dae2ed;
      padding: 0px 8px;

      .form {
        width: 100%;

        .search-input {
          width: 100%;
          height: 48px;
          padding: 0 16px;
          margin: 16px 0;
          border: none;
        },
      },

      .modal-cancel-btn {
        min-width: 56px;
        height: 40px;
        border: 1px solid #dae2ed;
        font-size: 12px;
        border-radius: 12px;
        background-color: #f6f6f6;
        color: ${theme.palette.secondary.main};

        &:hover: {
          opacity: 0.8,
        },

      },
    },
  },
  `
)
export default StyledMainSearchModal
