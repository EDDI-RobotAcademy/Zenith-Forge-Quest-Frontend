import React from 'react'
import StyledHeaderSearchButton from './HeaderSearchButton.style'
import SearchIcon from '@mui/icons-material/Search'
import { Body2, Caption, Outline } from '@/components/common/Typography/Typography'

function HeaderSearchButton() {
  return (
    <StyledHeaderSearchButton color="secondary">
      <SearchIcon />
      <Body2>검색</Body2>
    </StyledHeaderSearchButton>
  )
}

export default HeaderSearchButton
