'use client'

import { Flexbox } from '@/components/common/FlexBox/FlexBox'
import StyledHeader from './Header.style'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import SquareIconBtn from '@/components/common/SquareIconBtn/SquareIconBtn'
import SearchIcon from '@mui/icons-material/Search'
import HeaderSearchButton from './HeaderSearchButton'
import Button from '@/components/common/Button/Button'
import Tooltip from '@/components/common/Tooltip/Tooltip'
import Modals from '@/components/common/Modal/Modal'

function Header() {
  return (
    <StyledHeader>
      <Flexbox className="header-container" alignItems="center" justifyContent="space-between">
        <div className="header-left">
          <h1 className="left-style">
            <Link href="/">로고</Link>
          </h1>

          <nav className="nav-link-container mobile-hidden">
            <Link className="navigation left-style" href="/">
              최신 글
            </Link>
            <Link className="navigation left-style" href="/">
              인기
            </Link>
            <Link className="navigation left-style" href="/">
              Q & A
            </Link>
            <Link className="navigation left-style" href="/">
              채용 공고
            </Link>
          </nav>
        </div>

        <div className="header-right">
          <div className="mobile-only">
            <SquareIconBtn className="icon search" color="primary" aria-label="search">
              <SearchIcon color="primary" />
            </SquareIconBtn>

            <SquareIconBtn className="icon menu" color="primary" aria-label="menu">
              <Tooltip title="Menu button">
                <MenuIcon color="primary" />
              </Tooltip>
            </SquareIconBtn>
          </div>

          <div className="user-btn-container mobile-hidden">
            <HeaderSearchButton />
            <Button className="login-btn" type="button" size="small" variant="contained">
              로그인
            </Button>

            <Modals />
          </div>
        </div>
      </Flexbox>
    </StyledHeader>
  )
}

export default Header
