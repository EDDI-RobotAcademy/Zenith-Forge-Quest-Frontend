import { T_TextStyle, bodies, buttons, captions, headers, overlines, subtitles } from '@/styles/theme/typography'
import { assertUnreachable } from '../../utils/assertUnreachable'

export function header(size: 1 | 2 | 3 | 4 | 5 | 6, color?: string) {
  return {
    ...headers[size],
    color,
  }
}

export function body(size: 1 | 2, color?: string) {
  return {
    ...bodies[size],
    color,
  }
}

export function subtitle(size: 1 | 2, color?: string) {
  return {
    ...subtitles[size],
    color,
  }
}

export function caption(size: 1, color?: string) {
  return {
    ...captions[size],
    color,
  }
}

export function button(size: 1, color?: string) {
  return {
    ...buttons[size],
    color,
  }
}

export function overline(size: 1, color?: string) {
  return {
    ...overlines[size],
    color,
  }
}

export function textStyle(type: T_TextStyle, size?: any, color?: string) {
  switch (type) {
    case 'header':
      return header(size, color)
    case 'body':
      return body(size, color)
    case 'subtitle':
      return subtitle(size, color)
    case 'caption':
      return caption(size, color)
    case 'button':
      return button(size, color)
    case 'overline':
      return overline(size, color)
    default:
      assertUnreachable(type)
  }
}
