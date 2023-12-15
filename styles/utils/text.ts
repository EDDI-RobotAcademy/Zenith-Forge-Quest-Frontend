import { T_TextStyle, bodies, buttons, captions, headers, overlines, subtitles } from '@/styles/theme/typography'
import { assertUnreachable } from '../../utils/assertUnreachable'

export function header(size: 1 | 2 | 3 | 4 | 5 | 6) {
  return {
    ...headers[size],
  }
}

export function body(size: 1 | 2) {
  return {
    ...bodies[size],
  }
}

export function subtitle(size: 1 | 2) {
  return {
    ...subtitles[size],
  }
}

export function caption(size: 1) {
  return {
    ...captions[size],
  }
}

export function button(size: 1) {
  return {
    ...buttons[size],
  }
}

export function overline(size: 1) {
  return {
    ...overlines[size],
  }
}

export function textStyle(type: T_TextStyle, size?: any) {
  switch (type) {
    case 'header':
      return header(size)
    case 'body':
      return body(size)
    case 'subtitle':
      return subtitle(size)
    case 'caption':
      return caption(size)
    case 'button':
      return button(size)
    case 'overline':
      return overline(size)
    default:
      assertUnreachable(type)
  }
}
