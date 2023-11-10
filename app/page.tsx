import { StyledMainPageContainer } from '@/components/pages/(main)/MainPageContainer'
import React from 'react'
import MainCardItemList from '@/components/pages/(main)/MainCardItemList'
export default function Home() {
  return (
    <StyledMainPageContainer>
      <MainCardItemList />
    </StyledMainPageContainer>
  )
}
