'use client'

import { Flexbox } from '@/components/common/Box/Box'
import StyledHeader from './Header.style'
import Link from 'next/link'

import { Desktop, Laptop, Mobile, Tablet } from '@/components/common/ResponsiveViews/ResponsiveViews'
import { DesktopHidden, LaptopHidden, MobileHidden, TabletHidden } from '@/components/common/Hidden/HIdden'

function Header() {
  return (
    <StyledHeader>
      <Flexbox justifyContent="space-between">
        <h1>
          <Link href="/">Logo</Link>
        </h1>

        <MobileHidden>
          <div>모바일</div>
        </MobileHidden>
        <TabletHidden>태블릿</TabletHidden>
        <LaptopHidden>랩탑</LaptopHidden>
        <DesktopHidden>데스크탑</DesktopHidden>
        <Laptop>
          <nav className="nav-link-container">
            <Link href="">Link1</Link>
            <Link href="">Link2</Link>
            <Link href="">Link3</Link>
          </nav>
        </Laptop>
      </Flexbox>
    </StyledHeader>
  )
}

export default Header
