import { TooltipProps as MuiTooltipProps } from '@mui/material'
import { StyledTooltip } from './Tooltip.style'
interface I_TooltipProps extends MuiTooltipProps {}

function Tooltip({ ...props }: I_TooltipProps) {
  return <StyledTooltip arrow {...props} />
}

export default Tooltip
