'use client'
import { flexbox } from '@/styles/utils/flexbox'
import { css, styled } from '@mui/material'
import Link from 'next/link'

export const StyledTextLink = styled(Link)(
  ({ theme }) => css`
    ${flexbox()}

    .MuiSvgIcon-root {
      color: ${theme.palette.primary.dark}; // #6979F8
      margin-top: 1px;
      margin-right: 4px;
      transform: rotate(270deg); // 초기 상태
      transition: transform 0.3s ease; // 부드러운 움직임을 위한 전환 효과 적용
    }

    &:hover {
      .MuiSvgIcon-root {
        transform: rotate(270deg) translateY(4px); // 호버 시 오른쪽으로 움직일 거리
      }
    }

    .text {
      color: ${theme.palette.primary.dark}; // #6979F8
      font-weight: 600;
      margin-right: 4px;
    }
  `
)
