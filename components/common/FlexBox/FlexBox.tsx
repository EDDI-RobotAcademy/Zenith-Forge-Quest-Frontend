import flexValue, { T_FlexboxValue } from '@/styles/flexbox'
import { Box, BoxProps as MuiBoxProps } from '@mui/material'

/**
 * Flexbox, InlineFlexbox, 그리고 FlexboxColumn 컴포넌트는 MUI의 Box 컴포넌트를 확장하여
 * flexbox 레이아웃을 더 쉽게 구현할 수 있도록 돕습니다. 각 컴포넌트는 정렬 옵션을 받아
 * Box 컴포넌트의 display, justifyContent, 그리고 alignItems 속성을 설정
 *
 * @example
 * ```jsx
 * <Flexbox justifyContent="flex-start" alignItems="flex-end">
 *   <YourComponent />
 * </Flexbox>
 * ```
 * 위의 예제에서 <YourComponent />는 왼쪽 상단 모서리에 정렬됩니다.
 *
 * @see {@link https://mui.com/system/flexbox/ MUI Flexbox}
 * @see {@link https://css-tricks.com/snippets/css/a-guide-to-flexbox/ A Guide to Flexbox}
 */

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
