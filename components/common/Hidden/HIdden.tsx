import customBreakpoints from '@/styles/breakpoints'
import theme from '@/styles/theme'
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

//! 수정해야한다, 커스텀[theme.breakpoints.down('md')] 등 안먹히는중  - 성빈 -
type T_HiddenBoxProps = {
  className?: string
  component?: string
  children: React.ReactNode
} & MuiBoxProps

export function MobileHidden({ children, className, component }: T_HiddenBoxProps) {
  return (
    <Box
      className={className}
      component={component}
      sx={{
        display: {
          [theme.breakpoints.down('md')]: 'none',
          [theme.breakpoints.between('sm', 'md')]: 'block',
          [theme.breakpoints.between('md', 'lg')]: 'block',
          [theme.breakpoints.up('lg')]: 'block',
        },
      }}
    >
      {children}
    </Box>
  )
}

export function TabletHidden({ children, className, component }: T_HiddenBoxProps) {
  return (
    <Box
      className={className}
      component={component}
      sx={{
        display: {
          [theme.breakpoints.down('md')]: 'none',
          [theme.breakpoints.between('sm', 'md')]: 'none',
          [theme.breakpoints.between('md', 'lg')]: 'block',
          [theme.breakpoints.up('lg')]: 'block',
        },
      }}
    >
      {children}
    </Box>
  )
}

export function LaptopHidden({ children, className, component }: T_HiddenBoxProps) {
  return (
    <Box
      className={className}
      component={component}
      sx={{
        display: {
          [customBreakpoints.mobile]: 'block',
          [customBreakpoints.tablet]: 'block',
          [customBreakpoints.laptop]: 'none',
          [customBreakpoints.desktop]: 'block',
        },
      }}
    >
      {children}
    </Box>
  )
}

export function DesktopHidden({ children, className, component }: T_HiddenBoxProps) {
  return (
    <Box
      className={className}
      component={component}
      sx={{
        display: {
          [customBreakpoints.mobile]: 'block',
          [customBreakpoints.tablet]: 'block',
          [customBreakpoints.laptop]: 'block',
          [customBreakpoints.desktop]: 'none',
        },
      }}
    >
      {children}
    </Box>
  )
}
