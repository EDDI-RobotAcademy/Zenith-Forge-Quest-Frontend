'use client'
import React from 'react'
import MainCardItemList from '@/components/pages/(main)/MainCardItemList'
import { StyledMainPageContainer } from '@/components/pages/(main)/styled'
import MainSection from '@/components/pages/(main)/MainSection'
import { H6 } from '@/components/common/Typography/Typography'
import TextLink from '@/components/common/TextLink/TextLink'

export default function Home() {
  return (
    <StyledMainPageContainer>
      <section className="main-section recent">
        <MainCardItemList />
      </section>
      <section className="main-section hot">
        <div className="section-header">
          <H6 className="title">오늘의 인기 콘텐츠✨</H6>
          <TextLink href="/main" text="더보기" />
        </div>
        <MainSection />
      </section>
    </StyledMainPageContainer>
  )
}
