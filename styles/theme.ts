import { createTheme } from '@mui/material'
import { notoSansKR } from './fonts'

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024, // * 사용안함 (반응형은 Mobile, tablet, desktop)
      desktop: 1024,
    },
  },

  typography: {
    fontFamily: notoSansKR as any, //* 일단 애니로 처리
  },
})

export default theme
