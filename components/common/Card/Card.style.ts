'use client'

import customBreakpoints from '@/styles/theme/breakpoints'
import { neutralColor } from '@/styles/theme/colors'
import { ellipsisLineClamp } from '@/styles/utils/ellipsis'
import { textStyle } from '@/utils/text'
import { Card, css, styled } from '@mui/material'

export type T_CardSize = 'sm' | 'lg'

export type T_StyledCardProps = {
  $size: T_CardSize
}

const MUI_AVATAR_ROOT = 24
const MAIN_CARD_BORDER_RADIUS = 12
const MAIN_CARD_PADDING = 8
const MAIN_CARD_MARGIN = 8

export const StyledCard = styled(Card)<T_StyledCardProps>(
  ({ theme, $size }) => css`
    width: 100%;
    transition: border-color 0.3s, box-shadow 0.3s;
    border: 1px solid ${neutralColor.white2}; // #F7F5F9
    border-radius: ${MAIN_CARD_BORDER_RADIUS}px;

    &:hover {
      box-shadow: 0px 4px 16px ${neutralColor.white3}; // #ECE9F1
    }

    .card-header {
      .MuiCardHeader-avatar {
        width: 100%;
      }
      .card-header-container {
        width: 100%;
        justify-content: space-between;

        .card-icon {
          .chat-icon,
          .share-icon {
            margin-right: ${MAIN_CARD_MARGIN}px;
          }
        }
      }
    }

    .card-top {
      padding: 0 ${MAIN_CARD_PADDING * 2}px;
      .card-media-container {
        height: ${$size === 'sm' ? '100px' : '196px'};
        border-radius: ${MAIN_CARD_BORDER_RADIUS}px;
      }
    }

    .card-contents {
      padding: ${MAIN_CARD_PADDING * 2}px;

      .card {
        margin-bottom: ${MAIN_CARD_MARGIN * 2}px;

        &.title {
          ${$size === 'sm' ? textStyle('header', 6) : textStyle('header', 5)}
          font-weight: 600;
          color: ${neutralColor.dark3}; // #1A051D
        }

        &.time {
          ${textStyle('body', 2)}
          color: ${neutralColor.dark2}; // #3F3356

          .MuiSvgIcon-root {
            margin-top: 2px;
          }

          .minute {
            margin-left: 4px;
            margin-right: 4px;
          }

          .hours {
            margin-left: 4px;
          }
        }

        &.contents {
          a {
            ${textStyle('body', 2)}
            ${ellipsisLineClamp(3)}
          }
        }

        .anchor-under {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .card-bottom {
      padding: ${MAIN_CARD_PADDING * 2}px;

      .MuiAvatar-root {
        width: ${MUI_AVATAR_ROOT}px;
        height: ${MUI_AVATAR_ROOT}px;
        margin-right: ${MAIN_CARD_MARGIN}px;
      }

      .author {
        ${textStyle('caption', 1)};
        color: ${neutralColor.dark1}; // #D0C9D6
      }
    }

    //* 테블릿 사이즈 이상 UI
    ${customBreakpoints.tablet} {
      .card-top {
        .card-media-container {
          height: ${$size === 'sm' ? '160px' : '280px'};
        }
      }
    }

    //* 데스크탑 사이즈 이상 UI
    ${customBreakpoints.desktop} {
      .card-header {
        .card-header-container {
          .card-icon {
            .chat-icon,
            .share-icon {
              margin-right: ${$size === 'sm' ? MAIN_CARD_MARGIN : MAIN_CARD_MARGIN * 2}px;
            }
          }
        }
      }

      .card-contents {
        height: ${$size === 'sm' ? '160px' : '392px'}; // 예시 높이 값

        .card {
          margin-bottom: ${$size === 'sm' ? MAIN_CARD_MARGIN : MAIN_CARD_MARGIN * 2}px;

          &.time {
            ${$size === 'sm' ? textStyle('caption', 1) : textStyle('body', 2)}
          }

          &.contents {
            color: ${neutralColor.dark3}; // #1A051D
            a {
              ${$size === 'sm' ? textStyle('body', 2) : textStyle('body', 1)}
              ${$size === 'sm' ? ellipsisLineClamp(2) : ellipsisLineClamp(10)}
            }
          }
        }
      }
      .card-bottom {
        padding-bottom: ${MAIN_CARD_PADDING * 2}px !important;
      }
    }
  `
)
