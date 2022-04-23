import React from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { ImBubble } from 'react-icons/im'

function CardInfo() {
  return (
    <CardInfoContainer>
      <CardInfoIconGroup>
        <AiOutlineHeart />
        <ImBubble />
      </CardInfoIconGroup>

      <section>
        <CardInfoGoodCount>좋아요 2,222개</CardInfoGoodCount>
        <CardInfoUserName>
          Westagram_Typescript 익명 댓글 테스트 진행중
        </CardInfoUserName>
        <CardInfoDate>2022년 1월 1일</CardInfoDate>
      </section>
    </CardInfoContainer>
  )
}
const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dbdbdb;
`

const CardInfoIconGroup = styled.section`
  display: flex;
  font-size: 25px;
  justify-content: space-evenly;
`

const CardInfoGoodCount = styled.p`
  font-weight: bold;
  font-size: 15px;
`

const CardInfoDate = styled.p`
  color: #999;
  font-size: 13px;
`

const CardInfoUserName = styled.p`
  font-size: 15px;
  font-weight: bold;
`

export default CardInfo
