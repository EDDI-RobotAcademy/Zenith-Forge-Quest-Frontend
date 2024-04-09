'use client'

import { StyledStoryAccordionSidebar } from './styled'
import { useState } from 'react'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CodeIcon from '@mui/icons-material/Code'
import MemoryIcon from '@mui/icons-material/Memory'
import StorageIcon from '@mui/icons-material/Storage'
import clsx from 'clsx'

const accordionItems = [
  { title: '프론트엔드', content: ['React', 'Vue', 'JavaScript'], Icon: CodeIcon },
  { title: '백엔드', content: ['Node.js', 'Python', 'Java'], Icon: StorageIcon },
  { title: '임베디드', content: ['C', 'C++', 'Rust'], Icon: MemoryIcon },
]

function StoryAccordionSidebar() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleItem = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  return (
    <StyledStoryAccordionSidebar className="mobile-hidden">
      <div className="header">
        <p className="header-title">전체 (500)</p>
      </div>

      <nav className="accordion-container">
        {accordionItems.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={clsx('accordion-item', { active: openIndexes.includes(index) })}
              onClick={() => toggleItem(index)}
            >
              <div className="title-icon-container">
                <item.Icon className="icon" />
                <p className="title">{item.title}</p>
              </div>
              <KeyboardArrowDownIcon
                className={clsx('accordion-icon', { open: openIndexes.includes(index) })}
                fontSize="medium"
              />
            </div>
            <AnimatePresence>
              {openIndexes.includes(index) && (
                <motion.div
                  initial={{ height: 0, overflow: 'hidden' }}
                  animate={openIndexes.includes(index) ? { height: 'auto', overflow: 'visible' } : { height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={openIndexes.includes(index) ? { opacity: 1 } : { opacity: 0 }}
                    transition={openIndexes.includes(index) ? { duration: 0.2 } : { duration: 0.5 }}
                  >
                    <ul className="content-list">
                      {item.content.map((content, contentIndex) => (
                        <li className="content-item" key={contentIndex}>
                          {content}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </React.Fragment>
        ))}
      </nav>
    </StyledStoryAccordionSidebar>
  )
}

export default StoryAccordionSidebar
