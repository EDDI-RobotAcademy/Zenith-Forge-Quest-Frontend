'use client'

import Pagination from '@/components/common/Pagination/Pagination'
import { StyledStorySection } from './styled'
import Dropdown from '@/components/common/Dropdown/Dropdown'
import { useState } from 'react'
import Card from '@/components/common/Card/Card'

const fakeData = [
  {
    mainCardNo: 1,
    category: 'Design',
    title: '프론트엔드 개발자가 왜 이걸 해야하나',
    content:
      '업계 아티클을 즐겨 보시는 분이라면 디자이너의 커뮤니케이션에 대한 글을 심심치 않게 보셨을 겁니다. 아아아 하입보이 퇴근하고싶고 집에가고싶고 원래 이런건가 싶고 퍼블리싱 재미없고 근데 솔직히 이번꺼 너무 망햇고 그냥해보고 리팩토링해야지 누가좀 ui좀 만들어줘 나도 성능 이런거 해보고싶어어어어어엉 오랜만에 반응형하니까 머리아파,,,,,,, 디자인도없이 하니까 더아파,,,,,,,, 머리아파아 아아아아 얼마나 길어지는지 보자 7줄만 나와야해 계속 키보드를 쳐보자 7줄이 나의 마지노선이다아아아아 징동 아웃! 뉴진스 나와! T1~~~~~~~~~~~~~~~~~~~~ 한줄만 더 길어지면 될거같다.. 곧 12월 우어어어어어어어어어어어어어어어아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ',
    imageSrc: '/images/team-work-meeting-with-females.jpg',
    author: '박성빈',
    hour: '5시간 전',
    minute: '10분',
  },
  {
    mainCardNo: 2,
    category: 'Backend',
    title: '스레드를 많이 쓸수록 항상 성능이 좋아질까?',
    content: '업계 아티클을 즐겨 보시는 분이라면 디자이너의 커뮤니케이션에 대한 글을 심심치 않게 보셨을 겁니다.',
    imageSrc: '/images/team-work-meeting-with-females.jpg',
    author: '사용자123',
    hour: '11시간 전',
    minute: '20분',
  },
  {
    mainCardNo: 3,
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
    mainCardNo: 4,
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
    mainCardNo: 5,
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
    mainCardNo: 6,
    category: 'DevOps',
    title: '자바스크립트 이벤트 루프 동작 구조 & 원리 끝판왕',
    content:
      '업계 아티클을 즐겨 보시는 분이라면 디자이너의 커뮤니케이션에 대한 글을 심심치 않게 보셨을 겁니다.asdasdasdasdklhjaklsjdklajskldjhalkshdasd그렇구나 이렇구나 즉 비동기는 이런거구나 테스트를해보기위해 이렇게 계속 두들기는거다 아 개어렵네 UI만들기 ',
    imageSrc: '/images/team-work-meeting-with-females.jpg',
    author: '사용자2',
    hour: '23시간 전',
    minute: '30분',
  },
]

function StorySection() {
  const [selectedValue, setSelectedValue] = useState('추천순')

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value)
  }

  return (
    <StyledStorySection>
      <h1>React</h1>
      <div>
        <Dropdown id="test" list={['최신순', '추천순', '인기순', '댓글순']} value="최신순" onChange={handleChange} />
      </div>
      <div className="card-container">
        {fakeData.map((data) => (
          <Card
            key={data.mainCardNo}
            category={data.category}
            title={data.title}
            content={data.content}
            imageSrc={data.imageSrc}
            author={data.author}
            hour={data.hour}
            minute={data.minute}
          />
        ))}
      </div>
      <div className="pagination-container">
        <Pagination />
      </div>
    </StyledStorySection>
  )
}

export default StorySection
