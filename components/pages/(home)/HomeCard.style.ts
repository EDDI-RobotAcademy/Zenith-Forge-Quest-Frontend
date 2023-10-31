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

  '.card-contents': {
    padding: '16px',

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

      '&.contents': {
        fontSize: '14px',
      },

      '.anchor-under': {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },

    '.MuiAvatar-root': {
      width: '24px',
      height: '24px',
      marginRight: '8px',
    },
    '.MuiTypography-root': {
      fontSize: '12px',
      color: theme.palette.grey[500],
    },
  },

  '.card-footer': {
    borderTop: '1px solid ' + theme.palette.grey[100], // 테두리 색상 변경
    padding: '12px',
    paddingBottom: '12px !important',

    '.card-time': {
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
  },
}))

export default StyledHomeCard
