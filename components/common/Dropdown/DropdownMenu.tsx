import clsx from 'clsx'
import { StyledDropdownMenu } from './styled'
import { useRef } from 'react'
import { EXIT_MOTION, slideInDown } from '@/styles/theme/motion'
import { useOutsideClick } from '@/hooks/useOutsideClick'

type T_DropdownMemuProps = {
  id: string
  list: string[]
  value: string
  disabled?: boolean
  closeMenu(): void
  formatter?(value: string): string
  onChange(e: React.MouseEvent<HTMLButtonElement>): void
}

function DropdownMenu({ id, list, value, disabled, closeMenu, formatter, onChange }: T_DropdownMemuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    onChange(e)
    closeMenu()
  }

  useOutsideClick(menuRef, closeMenu)

  return (
    <StyledDropdownMenu
      className="dropdownMenu"
      variants={slideInDown}
      ref={menuRef}
      aria-labelledby={id}
      aria-orientation="vertical"
      role="menu"
      {...EXIT_MOTION}
    >
      <ul className="menu-list">
        {list.map((item, index) => {
          const selected = (value = item)

          return (
            <li className={clsx('menu-item', { selected })} key={`dropdownMenu:${item}-${index}`} role="presentation">
              <button type="button" onClick={handleSelect} value={item} role="menuitem">
                <span className="label">{formatter?.(item) ?? item}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </StyledDropdownMenu>
  )
}

export default DropdownMenu
