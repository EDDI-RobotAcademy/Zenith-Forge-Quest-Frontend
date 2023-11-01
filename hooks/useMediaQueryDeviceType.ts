import customBreakpoints from '@/styles/breakpoints'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'

export function useMediaQueryDeviceType() {
  const isMobileMedia = useMediaQuery(customBreakpoints.mobile)
  const isTabletMedia = useMediaQuery(customBreakpoints.tablet)
  const isLaptopMedia = useMediaQuery(customBreakpoints.laptop)
  const isDesktopMedia = useMediaQuery(customBreakpoints.desktop)

  return { isMobileMedia, isTabletMedia, isLaptopMedia, isDesktopMedia }
}
