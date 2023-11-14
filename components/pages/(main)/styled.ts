'use client'
import customBreakpoints from '@/styles/theme/breakpoints'
import { neutralColor } from '@/styles/theme/colors'
import { ellipsisLineClamp } from '@/styles/utils/ellipsis'
import { flexbox } from '@/styles/utils/flexbox'
import { textStyle } from '@/utils/text'
import { Card, css, styled, Box, Grid } from '@mui/material'

const MUI_AVATAR_ROOT = 24
const MAIN_CARD_BORDER_RADIUS = 12
const MAIN_CARD_PADDING = 8
const MAIN_CARD_MARGIN = 8

//* Main Page Layout
export const StyledMainPageContainer = styled(Grid)(
  ({ theme }) => css`
    margin-top: ${MAIN_CARD_MARGIN * 10}px;
    padding: 0 ${MAIN_CARD_PADDING * 2}px;

    .MuiPaper-root {
      margin-bottom: ${MAIN_CARD_MARGIN * 3}px;
    }

    .main-section-first {
      ${flexbox('space-between')}
      margin-bottom: ${MAIN_CARD_MARGIN * 3}px;

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
      padding: 0 ${MAIN_CARD_PADDING * 3}px;
    }

    ${customBreakpoints.desktop} {
      width: 1200px;
      padding: 0px;
      margin: ${MAIN_CARD_MARGIN * 15}px auto 0 auto;
    }
  `
)

//* Main Card List
export const StyledMainCardItemList = styled(Box)(
  ({ theme }) => css`
    ${customBreakpoints.desktop} {
      display: flex;
      justify-content: space-between;
      .main-card {
        width: 600px;
      }

      .main-sub-list {
        width: 576px;
      }
    }
  `
)

//* Main Card
export const StyledMainCard = styled(Card)(
  ({ theme }) => css`
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
        height: 196px;
        border-radius: ${MAIN_CARD_BORDER_RADIUS}px;
      }
    }

    .card-contents {
      padding: ${MAIN_CARD_PADDING * 2}px;

      .card {
        margin-bottom: ${MAIN_CARD_MARGIN * 2}px;

        &.title {
          ${textStyle('header', 5)}
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

      .card-time {
        ${textStyle('body', 2)}
        margin-bottom: ${MAIN_CARD_MARGIN * 2}px;

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

    ${customBreakpoints.tablet} {
      .card-top {
        .card-media-container {
          height: 280px;
        }
      }
    }

    ${customBreakpoints.desktop} {
      .card-header {
        .card-header-container {
          .card-icon {
            .chat-icon,
            .share-icon {
              margin-right: ${MAIN_CARD_MARGIN * 2}px;
            }
          }
        }
      }

      .card-contents {
        height: 392px;

        .card {
          &.contents {
            a {
              ${textStyle('body', 1)}
              ${ellipsisLineClamp(10)}
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

//* Main Card Item
export const StyledMainCardItem = styled(Card)(
  ({ theme }) => css`
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

    .card-time {
      ${textStyle('body', 2)}
      margin-bottom: ${MAIN_CARD_MARGIN * 2}px;

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

    .card-contents {
      height: 80px;
      padding: 0 ${MAIN_CARD_PADDING * 2}px;

      .card {
        &.title {
          ${textStyle('subtitle', 1)}
          display: flex;
          justify-content: space-between;
          align-items: initial;

          .title-container {
            width: calc(100% - 116px);
          }

          .main-card-img {
            width: 126px;
            height: 96px;
            border-radius: ${MAIN_CARD_BORDER_RADIUS}px;

            img {
              border-radius: ${MAIN_CARD_BORDER_RADIUS}px;
            }
          }
        }

        &.contents {
          ${textStyle('body', 2)}
        }

        .title-anchor {
          margin-bottom: ${MAIN_CARD_MARGIN / 4}px;
          .anchor-under {
            &:hover {
              text-decoration: underline;
            }
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

      .MuiTypography-root {
        ${textStyle('caption', 1)};
        color: ${neutralColor.dark1}; // #D0C9D6
      }
    }

    ${customBreakpoints.tablet} {
      .card-contents {
        height: 140px;

        .card {
          margin-bottom: ${MAIN_CARD_MARGIN}px;

          &.title {
            align-items: initial;

            .card {
              &.contents {
                a {
                  ${ellipsisLineClamp(2)}
                }
              }
            }

            .title-container {
              width: 100%;
              margin-right: ${MAIN_CARD_MARGIN * 3}px;
            }

            .main-card-img {
              width: 216px;
              height: 216px;
            }
          }
        }
      }
    }

    ${customBreakpoints.desktop} {
      .card-header {
        .card-header-container {
          .card-icon {
            .chat-icon,
            .share-icon {
              margin-right: ${MAIN_CARD_MARGIN * 2}px;
            }
          }
        }
      }

      .card-time {
        ${textStyle('caption', 1)}
        margin-bottom: ${MAIN_CARD_MARGIN}px;
      }

      .card-contents {
        .card {
          &.title {
            ${textStyle('header', 6)}

            .main-card-img {
              width: 200px;
              height: 120px;
            }
          }
        }
      }

      .card-bottom {
        padding: ${MAIN_CARD_PADDING * 2}px;
        padding-top: 0;
      }
    }
  `
)
