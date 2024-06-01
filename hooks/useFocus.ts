'use client'

import { useState } from 'react'

const useFocus = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return { isFocused, handleFocus, handleBlur }
}

export default useFocus
