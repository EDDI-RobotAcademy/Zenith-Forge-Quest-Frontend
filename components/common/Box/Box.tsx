
import flexValue, { T_FlexboxValue } from '@/utils/flexbox'
import { Box, BoxProps as MuiBoxProps } from '@mui/material'

type T_FlexboxProps = {
  jc?: T_FlexboxValue
  ai?: T_FlexboxValue
} & MuiBoxProps

//* Flexbox(가로 정렬) - 성빈 -
export function Flexbox({ jc = 'center', ai = 'center', ...props }: T_FlexboxProps) {
  return <Box display="flex" justifyContent={flexValue(jc)} alignItems={flexValue(ai)} {...props} />
}

//* Inline Flexbox(inline 가로 정렬) - 성빈 -
export function InlineFlexbox({ jc = 'center', ai = 'center', ...props }: T_FlexboxProps) {
  return <Box display="inline-flex" justifyContent={flexValue(jc)} alignItems={flexValue(ai)} {...props} />
}

//* Flexbox Column(세로 정렬) - 성빈 -
export function FlexboxColumn({ jc = 'center', ai = 'center', ...props }: T_FlexboxProps) {
  return (
    <Box display="flex" flexDirection="column" justifyContent={flexValue(jc)} alignItems={flexValue(ai)} {...props} />
  )
}
