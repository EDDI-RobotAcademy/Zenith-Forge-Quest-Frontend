'use client'

import { ChipProps as MuiChipProps } from '@mui/material'
import { StyledChip } from './Chip.style'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'

interface I_ChipProps extends MuiChipProps {
  className?: string
  href?: string
  target?: string
}

function Chip({ className, href, target, ...props }: I_ChipProps) {
  const linkClassName = clsx(className, { 'link-chip': href })

  const hoverAnimation = {
    y: -4,
    transition: {
      type: 'spring', // 봄틀과 같은 효과
      stiffness: 1, // 경직성 정도
      damping: 2, // 감쇠 정도 (낮을수록 더 흔들림)
    },
  }

  // 흔들리는 애니메이션
  const shakeAnimation = {
    x: [0, -2, 2, -2, 2, 0], // X축으로 약간씩 움직임
    transition: {
      delay: 0.2, // 올라간 후 0.2초 대기
      yoyo: 5, // 5번 반복
      duration: 0.5, // 전체 지속 시간
    },
  }

  if (!href) {
    return <StyledChip {...props} />
  }

  return (
    <motion.div whileHover={{ ...hoverAnimation, ...shakeAnimation }}>
      <Link href={href} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        <StyledChip className={linkClassName} {...props} />
      </Link>
    </motion.div>
  )
}

export default Chip
