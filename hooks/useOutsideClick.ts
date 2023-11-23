import { RefObject, useCallback } from 'react'
import { useMount } from './useMount'
import useUnmount from './useUnmount'

export function useOutsideClick(ref: RefObject<HTMLElement>, onClose: () => void) {
  const outsideClick = useCallback(
    (e: MouseEvent) => {
      if (!ref?.current?.contains(e.target as Node)) {
        onClose()
        window.removeEventListener('click', outsideClick)
      }
    },
    [onClose, ref]
  )

  useMount(() => {
    window.addEventListener('click', outsideClick, { passive: false })
  })

  useUnmount(() => {
    window.removeEventListener('click', outsideClick)
  })
}
