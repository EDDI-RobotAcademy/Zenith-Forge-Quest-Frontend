'use client'

import React from 'react'
import MainCardItem from './MainCardItem'
import MainCard from './MainCard'
import { StyledMainCardItemList } from './MainCardItemList.style'

const fakeData = [
  {
    category: 'Design',
    title: '프론트엔드 개발자가 왜 이걸 해야하나',
    content: '업계 아티클을 즐겨 보시는 분이라면 디자이너의 커뮤니케이션에 대한 글을 심심치 않게 보셨을 겁니다.',
    imageSrc: '/images/team-work-meeting-with-females.jpg',
    author: '박성빈',
    hour: '5시간 전',
    minute: '10분',
  },
  {
    category: 'Backend',
    title: '스레드를 많이 쓸수록 항상 성능이 좋아질까?',
    content: '업계 아티클을 즐겨 보시는 분이라면 디자이너의 커뮤니케이션에 대한 글을 심심치 않게 보셨을 겁니다.',
    imageSrc: '/images/team-work-meeting-with-females.jpg',
    author: '사용자123',
    hour: '11시간 전',
    minute: '20분',
  },
  {
    category: 'DevOps',
    title: '자바스크립트 이벤트 루프 동작 구조 & 원리 끝판왕',
    content:
      '업계 아티클을 즐겨 보시는 분이라면 디자이너의 커뮤니케이션에 대한 글을 심심치 않게 보셨을 겁니다.asdasdasdasdklhjaklsjdklajskldjhalkshdasd그렇구나 이렇구나 즉 비동기는 이런거구나 테스트를해보기위해 이렇게 계속 두들기는거다 아 개어렵네 UI만들기 ',
    imageSrc: '/images/team-work-meeting-with-females.jpg',
    author: '사용자2',
    hour: '23시간 전',
    minute: '30분',
  },
  {
    category: 'Career',
    title: '연봉을 많이 받고 싶은 사람!?',
    content: '연봉이냐 워라밸이냐 그것이 문제로다 인쉥은 언제나 고민 ',
    imageSrc: '/images/team-work-meeting-with-females.jpg',
    author: '사용자2',
    hour: '23시간 전',
    minute: '30분',
  },
]

function MainCardItemList() {
  return (
    <StyledMainCardItemList>
      <MainCard
        category={fakeData[0].category}
        title={fakeData[0].title}
        content={fakeData[0].content}
        imageSrc={fakeData[0].imageSrc}
        author={fakeData[0].author}
        hour={fakeData[0].hour}
        minute={fakeData[0].minute}
      />

      {fakeData.slice(1).map((item, index) => (
        <MainCardItem
          key={index}
          category={item.category}
          title={item.title}
          content={item.content}
          imageSrc={item.imageSrc}
          author={item.author}
          hour={item.hour}
          minute={item.minute}
        />
      ))}
    </StyledMainCardItemList>
  )
}

export default MainCardItemList
