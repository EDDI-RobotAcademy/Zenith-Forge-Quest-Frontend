'use client'

import { useRef } from 'react'
import MainListItem from './MainListItem'
import Slider from 'react-slick'

const data = [
  { rank: 1, title: '제목 1asdasd', comment: '추천 1' },
  { rank: 2, title: '제목 2asdas', comment: '추천 213' },
  { rank: 3, title: '제목 2asdas', comment: '추천 3' },
  { rank: 4, title: '제목 2asdas', comment: '추천 5' },
  { rank: 5, title: '제목 2asdas', comment: '추천 4' },
  { rank: 6, title: '제목 2asdasd', comment: '추천 42' },
  { rank: 7, title: '제목 2adsasd', comment: '추천 41' },
  { rank: 8, title: '제목 2adasd', comment: '추천 42' },
  { rank: 9, title: '제목 2asdas', comment: '추천 42' },
  { rank: 10, title: '제목 2asdasd', comment: '추천 41' },
]

function MainRequestList() {
  const sliderRef = useRef<any>(null)

  const settings = {
    slidesToShow: 5, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 5, // 스크롤할 때 넘어가는 슬라이드 수
    vertical: true, // 세로 방향 슬라이더
    verticalSwiping: true, // 세로 방향 스와이프 활성화
    arrows: false,
    infinite: false, // 무한 반복을 비활성화
  }

  const next = () => {
    sliderRef?.current?.slickNext()
  }

  // 이전 슬라이드로 이동
  const previous = () => {
    sliderRef?.current?.slickPrev()
  }

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <MainListItem key={item.rank} rank={item.rank} title={item.title} comment={item.comment} />
        ))}
      </Slider>
      <button onClick={previous}>이전</button>
      <button onClick={next}>다음</button>
    </>
  )
}

export default MainRequestList
