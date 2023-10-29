import { assertUnreachable } from './assertUnreachable'

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
