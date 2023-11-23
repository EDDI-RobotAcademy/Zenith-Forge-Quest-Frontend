import { neutralColor } from '@/styles/theme/colors'
import { flexbox } from '@/styles/utils/flexbox'
import { textStyle } from '@/utils/text'
import { css, styled } from '@mui/material'

export const StyledDatepicker = styled('div')(
  ({ theme }) => css`
    .react-datepicker {
      ${textStyle('caption', 1)}
      font-weight: 600;
      border: none;
      border-radius: 8px;
      font-family: 'Noto Sans KR', sans-serif;

      .react-datepicker__triangle {
        &::after,
        ::before {
          display: none;
        }
      }
    }

    .react-datepicker__calendar-icon {
      padding: 0.7rem;
      right: 0;
    }

    .custom-datepicker {
      width: 100%;
      padding: 10px 12px;
      color: ${neutralColor.dark3}; // #1A051D
      background-color: ${neutralColor.white1}; // #FFFFFF
      border: 1px solid ${neutralColor.white2}; // #F7F5F9
      border-radius: 8px;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;

      &::placeholder {
        ${textStyle('body', 2)}
        color: ${neutralColor.dark1}; // #D0C9D6
      }

      &.error {
        color: ${theme.palette.error.dark}; // #FF647C
        border-color: ${theme.palette.error.dark}; // #FF647C

        &:focus {
          box-shadow: 0 0 4px ${theme.palette.error.dark}; // #FF647C
        }
      }

      &:not(.error):focus {
        box-shadow: 0 0 4px #6979f8; // '#6979F8'
      }

      &:not(:focus, :disabled):hover {
        background-color: ${neutralColor.white2}; // #F7F5F9
      }

      &:disabled {
        background-color: ${neutralColor.disabled}; // #E9E8EA
      }
    }

    .custom-calendar {
      .react-datepicker__day {
        font-size: 12px;
        color: ${neutralColor.dark2};
        border-radius: 50%;

        &:not(
            .react-datepicker__day--disabled,
            .react-datepicker__day--selected,
            .react-datepicker__day--weekend
          ):hover {
          color: ${theme.palette.secondary.dark};
          background-color: ${theme.palette.secondary.light};
        }

        &.react-datepicker__time-name {
          width: 32px;
          height: 32px;
          line-height: 2rem;
          margin: 8px;
        }

        &.react-datepicker__day--keyboard-selected {
          background: linear-gradient(-45deg, #bd7ae3, #8461c9) !important;
          color: #ffffff;
        }

        &--selected {
          background: linear-gradient(-45deg, #bd7ae3, #8461c9) !important;
          color: #ffffff;
        }

        &--sunday {
          color: ${theme.palette.error.dark};

          &:not(.react-datepicker__day--disabled, .react-datepicker__day--selected):hover {
            color: ${theme.palette.error.dark};
            background-color: ${theme.palette.error.light};
          }

          &.react-datepicker__day--selected {
            color: #ffffff;
            background: linear-gradient(-45deg, #fdafbb, #ff647c) !important;
          }

          &.react-datepicker__day--keyboard-selected {
            color: #ffffff;
            background: linear-gradient(-45deg, #fdafbb, #ff647c) !important;
          }
        }

        &--saturday {
          color: ${theme.palette.info.dark};

          &:not(.react-datepicker__day--disabled, .react-datepicker__day--selected):hover {
            color: ${theme.palette.info.dark};
            background-color: ${theme.palette.info.light};
          }

          &.react-datepicker__day--selected {
            color: #ffffff;
            background: linear-gradient(-45deg, #66b5f8, #0084f4) !important;
          }

          &.react-datepicker__day--keyboard-selected {
            color: #ffffff;
            background: linear-gradient(-45deg, #66b5f8, #0084f4) !important;
          }
        }

        &--disabled {
          color: ${neutralColor.dark1} !important;
        }
      }

      .react-datepicker__month-container {
        padding: 0 16px;
        .react-datepicker__header {
          background-color: ${neutralColor.white1};
          border-bottom: 1px dashed ${neutralColor.dark1};
        }

        .custom-header-container {
          ${flexbox('space-between', 'center')}

          .dropdown {
            .dropdownToggle {
              height: inherit;
              border: none;

              svg {
                display: none;
              }
            }

            .dropdownMenu {
              width: 88px;
              height: 120px;
              overflow-y: auto;

              ::-webkit-scrollbar {
                width: 12px;
                height: 12px;
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

              .menu-list {
                .menu-item {
                  button {
                    height: 24px;
                    padding: 8px;
                  }
                }
              }
            }
          }

          .nav-btn {
            width: 24px;
            height: 24px;
            padding: 0;
            border-radius: 8px;
            box-shadow: 0px 8px 16px 2px rgba(0, 0, 0, 0.1); /* 퍼짐 반경을 8px로, 투명도를 0.3으로 조절 */

            &:hover {
              background-color: ${neutralColor.white2};
            }

            &:disabled {
              background-color: ${neutralColor.white1};
              cursor: default;
            }
          }
        }

        .react-datepicker__day-names {
          margin-top: 4px;
        }
      }
    }
  `
)
