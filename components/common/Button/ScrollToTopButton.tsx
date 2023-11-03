'use client'

import React from 'react'
import { StyledArrowIcon, StyledScrollToTopButton } from './ScrollToTopButton.style'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import clsx from 'clsx'
import { Tooltip } from '@mui/material'

function ScrollToTop() {
  const { visible } = useScrollToTop()

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <StyledScrollToTopButton onClick={scrollToTop} className={clsx({ hidden: !visible })}>
      <StyledArrowIcon />
    </StyledScrollToTopButton>
  )
}

export default ScrollToTop
