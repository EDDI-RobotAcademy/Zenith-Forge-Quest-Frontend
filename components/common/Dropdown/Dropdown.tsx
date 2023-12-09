'use client'

import { useState } from 'react'
import { StyledDropdown } from './styled'
import clsx from 'clsx'
import DropdownToggle from './DropdownToggle'
import DropdownMenu from './DropdownMenu'
import { AnimatePresence } from 'framer-motion'

type T_DropdownProps = {
  id: string
  list?: string[]
  value: string
  className?: string
  disabled?: boolean
  formatter?(value: string): string
  onChange: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Dropdown({ id, list = [], value, className, disabled, formatter, onChange }: T_DropdownProps) {
  const [show, setShow] = useState(false)

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    if (disabled) return
    setShow(!show)
  }

  const closeMenu = () => {
    setShow(false)
  }

  if (!list.length) return null

  const dropdownId = `dropdown:${id}`

  return (
    <StyledDropdown className={clsx('dropdown', className)}>
      <DropdownToggle id={dropdownId} show={show} toggle={toggle} value={formatter?.(value) ?? value} />

      <AnimatePresence>
        {show && (
          <DropdownMenu
            closeMenu={closeMenu}
            id={dropdownId}
            list={list}
            onChange={onChange}
            value={value}
            disabled={disabled}
            formatter={formatter}
          />
        )}
      </AnimatePresence>
    </StyledDropdown>
  )
}

export default Dropdown
