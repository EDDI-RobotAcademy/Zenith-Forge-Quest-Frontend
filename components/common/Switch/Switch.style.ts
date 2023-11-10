import { neutralColor } from '@/styles/theme/colors'
import { Switch, css, styled } from '@mui/material'

const MUI_SWITCH_THUMB_SIZE = 22

export const StyledSwitch = styled(Switch)(
  ({ theme }) => css`
    width: 46px;
    height: 26px;
    padding: 0;
    & .MuiSwitch-switchBase {
      padding: 0;
      margin: 2px;
      transition-duration: 300ms;

      &.Mui-checked {
        transform: translateX(20px);
        color: ${neutralColor.white1}; // #FFFFFF

        & + .MuiSwitch-track {
          background-color: ${theme.palette.secondary.dark}; // #BE52F2
          opacity: 1;
        }
      }
    }

    & .MuiSwitch-thumb {
      width: ${MUI_SWITCH_THUMB_SIZE}px;
      height: ${MUI_SWITCH_THUMB_SIZE}px;
    }

    & .MuiSwitch-track {
      border-radius: 13px;
      background-color: ${neutralColor.white3}; // #ECE9F1
      opacity: 1;
      transition: ${theme.transitions.create(['background-color'], {
        duration: 500,
      })};
    }
  `,
)
