import { neutralColor } from '@/styles/theme/colors'
import { flexbox } from '@/styles/utils/flexbox'
import { textStyle } from '@/styles/utils/text'
import { css, styled } from '@mui/material'
import { motion } from 'framer-motion'

const DROPDOWN_PADDING = 8

const DROPDOWN_BORDER_RADIUS = 8

export const StyledDropdown = styled('div')(
  ({ theme }) => css`
    position: relative;
    z-index: 1;
    transition: 200ms;
  `
)

export const StyledDropdownMenu = styled(motion.div)`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 144px;
  padding: ${DROPDOWN_PADDING}px;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: ${DROPDOWN_BORDER_RADIUS}px;
  border: 1px solid ${neutralColor.white3}; // #ECE9F1

  .menu-item {
    width: 100%;
    margin-top: 2px;

    &.selected {
      .label {
        color: ${neutralColor.dark3}; // #1A051D
      }
    }

    &:first-child {
      margin-top: 0;
    }

    button {
      ${flexbox('start')}
      width: 100%;
      height: 40px;
      padding: 8px 8px 8px 12px;
      white-space: nowrap;
      text-align: left;
      border-radius: ${DROPDOWN_BORDER_RADIUS}px;
      transition: 150ms;

      &:hover {
        background-color: ${neutralColor.white2}; // #F7F5F9
      }
    }

    .label {
      ${textStyle('body', 2)}
      flex-grow: 1;
      color: ${neutralColor.dark3}; // #1A051D
      text-align: left;
      transition: 150ms;
    }

    .icon {
      flex-shrink: 0;
    }
  }
`

export const StyledDropdownToggle = styled('button')(
  ({ theme }) => css`
    ${flexbox('start')}
    ${textStyle('body', 2)}
    font-weight: 700;
    background-color: #ffffff;
    height: 40px;
    padding: 0 ${DROPDOWN_PADDING * 2}px;
    border-radius: ${DROPDOWN_BORDER_RADIUS}px;
    border: 1px solid ${neutralColor.white3}; // #ECE9F1

    color: ${neutralColor.dark3}; // #1A051D
  `
)
