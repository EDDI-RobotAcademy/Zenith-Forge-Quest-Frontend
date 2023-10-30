import { createTheme } from '@mui/material'
import { notoSansKR } from './fonts'

const theme = createTheme({
  typography: {
    fontFamily: notoSansKR as any, //* 일단 애니로 처리
  },

  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

export default theme
