import React from 'react'
import MainCardItemList from '@/components/pages/(main)/MainCardItemList'
import { StyledMainPageContainer } from '@/components/pages/(main)/styled'
import MainSection from '@/components/pages/(main)/MainSection'
import Link from 'next/link'
import { Body1, H6 } from '@/components/common/Typography/Typography'
import MainRequestList from '@/components/pages/(main)/MainRequestList'
export default function Home() {
  return (
    <StyledMainPageContainer>
      <section className="main-section recent">
        <MainCardItemList />
      </section>

      <section className="main-section hot">
        <div className="section-header">
          <H6 className="title">오늘의 인기 콘텐츠✨</H6>
          <Link className="show-more-text" href="/test">
            <Body1 className="text">더 보기</Body1>
          </Link>
        </div>
        <MainSection />
      </section>

      {/* <div>
        <section className="main-section question">
          <div className="section-header">
            <H6 className="title">오늘의 질문🙋🏻‍♀️</H6>
          </div>
          <MainRequestList />
        </section>

        <section className="main-section question">
          <div className="section-header">
            <H6 className="title">베스트 답변👍🏻</H6>
          </div>
          <MainRequestList />
        </section>
      </div> */}
    </StyledMainPageContainer>
  )
}
