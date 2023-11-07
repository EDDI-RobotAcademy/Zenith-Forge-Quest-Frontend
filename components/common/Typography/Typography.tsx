import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

/**
 * Typography 컴포넌트를 확장하여 다양한 타이포그래피 스타일의 컴포넌트를 정의
 * 각 컴포넌트는 TypographyProps 타입의 프로퍼티를 받아 Typography 컴포넌트에 전달하며,
 * 특정 HTML 태그와 MUI variant 스타일을 적용
 *
 * @example
 * ```jsx
 * <H1>제목 1</H1>
 * <H2>제목 2</H2>
 * <Body1>본문 텍스트</Body1>
 * ```
 *
 * @see {@link https://mui.com/api/typography/ MUI Typography}
 */

export const H1 = (props: TypographyProps) => <Typography variant="h1" component="h1" {...props} />
export const H2 = (props: TypographyProps) => <Typography variant="h2" component="h2" {...props} />
export const H3 = (props: TypographyProps) => <Typography variant="h3" component="h3" {...props} />
export const H4 = (props: TypographyProps) => <Typography variant="h4" component="h4" {...props} />
export const H5 = (props: TypographyProps) => <Typography variant="h5" component="h5" {...props} />
export const H6 = (props: TypographyProps) => <Typography variant="h6" component="h6" {...props} />
export const Subtitle1 = (props: TypographyProps) => <Typography variant="subtitle1" component="h6" {...props} />
export const Subtitle2 = (props: TypographyProps) => <Typography variant="subtitle2" component="h6" {...props} />
export const Body1 = (props: TypographyProps) => <Typography variant="body1" component="p" {...props} />
export const Body2 = (props: TypographyProps) => <Typography variant="body2" component="p" {...props} />
export const Button = (props: TypographyProps) => <Typography variant="button" component="span" {...props} />
export const Caption = (props: TypographyProps) => <Typography variant="caption" component="span" {...props} />
export const Outline = (props: TypographyProps) => <Typography variant="overline" component="span" {...props} />
