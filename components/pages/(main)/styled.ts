'use client'
import customBreakpoints from '@/styles/theme/breakpoints'
import { neutralColor } from '@/styles/theme/colors'
import { ellipsisLineClamp } from '@/styles/utils/ellipsis'
import { flexbox } from '@/styles/utils/flexbox'
import { textStyle } from '@/styles/utils/text'
import { Card, css, styled, Box, Grid, List } from '@mui/material'

const MUI_AVATAR_ROOT = 24
const MAIN_CARD_BORDER_RADIUS = 12
const MAIN_CARD_PADDING = 8
const MAIN_CARD_MARGIN = 8

//* Main Page Layout
export const StyledMainPageContainer = styled(Grid)(
  ({ theme }) => css`
    margin-top: ${MAIN_CARD_MARGIN * 5}px;
    padding: 0 ${MAIN_CARD_PADDING * 2}px;

    .MuiPaper-root {
      margin-bottom: ${MAIN_CARD_MARGIN * 3}px;
    }

    .main-section {
      .section-header {
        ${flexbox('space-between')}
        margin-bottom: ${MAIN_CARD_MARGIN * 2}px;

        .title {
          color: ${neutralColor.dark3}; // #1A051D
          font-weight: 600;
        }
      }
    }

    ${customBreakpoints.tablet} {
      padding: 0 ${MAIN_CARD_PADDING * 3}px;
    }

    ${customBreakpoints.desktop} {
      width: 1200px;
      padding: 0px;
      margin: ${MAIN_CARD_MARGIN * 8}px auto 0 auto;
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

export const StyledMainSection = styled(Box)(
  ({ theme }) => css`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(1, 1fr);

    ${customBreakpoints.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${customBreakpoints.desktop} {
      grid-template-columns: repeat(3, 1fr);
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
      color: ${neutralColor.dark2};
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
          color: ${neutralColor.dark3}; // #1A051D
        }

        .title-anchor {
          color: ${neutralColor.dark3}; // #1A051D
          font-weight: 600;

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

//* MainList
export const StyledMainListItem = styled(List)(
  ({ theme }) => css`
    display: flex;
    padding-top: 0;
    padding-bottom: 0;

    .raking-list-item {
      width: inherit;
      padding-left: 0;
      padding-right: 0;

      .square-ranking {
        ${flexbox()}
        ${textStyle('body', 2)}
        width: 32px;
        height: 32px;
        font-weight: 600;
        margin-right: 8px;
        border-radius: 12px;
        color: ${theme.palette.primary.dark}; // #6979F8
        background-color: ${neutralColor.white3}; //* #ECE9F1

        &.top {
          color: ${neutralColor.white1}; // #FFFFFF
          background-color: ${theme.palette.primary.dark}; // #6979F8
        }
      }
    }

    .MuiListItemText-root {
      .MuiTypography-root {
      }
    }
  `
)
