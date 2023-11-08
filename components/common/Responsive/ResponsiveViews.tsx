import { useResponsive } from '@/hooks/useResponsive'
/**
 * 반응형 뷰를 위한 컴포넌트를 생성하는 함수
 * predicate 함수의 결과에 따라 자식 요소를 렌더링하거나 숨깁니다.
 *
 * @param predicate 반응형 훅의 반환값을 인수로 받아 불리언 값을 반환하는 함수
 * @param name 생성된 컴포넌트의 displayName을 설정하기 위한 문자열
 * @returns React 컴포넌트. predicate 함수의 결과에 따라 자식 요소를 렌더링하거나 숨깁니다.
 */
interface I_ResponsiveViewProps {
  children: React.ReactNode
}

const responsiveViews = (predicate: (responsive: ReturnType<typeof useResponsive>) => boolean, name: string) => {
  const Component = ({ children }: I_ResponsiveViewProps) => {
    const responsive = useResponsive()
    return predicate(responsive) ? <>{children}</> : null
  }
  Component.displayName = name
  return Component
}

//* 모바일 환경에서만 보임 - 성빈 -
export const Mobile = responsiveViews(({ isMobile }) => isMobile, 'Mobile')

//* 태블릿 환경에서만 보임 - 성빈 -
export const Tablet = responsiveViews(({ isTablet }) => isTablet, 'Tablet')

//* 랩탑 환경에서만 보임 - 성빈 -
export const Laptop = responsiveViews(({ isLaptop }) => isLaptop, 'Laptop')

//* 데스크톱 환경에서만 보임 - 성빈 -
export const Desktop = responsiveViews(({ isDesktop }) => isDesktop, 'Desktop')

//* 모바일 또는 태블릿 환경에서만 보임 - 성빈 -
export const MobileOrTablet = responsiveViews(({ isMobileOrTablet }) => isMobileOrTablet, 'isMobileOrTablet')

//* 태블릿 또는 데스크탑 환경에서만 보임 - 성빈 -
export const TabletOrDesktop = responsiveViews(({ isTabletOrDesktop }) => isTabletOrDesktop, 'isTabletOrDesktop')
