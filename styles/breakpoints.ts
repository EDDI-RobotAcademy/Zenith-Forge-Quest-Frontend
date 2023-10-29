import { I_Breakpoints } from '@/types/styles/breakpoints'
import theme from './theme'

const customBreakpoints: I_Breakpoints = {
  mobile: theme.breakpoints.down('md'),
  tablet: theme.breakpoints.between('sm', 'md'),
  laptop: theme.breakpoints.between('md', 'lg'),
  desktop: theme.breakpoints.up('lg'),
}

export default customBreakpoints
