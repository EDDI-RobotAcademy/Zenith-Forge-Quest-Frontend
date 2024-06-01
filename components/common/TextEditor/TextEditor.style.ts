'use client'

import { neutralColor } from '@/styles/theme/colors'
import { textStyle } from '@/styles/utils/text'
import { css, styled } from '@mui/material'

const TEXT_EDITOR_RADIUS = 8
const SCROLLBAR_SIZE = 12

export const StyledTextEditor = styled('div')(
  ({ theme }) => css`
    .ql-toolbar {
      border-top-right-radius: ${TEXT_EDITOR_RADIUS}px;
      border-top-left-radius: ${TEXT_EDITOR_RADIUS}px;
    }

    .ql-container {
      height: 400px;
      border-bottom-right-radius: ${TEXT_EDITOR_RADIUS}px;
      border-bottom-left-radius: ${TEXT_EDITOR_RADIUS}px;

      .ql-editor {
        padding: 12px;
        border-bottom-right-radius: ${TEXT_EDITOR_RADIUS}px;
        border-bottom-left-radius: ${TEXT_EDITOR_RADIUS}px;
        transition:
          background-color 0.3s ease,
          box-shadow 0.3s ease;

        &.ql-blank {
          &:before {
            ${textStyle('body', 2)}
            left: 12px;
            font-style: normal;
            color: ${neutralColor.dark1}; // #D0C9D6
          }
        }

        ::-webkit-scrollbar {
          width: ${SCROLLBAR_SIZE}px;
          height: ${SCROLLBAR_SIZE}px;
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

        &:focus {
          box-shadow: 0 0 4px #6979f8; // '#6979F8'
        }

        &:not(:focus, :disabled):hover {
          background-color: ${neutralColor.white2}; // #F7F5F9
        }
      }
    }

    .ql-snow {
      border: 1px solid ${neutralColor.white3};

      .ql-formats {
        color: ${neutralColor.dark3};
      }
    }
  `,
)
