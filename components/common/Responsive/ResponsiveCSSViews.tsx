import { useMediaQueryDeviceType } from '@/hooks/useMediaQueryDeviceType'
import { Box, BoxProps as MuiBoxProps } from '@mui/material'

/**
 * 이 파일은 다양한 환경(모바일, 태블릿, 랩탑, 데스크톱)에서 컴포넌트를 숨기기 위한 목적으로 설계된 컴포넌트들을 정의
 * 각 컴포넌트는 MUI의 Box 컴포넌트를 기반으로 하며, 반응형 디스플레이(display:none) 속성을 사용하여 특정 환경에서만 컴포넌트를 숨김
 *
 * @example
 * ```jsx
 * <MobileHidden>
 *   <YourComponent />
 * </MobileHidden>
 * ```
 * 위의 예제에서 <YourComponent />는 모바일 환경에서만 숨겨짐
 *
 * @see {@link https://mui.com/system/basics/ MUI System}
 * @see {@link https://mui.com/system/the-sx-prop/ MUI sx prop}
 */

type T_HiddenBoxProps = {
  className?: string
  component?: string
  children: React.ReactNode
} & MuiBoxProps

const withVisibility = (
  predicate: (mediaType: ReturnType<typeof useMediaQueryDeviceType>) => boolean,
  name: string
) => {
  const Component = ({ children, className, component }: T_HiddenBoxProps) => {
    const mediaType = useMediaQueryDeviceType()

    return (
      <Box
        className={className}
        component={component}
        sx={{
          display: {
            display: predicate(mediaType) ? 'block' : 'none',
          },
        }}
      >
        {children}
      </Box>
    )
  }
  Component.displayName = name
  return Component
}

//* 모바일 환경에서만 보임 - 성빈 -
export const MobileOnly = withVisibility(({ isMobileMedia }) => isMobileMedia, 'MobileOnly')

//* 모바일 환경에서만 숨김 - 성빈 -
export const MobileHidden = withVisibility(({ isMobileMedia }) => !isMobileMedia, 'MobileHidden')

//* 태블릿 환경에서만 보임 - 성빈 -
export const TabletOnly = withVisibility(({ isTabletMedia }) => isTabletMedia, 'TabletOnly')

//* 태블릿 환경에서만 숨김 - 성빈 -
export const TabletHidden = withVisibility(({ isTabletMedia }) => !isTabletMedia, 'TabletHidden')

//* 랩탑 환경에서만 보임(사용안함) - 성빈 -
export const LaptopOnly = withVisibility(({ isLaptopMedia }) => isLaptopMedia, 'LaptopOnly')

//* 랩탑 환경에서만 숨김(사용안함) - 성빈 -
export const LaptopHidden = withVisibility(({ isLaptopMedia }) => !isLaptopMedia, 'LaptopHidden')

//* 데스크탑 환경에서만 보임 - 성빈 -
export const DesktopOnly = withVisibility(({ isDesktopMedia }) => isDesktopMedia, 'DesktopOnly')

//* 데스크탑 환경에서만 숨김 - 성빈 -
export const DesktopHidden = withVisibility(({ isDesktopMedia }) => !isDesktopMedia, 'DesktopHidden')
