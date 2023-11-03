'use client'

import { Flexbox } from '@/components/common/FlexBox/FlexBox'
import StyledHeader from './Header.style'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import { Desktop, Mobile } from '@/components/common/Responsive/ResponsiveViews'
import { Button, FormControl, Input, Tooltip } from '@mui/material'
import SquareIconBtn from '@/components/common/SquareIconBtn/SquareIconBtn'
import GitHubIcon from '@mui/icons-material/GitHub'
import SearchIcon from '@mui/icons-material/Search'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import HomeSearchModal from '@/components/pages/(main)/MainSearchModal'
import { useModal } from '@/hooks/useModal'

function Header() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <StyledHeader>
      <Flexbox alignItems="center" justifyContent="space-between">
        <div className="header-left">
          <Mobile>
            <h1>
              <Link href="/">로고</Link>
            </h1>
          </Mobile>
        </div>

        <div className="header-right">
          <Mobile>
            <SquareIconBtn onClick={openModal} className="icon search" color="secondary" aria-label="search">
              <SearchIcon />
            </SquareIconBtn>
            <HomeSearchModal open={isOpen} onClose={closeModal}>
              <div className="search-container">
                <header className="search-header">
                  <FormControl className="form">
                    <Input className="search-input" />
                  </FormControl>
                  <Button className="modal-cancel-btn" onClick={closeModal}>
                    ESC
                  </Button>
                </header>
                <div>
                  <div>백엔드</div>
                  <div>프론트엔드</div>
                  <div>데브옵스</div>
                  <div>알고리즘</div>
                  <div>CS</div>
                </div>
              </div>
            </HomeSearchModal>

            <Tooltip title="GitHub repository">
              <SquareIconBtn className="icon git" color="secondary" aria-label="GitHub repository">
                <GitHubIcon />
              </SquareIconBtn>
            </Tooltip>

            <Tooltip title="Turn off the light">
              <SquareIconBtn className="icon person" color="secondary" aria-label="Turn off the light">
                <DarkModeOutlinedIcon />
              </SquareIconBtn>
            </Tooltip>

            <Tooltip title="Menu button">
              <SquareIconBtn className="icon menu" color="secondary" aria-label="menu">
                <MenuIcon />
              </SquareIconBtn>
            </Tooltip>
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
