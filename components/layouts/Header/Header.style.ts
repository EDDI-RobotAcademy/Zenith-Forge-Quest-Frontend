'use client'
import customBreakpoints from '@/styles/breakpoints'
import { AppBar, styled } from '@mui/material'

const StyledHeader = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  height: '64px',
  padding: '0 16px 0px 16px',
  backgroundColor: '#ffffff',
  color: theme.palette.secondary.main,
  boxShadow: 'none',
  borderBottom: '1px solid #dae2ed',

  '.header-right': {
    '.icon': {
      '&:not(:last-child)': {
        marginRight: '8px',
      },
    },
  },

  '.user-btn-container': {
    button: {
      fontWeight: 'bold',
    },
    '.login-btn': {
      marginRight: '8px',
    },
  },

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

  [customBreakpoints.tablet]: {
    '.header-right': {
      display: 'flex',
    },
  },
}))

export default StyledHeader
