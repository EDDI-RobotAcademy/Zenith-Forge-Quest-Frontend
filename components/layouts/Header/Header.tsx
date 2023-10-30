'use client'

import { Flexbox } from '@/components/common/Box/Box'
import StyledHeader from './Header.style'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import { Desktop, Laptop, Mobile, Tablet } from '@/components/common/ResponsiveViews/ResponsiveViews'
import { Button, IconButton } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

function Header() {
  return (
    <StyledHeader>
      <Flexbox alignItems="center" justifyContent="space-between">
        <Mobile>
          <IconButton aria-label="menu" color="secondary">
            <MenuIcon />
          </IconButton>
        </Mobile>

        <h1>
          <Link href="/">로고</Link>
        </h1>

        <div className="header-right">
          <Mobile>
            <IconButton aria-label="login & signup" color="secondary">
              <PersonIcon />
            </IconButton>
          </Mobile>

          <Desktop>
            <nav className="nav-link-container">
              <Link href="">Link1</Link>
              <Link href="">Link2</Link>
              <Link href="">Link3</Link>
            </nav>

            <div className="user-btn-container">
              <Button className="login-btn" size="small" color="secondary" variant="contained">
                로그인
              </Button>
              <Button className="signup-btn" size="small" color="secondary" variant="outlined">
                회원가입
              </Button>
            </div>
          </Desktop>
        </div>
      </Flexbox>
    </StyledHeader>
  )
}

export default Header
