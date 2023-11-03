import customBreakpoints from './breakpoints'
import theme from './theme'

export type T_TextStyle = 'header' | 'subtitle' | 'body' | 'caption' | 'button' | 'overline'

const h1 = {
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.h1.fontWeight,
  letterSpacing: theme.typography.h1.letterSpacing,
  lineHeight: theme.typography.h1.lineHeight,
}

const h2 = {
  fontSize: theme.typography.h2.fontSize,
  fontWeight: theme.typography.h2.fontWeight,
  letterSpacing: theme.typography.h2.letterSpacing,
  lineHeight: theme.typography.h2.lineHeight,
}

const h3 = {
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.h3.fontWeight,
  letterSpacing: theme.typography.h3.letterSpacing,
  lineHeight: theme.typography.h3.lineHeight,
}

const h4 = {
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.h4.fontWeight,
  letterSpacing: theme.typography.h4.letterSpacing,
  lineHeight: theme.typography.h4.lineHeight,
}

const h5 = {
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  letterSpacing: theme.typography.h5.letterSpacing,
  lineHeight: theme.typography.h5.lineHeight,
}

const h6 = {
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  letterSpacing: theme.typography.h6.letterSpacing,
  lineHeight: theme.typography.h6.lineHeight,
}

const subtitle1 = {
  fontSize: theme.typography.subtitle1.fontSize,
  fontWeight: theme.typography.subtitle1.fontWeight,
  letterSpacing: theme.typography.subtitle1.letterSpacing,
  lineHeight: theme.typography.subtitle1.lineHeight,
}

const subtitle2 = {
  fontSize: theme.typography.subtitle2.fontSize,
  fontWeight: theme.typography.subtitle2.fontWeight,
  letterSpacing: theme.typography.subtitle2.letterSpacing,
  lineHeight: theme.typography.subtitle2.lineHeight,
}

const body1 = {
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  letterSpacing: theme.typography.body1.letterSpacing,
  lineHeight: theme.typography.body1.lineHeight,
}

const body2 = {
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  letterSpacing: theme.typography.body2.letterSpacing,
  lineHeight: theme.typography.body2.lineHeight,
}

const caption = {
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.caption.fontWeight,
  letterSpacing: theme.typography.caption.letterSpacing,
  lineHeight: theme.typography.caption.lineHeight,
}

const button = {
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
  letterSpacing: theme.typography.button.letterSpacing,
  lineHeight: theme.typography.button.lineHeight,
}

const overline = {
  fontSize: theme.typography.overline.fontSize,
  fontWeight: theme.typography.overline.fontWeight,
  letterSpacing: theme.typography.overline.letterSpacing,
  lineHeight: theme.typography.overline.lineHeight,
}

export const headers = {
  1: h1,
  2: h2,
  3: h3,
  4: h4,
  5: h5,
  6: h6,
}

export const bodies = {
  1: body1,
  2: body2,
}

export const subtitles = {
  1: subtitle1,
  2: subtitle2,
}

export const captions = {
  1: caption,
}

export const buttons = {
  1: button,
}

export const overlines = {
  1: overline,
}
