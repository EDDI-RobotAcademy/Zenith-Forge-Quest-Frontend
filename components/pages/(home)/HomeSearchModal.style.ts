'use client'

import { Modal, styled } from '@mui/material'

const StyledHomeSearchModal = styled(Modal)(({ theme }) => ({
  '.search-container': {
    height: '100vh',
    maxWidth: '768px',
    backgroundColor: '#ffffff',

    '.search-header': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: '1px solid #dae2ed',

      '.form': {
        width: '100%',

        '.search-input': {
          width: '100%',
          height: '48px',
          padding: '0 16px',
          margin: '16px 0',
          border: 'none',
        },
      },

      'modal-cancel-btn': {
        width: '64px',
        height: '48px',
        padding: '0',
        margin: '16px 0',
        border: '1px solid #dae2ed',
        color: theme.palette.secondary.main,
      },
    },
  },
}))

export default StyledHomeSearchModal
