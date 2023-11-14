import React from 'react'
import MainCardItemList from '@/components/pages/(main)/MainCardItemList'
import { StyledMainPageContainer } from '@/components/pages/(main)/styled'
export default function Home() {
  return (
    <StyledMainPageContainer>
      <MainCardItemList />
    </StyledMainPageContainer>
  )
}
