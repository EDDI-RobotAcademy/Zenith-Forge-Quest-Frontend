import { createTheme } from '@mui/material'
import { notoSansKR } from './fonts'
import { basePalette } from './colors'

//* 반응형 브레이크 포인트 값
const breakpoints = {
  mobile: 0,
  tablet: 768,
  laptop: 1024, // * 사용안함 (반응형은 Mobile, tablet, desktop)
  desktop: 1264,
}

const theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
  typography: {
    fontFamily: notoSansKR as any, //* 일단 애니로 처리
  },
  palette: {
    ...basePalette,
  },
})

export default theme
