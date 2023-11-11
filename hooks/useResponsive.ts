import { useMemo } from 'react'
import { isBrowser as _isBrowser, isMobile as _isMobile, isTablet as _isTablet } from 'react-device-detect'
import { useMediaQueryDeviceType } from './useMediaQueryDeviceType'

export function useResponsive() {
  const { isMobileMedia, isTabletMedia, isLaptopMedia, isDesktopMedia } = useMediaQueryDeviceType()

  //* 모바일 사이즈에서만 보이는 함수 -성빈-
  const isMobile = useMemo(() => isMobileMedia, [isMobileMedia])

  //* 테블릿 사이즈에서만 보이는 함수 -성빈-
  const isTablet = useMemo(() => isTabletMedia, [isTabletMedia])

  //* 랩탑 사이즈에서만 보이는 함수 - 성빈 -
  const isLaptop = useMemo(() => isLaptopMedia, [isLaptopMedia])

  //* 데스크탑 사이즈에서만 보이는 함수 - 성빈 -
  const isDesktop = useMemo(() => isDesktopMedia, [isDesktopMedia])

  //* 모바일, 테블릿 사이즈에서만 보이는 함수 - 성빈 -
  const isMobileOrTablet = useMemo(() => isMobileMedia || isTabletMedia, [isMobileMedia, isTabletMedia])

  //* 테블릿, 데스크탑 사이즈에서만 보이는 함수 - 성빈 -
  const isTabletOrDesktop = useMemo(() => isTabletMedia || isDesktopMedia, [isTabletMedia, isDesktopMedia])

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isMobileOrTablet,
    isTabletOrDesktop,
  }
}
