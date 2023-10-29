'use client'
import customBreakpoints from '@/styles/breakpoints'
import { AppBar, styled } from '@mui/material'

const StyledHeader = styled(AppBar)(({ theme }) => ({
  padding: '0 40px 0 40px',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,

  '.nav-link-container': {
    a: {
      '&:hover': {
        opacity: 0.5,
      },
      '&:not(:last-child)': {
        marginRight: '40px',
      },
    },
  },

  [customBreakpoints.mobile]: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
  },
}))

export default StyledHeader
