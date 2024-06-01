'use client'

import { neutralColor } from '@/styles/theme/colors'
import { flexbox } from '@/styles/utils/flexbox'
import { textStyle } from '@/styles/utils/text'
import { css, styled } from '@mui/material'

const SCROLLBAR_SIZE = 12
const SEND_BTN_SIZE = 36
const AVATAR_SIZE = 24

export const StyledTextBox = styled('div')(
  ({ theme }) => css`
    width: 100%;
    padding: 9.5px 12px;
    background-color: ${neutralColor.white1}; // #FFFFFF
    border: 1px solid ${neutralColor.white3}; // #ECE9F1
    border-radius: 8px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:not(.error).focus {
      box-shadow: 0 0 4px #6979f8; // '#6979F8'
    }

    &:not(.focus, :disabled):hover {
      background-color: ${neutralColor.white2}; // #F7F5F9
    }

    &:disabled {
      background-color: ${neutralColor.disabled}; // #E9E8EA
    }

    .text-box-top {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      .avatar {
        width: ${AVATAR_SIZE}px;
        height: ${AVATAR_SIZE}px;
        margin-right: 8px;
      }

      .author {
        ${textStyle('body', 2)}
        font-weight: 700;
      }
    }

    .text-box {
      width: 100%;
      max-height: 400px;

      &::placeholder {
        ${textStyle('body', 2)}
        color: ${neutralColor.dark1}; // #D0C9D6
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
    }

    .text-length-container {
      text-align: right;
      margin-bottom: 8px;
    }

    .text-box-footer {
      ${flexbox('between')}

      .photo-btn {
        margin-top: 10px;
        padding: 1px 0px;
      }

      .send-btn {
        width: ${SEND_BTN_SIZE}px;
        height: ${SEND_BTN_SIZE}px;
        border-radius: 50%;
        background: linear-gradient(-60deg, #bd7ae3, #8461c9);
        transition: all 0.3s ease;

        &:hover {
          opacity: 0.8;
          scale: 1.05;
        }

        svg {
          margin-left: 4px;
          rotate: calc(-40deg);
        }
      }
    }
  `
)
