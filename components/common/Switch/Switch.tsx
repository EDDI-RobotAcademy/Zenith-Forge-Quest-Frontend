'use client'

import { SwitchProps as MuiSwitchProps } from '@mui/material'
import { StyledSwitch } from './Switch.style'

interface I_SwitchProps extends MuiSwitchProps {}

function Switch({ ...props }: I_SwitchProps) {
  return <StyledSwitch {...props} />
}

export default Switch
