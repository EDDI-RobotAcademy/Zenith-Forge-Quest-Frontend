import { SerializedStyles } from '@emotion/react'
import { css } from '@mui/material'

/**
 * 텍스트가 너무 길어 오버플로우 될 경우 말줄임표(...)를 사용하여 표시.
 *
 * @example
 * ${ellipsis()}
 */

export function ellipsis(): SerializedStyles {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
}
