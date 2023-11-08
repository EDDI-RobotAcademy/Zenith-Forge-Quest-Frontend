'use client'

import { ellipsis } from '@/styles/utils/ellipsis'
import { header, textStyle } from '@/utils/text'
import { Card, css, styled } from '@mui/material'

const StyledMainCard = styled(Card)(
  ({ theme }) => css`
  width: 100%;
  margin-top: 200px;
  transition: border-color 0.3s, box-shadow 0.3s; // 트랜지션 추가
  border: 1px solid ${theme.palette.grey[100]} ; // 테두리 색상 변경
  border-radius: 12px;

  &:hover {
    box-shadow: 0px 4px 16px ${theme.palette.grey[200]}; // 호버 시 박스 그림자 변경
  },

  .card-contents {
    padding: 16px;

    .card {
      margin-bottom: 16px;

      &.category {
        font-size: 14px;
        color: ${theme.palette.grey[500]};
      },

      &.title {
        font-size: 18px;
      },

      &.contents {
        font-size: 14px;
      },

      .anchor-under {
        &:hover {
          text-decoration: underline;
        },
      },
    },

    .MuiAvatar-root {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    },
    .MuiTypography-root {
      font-size: 12px;
      color: ${theme.palette.grey[500]};
    },
  },

  .card-footer {
    padding: 12px;
    padding-bottom: 12px !important;
    border-top: 1px solid ${theme.palette.grey[100]}; 

    .card-time {
      font-size: 14px;
      .MuiSvgIcon-root {
        margin-top: 2px;
      },

      .minute {
        margin-left: 4px;
        margin-right: 4px;
      },

      .hours {
        margin-left: 4px;
      },
    },
  }
`
)

export default StyledMainCard
