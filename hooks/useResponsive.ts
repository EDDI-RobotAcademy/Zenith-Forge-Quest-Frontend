import { useMemo } from 'react'
import { isBrowser as _isBrowser, isMobile as _isMobile, isTablet as _isTablet } from 'react-device-detect'
import { useIsMounted } from './useIsMounted'
import { useMediaQueryDeviceType } from './useMediaQueryDeviceType'

export function useResponsive() {
  const mounted = useIsMounted()
  const { isMobileMedia, isTabletMedia, isLaptopMedia, isDesktopMedia } = useMediaQueryDeviceType()

  //* 모바일 사이즈에서만 보이는 함수 -성빈-
  const isMobile = useMemo(() => mounted && isMobileMedia, [isMobileMedia, mounted])

  //* 테블릿 사이즈에서만 보이는 함수 -성빈-
  const isTablet = useMemo(() => mounted && isTabletMedia, [isTabletMedia, mounted])

  //* 랩탑 사이즈에서만 보이는 함수 - 성빈 -
  const isLaptop = useMemo(() => mounted && isLaptopMedia, [isLaptopMedia, mounted])

  //* 데스크탑 사이즈에서만 보이는 함수 - 성빈 -
  const isDesktop = useMemo(() => mounted && isDesktopMedia, [isDesktopMedia, mounted])

  //* 모바일, 테블릿 사이즈에서만 보이는 함수 - 성빈 -
  const isMobileOrTablet = useMemo(
    () => (mounted && isMobileMedia) || (mounted && isTabletMedia),
    [isMobileMedia, isTabletMedia, mounted],
  )

  //* 테블릿, 데스크탑 사이즈에서만 보이는 함수 - 성빈 -
  const isTabletOrDesktop = useMemo(
    () => (mounted && isTabletMedia) || (mounted && isDesktopMedia),
    [isTabletMedia, isDesktopMedia, mounted],
  )

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isMobileOrTablet,
    isTabletOrDesktop,
  }
}
