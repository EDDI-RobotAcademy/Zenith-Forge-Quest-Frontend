/**
 *  * MUI 기본 브레이크 포인트('xs','sm','lg','xl')를 제거
 *  * 추가한 브레이크 포인트('mobile','tablet','laptop','desktop')를 사용하기 위한 타입 정의
 *  @see {@link https://mui.com/material-ui/customization/breakpoints// MUI Breakpoints}
 */
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false // removes the `xs` breakpoint
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true // adds the `mobile` breakpoint
    tablet: true
    laptop: true
    desktop: true
  }
}

export interface I_Breakpoints {
  mobile: string
  tablet: string
  laptop: string
  desktop: string
}
