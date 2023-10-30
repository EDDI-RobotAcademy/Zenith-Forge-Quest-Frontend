'use client'

import { Card, styled } from '@mui/material'

const StyledHomeCard = styled(Card)(({ theme }) => ({
  width: '100%',
  marginTop: '200px',
  transition: 'border-color 0.3s, box-shadow 0.3s', // 트랜지션 추가
  border: '1px solid ' + theme.palette.grey[100], // 테두리 색상 변경
  borderRadius: '12px',

  '&:hover': {
    boxShadow: '0px 4px 16px ' + theme.palette.grey[200], // 호버 시 박스 그림자 변경
  },

  '.card-bottom': {
    padding: '16px 16px 0px 16px',

    '.card': {
      marginBottom: '16px',

      '&.category': {
        fontSize: '14px',
        color: theme.palette.grey[500],
        backgroundColor: theme.palette.primary,
      },

      '&.title': {
        fontSize: '18px',
      },

      '&.time': {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',

        '.MuiSvgIcon-root': {
          marginTop: '2px',
        },

        '.minute': {
          marginLeft: '4px',
          marginRight: '4px',
        },

        '.hours': {
          marginLeft: '4px',
        },
      },

      '&.contents': {
        fontSize: '14px',
      },

      '.anchor-under': {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },

  '.card-footer': {
    '.MuiAvatar-root': {
      marginRight: '8px',
    },
  },
}))

export default StyledHomeCard
