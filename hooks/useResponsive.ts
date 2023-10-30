import customBreakpoints from '@/styles/breakpoints'
import { useMediaQuery } from '@mui/material'
import { useMemo } from 'react'
import { isBrowser as _isBrowser, isMobile as _isMobile, isTablet as _isTablet } from 'react-device-detect'
import { useIsMounted } from './useIsMounted'

export function useResponsive() {
  const mounted = useIsMounted()

  const isMobileMedia = useMediaQuery(customBreakpoints.mobile)
  const isTabletMedia = useMediaQuery(customBreakpoints.tablet)
  const isLaptopMedia = useMediaQuery(customBreakpoints.laptop)
  const isDesktopMedia = useMediaQuery(customBreakpoints.desktop)

  const isMobile = useMemo(() => mounted && isMobileMedia, [isMobileMedia, mounted])

  const isTablet = useMemo(() => mounted && isTabletMedia, [isTabletMedia, mounted])

  const isLaptop = useMemo(() => mounted && isLaptopMedia, [isLaptopMedia, mounted])

  const isDesktop = useMemo(() => mounted && isDesktopMedia, [isDesktopMedia, mounted])

  const isMobileOrTablet = useMemo(() => isMobile || isTablet, [isMobile, isTablet])

  const isLaptopOrDesktop = useMemo(() => isLaptop || isDesktop, [isLaptop, isDesktop])

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isMobileOrTablet,
    isLaptopOrDesktop,
  }
}
