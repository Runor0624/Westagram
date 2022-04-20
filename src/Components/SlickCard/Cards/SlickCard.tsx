// 반복시킬 소형 카드 레이아웃 작성 파일
import React from 'react'
import styled from 'styled-components'
import Slicks from '../Slicks'

interface CardItemProps {
  id: number
  image: string
  text: string
  popular: string
}

const Cards: CardItemProps[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    text: '유저명 001',
    popular: '인기',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    text: '유저명 002',
    popular: '인기',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    text: '유저명 003',
    popular: '인기',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    text: '유저명 004',
    popular: '인기',
  },
]

function SlickCard() {
  return (
    <Slicks>
      {Cards.map((item, idx) => (
        <CardBorder key={idx}>
          <Images src={item.image} alt="테스트" />
          <UserText>{item.text}</UserText>
          <UserPopular>{item.popular}</UserPopular>
        </CardBorder>
      ))}
    </Slicks>
  )
}

const CardBorder = styled.div`
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  max-width: 150px;
  height: 210px;
  margin: 10px 0 10px 0;
`

const Images = styled.img`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 90%;
`
const UserText = styled.p`
  font-weight: bold;
  font-size: 12px;
  text-align: center;
`
const UserPopular = styled.p`
  font-size: 11px;
  text-align: center;
  color: #999;
`

export default SlickCard
