import { css } from '@mui/material'

type T_PositionType = 'absolute' | 'fixed'

//* 가로(x축) 방향 중앙 정렬 -성빈-
export function posCenterX(type: T_PositionType = 'absolute') {
  return css`
    position: ${type};
    left: 50%;
    transform: translateX(-50%);
  `
}

//* 세로(y축) 방향 중앙 정렬 -성빈-
export function posCenterY(type: T_PositionType = 'absolute') {
  return css`
    position: ${type};
    top: 50%;
    transform: translateY(-50%);
  `
}

//* 가로 세로(x,y축) 방향 중앙 정렬 -성빈-
export function posCenter(type: T_PositionType = 'absolute') {
  return css`
    position: ${type};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
}
