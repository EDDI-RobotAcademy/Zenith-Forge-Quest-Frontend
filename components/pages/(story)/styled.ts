'use client'

import customBreakpoints from '@/styles/theme/breakpoints'
import { neutralColor } from '@/styles/theme/colors'
import { flexbox } from '@/styles/utils/flexbox'
import { textStyle } from '@/styles/utils/text'
import { css, styled } from '@mui/material'
import { motion } from 'framer-motion'

const MAIN_CARD_PADDING = 8
const MAIN_CARD_MARGIN = 8

export const StyledStoryLayout = styled('main')()

export const StyledStoryPageContainer = styled('div')(
  ({ theme }) => css`
    display: flex;
    gap: 24px;
    margin-top: ${MAIN_CARD_MARGIN * 5}px;
    padding: 0 ${MAIN_CARD_PADDING * 2}px;

    .MuiPaper-root {
      margin-bottom: ${MAIN_CARD_MARGIN * 3}px;
    }

    ${customBreakpoints.tablet} {
      padding: 0 ${MAIN_CARD_PADDING * 3}px;
    }

    ${customBreakpoints.desktop} {
      width: 1200px;
      padding: 0px;
      margin: ${MAIN_CARD_MARGIN * 4}px auto 0 auto;
    }
  `,
)

export const StyledStoryAccordionSidebar = styled(motion.aside)(
  ({ theme }) => css`
    position: sticky;
    top: 80px;
    width: 224px;
    height: 100%;
    border: 1px solid ${neutralColor.white3}; // #ECE9F1
    background-color: ${neutralColor.white1}; // #FFFFFF
    border-radius: 8px;

    .header {
      ${textStyle('body', 1, neutralColor.dark3)}
      cursor: pointer;
      padding: 8px 16px;
      font-weight: 700;

      &:hover {
        background-color: ${neutralColor.white2};
      }
    }

    .accordion-item {
      ${flexbox('space-between')}
      cursor: pointer;
      font-weight: 700;
      padding: 8px 16px;
      border-radius: 4px;

      &:hover {
        background-color: ${neutralColor.white2};
      }

      .title-icon-container {
        display: flex;

        .icon {
          margin-right: 8px;
        }

        .title {
          margin-right: 8px;
        }
      }

      .accordion-icon {
        transition: transform 0.3s ease;

        &.open {
          transform: rotate(-180deg);
        }
      }
    }
    .content-list {
      .content-item {
        cursor: pointer;
        padding: 8px 16px;
        border-radius: 4px;

        &:hover {
          background-color: ${neutralColor.white2};
        }

        &.active {
          background-color: ${neutralColor.white3};
        }
      }
    }
  `,
)

export const StyledStorySection = styled('section')(
  ({ theme }) => css`
    width: 100%;

    ${customBreakpoints.desktop} {
      .card-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 16px;
        margin-top: 16px;
      }
    }
  `,
)
