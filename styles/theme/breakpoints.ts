import { I_Breakpoints } from '@/types/styles/breakpoints'
import theme from './theme'

const customBreakpoints: I_Breakpoints = {
  mobile: theme.breakpoints.down('tablet'),
  tablet: theme.breakpoints.up('tablet'),
  laptop: theme.breakpoints.between('laptop', 'desktop'), // * 사용안함 (반응형은 Mobile, tablet, desktop)
  desktop: theme.breakpoints.up('desktop'),
}

export default customBreakpoints
