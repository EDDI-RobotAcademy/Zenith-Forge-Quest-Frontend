import { useState } from 'react'
import { useMount } from './useMount'

export function useScrollToTop() {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = (): void => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 50) {
      setVisible(true)
    } else if (scrolled <= 49) {
      setVisible(false)
    }
  }

  useMount(() => {
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  })

  return { visible, toggleVisible }
}
