// 메인페이지 사진 과 댓글입력 칸 등 메인페이지의 핵심 요소가 여기서 최종 합쳐집니다.
import React from 'react'
import styled from 'styled-components'
import CardList from './CardList/CardList'
import CardInput from './CardInput/CardInput'
import CardInfo from './Info/CardInfo'
import CardUserInfo from './Info/CardUserInfo'

interface ImageTypes {
  id: number
  image: string
  description: string
}

const images: ImageTypes[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    description: '이미지00',
  },
]

function Layout() {
  return (
    <Container>
      <CardUserInfo />
      {images.map((item, idx) => (
        <ImageStyle src={item.image} alt={item.description} key={idx} />
      ))}
      <CardInfo />
      <CardList />
      <CardInput />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin-left: 150px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 70%;
    font-weight: bold;
  }
`

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
export default Layout
