'use client'

import { Flexbox } from '@/components/common/FlexBox/FlexBox'
import StyledHeader from './Header.style'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import { Mobile, TabletOrDesktop } from '@/components/common/Responsive/ResponsiveViews'
import SquareIconBtn from '@/components/common/SquareIconBtn/SquareIconBtn'
import SearchIcon from '@mui/icons-material/Search'
import { useModal } from '@/hooks/useModal'
import HeaderSearchButton from './HeaderSearchButton'
import Button from '@/components/common/Button/Button'
import Tooltip from '@/components/common/Tooltip/Tooltip'

function Header() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <StyledHeader>
      <Flexbox className="header-container" alignItems="center" justifyContent="space-between">
        <div className="header-left">
          <h1 className="left-style">
            <Link href="/">로고</Link>
          </h1>

          <TabletOrDesktop>
            <nav className="nav-link-container">
              <Link className="navigation left-style" href="">
                최신 글
              </Link>
              <Link className="navigation left-style" href="">
                인기
              </Link>
              <Link className="navigation left-style" href="">
                채용 공고
              </Link>
            </nav>
          </TabletOrDesktop>
        </div>

        <div className="header-right">
          <Mobile>
            <SquareIconBtn onClick={openModal} className="icon search" color="primary" aria-label="search">
              <SearchIcon />
            </SquareIconBtn>

            <Tooltip title="Menu button">
              <SquareIconBtn className="icon menu" color="primary" aria-label="menu">
                <MenuIcon />
              </SquareIconBtn>
            </Tooltip>
          </Mobile>

          <TabletOrDesktop>
            <div className="user-btn-container">
              <HeaderSearchButton />
              <Button className="login-btn" size="small" color="primary" variant="contained">
                로그인
              </Button>
              <Button className="signup-btn" size="small" color="primary" variant="outlined">
                회원가입
              </Button>
            </div>
          </TabletOrDesktop>
        </div>
      </Flexbox>
    </StyledHeader>
  )
}

export default Header
