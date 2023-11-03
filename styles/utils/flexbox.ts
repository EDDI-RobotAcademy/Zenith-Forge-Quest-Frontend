import { css } from '@mui/material'
import { assertUnreachable } from '../../utils/assertUnreachable'

type T_FlexboxValueOriginal = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'stretch'

type T_FlexboxValueAbbreviation = 'center' | 'end' | 'start' | 'around' | 'between' | 'stretch'

export type T_FlexboxValue = T_FlexboxValueOriginal | T_FlexboxValueAbbreviation

function flexValue(value: T_FlexboxValue) {
  switch (value) {
    case 'center':
      return 'center'
    case 'end':
    case 'flex-end':
      return 'flex-end'
    case 'start':
    case 'flex-start':
      return 'flex-start'
    case 'around':
    case 'space-around':
      return 'space-around'
    case 'between':
    case 'space-between':
      return 'space-between'
    case 'stretch':
      return 'stretch'
    default:
      assertUnreachable(value)
  }
}

export default flexValue

//* flexbox 정렬 -성빈-
export function flexbox(jc: T_FlexboxValue = 'center', ai: T_FlexboxValue = 'center') {
  return css`
    display: flex;
    align-items: ${flexValue(ai)};
    justify-content: ${flexValue(jc)};
  `
}

//* inline-flexbox 정렬 -성빈-
export function inlineFlexbox(jc: T_FlexboxValue = 'center', ai: T_FlexboxValue = 'center') {
  return css`
    display: inline-flex;
    justify-content: ${flexValue(jc)};
    align-items: ${flexValue(ai)};
  `
}

//* flex 열 방향 정렬 -성빈-
export function columnFlexbox(jc: T_FlexboxValue = 'center', ai: T_FlexboxValue = 'center') {
  return css`
    display: flex;
    flex-direction: column;
    align-items: ${flexValue(ai)};
    justify-content: ${flexValue(jc)};
  `
}
