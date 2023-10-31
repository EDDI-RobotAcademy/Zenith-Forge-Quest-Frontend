import { createTheme } from '@mui/material'
import { notoSansKR } from './fonts'

const theme = createTheme({
  typography: {
    fontFamily: notoSansKR as any, //* 일단 애니로 처리
  },
})

export default theme
