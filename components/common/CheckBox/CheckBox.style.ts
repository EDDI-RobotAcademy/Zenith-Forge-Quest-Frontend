'use client'

import { basePalette, neutralColor } from '@/styles/theme/colors'
import { textStyle } from '@/utils/text'
import { css, styled } from '@mui/material'

const CHECKBOX_SIZE = 16

export const StyledCheckbox = styled('label')(
  css`
    ${textStyle('body', 2)}
    position: relative;
    padding-left: 24px;
    cursor: pointer;

    .checkbox-icon {
      transition: box-shadow 0.2s ease-in-out;
    }

    &:hover {
      .checkbox-icon {
        box-shadow: 0 0 4px ${basePalette.primary.main};
      }
    }

    .checkbox-text {
      color: ${neutralColor.dark3};
    }
  `
)

export const StyledCheckboxInput = styled('input')(
  css`
    display: none;
    position: absolute;
    width: ${CHECKBOX_SIZE}px;
    height: ${CHECKBOX_SIZE}px;
    cursor: pointer;

    &:checked + span {
      background-color: ${basePalette.primary.dark}; // #6979F8
    }

    &:checked + span::after {
      height: 10px;
      opacity: 1;
      transition: height 0.1s ease-in-out, opacity 0.2s ease-in-out 0.15s;
    }

    &:checked + span::before {
      height: 6px;
      opacity: 1;
      transition: height 0.1s ease-in-out, opacity 0.2s ease-in-out;
    }

    &:disabled + span {
      background-color: ${neutralColor.disabled}; // #E9E8EA
    }
  `
)

export const StyledCheckboxIcon = styled('span')(
  css`
    position: absolute;
    top: 3px;
    left: 0;
    width: ${CHECKBOX_SIZE}px;
    height: ${CHECKBOX_SIZE}px;
    border-radius: 4px;
    background-color: ${neutralColor.white1}; // #FFFFFF
    box-shadow: 0 0 0 1px ${neutralColor.white3}; // #ECE9F1
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 2px;
      background-color: ${neutralColor.white1}; // #FFFFFF
      opacity: 0;
    }

    &::before {
      top: 7px;
      left: 4px;
      transform: rotate(-45deg);
    }

    &::after {
      top: 3px;
      left: 9px;
      transform: rotate(-135deg);
    }
  `
)
