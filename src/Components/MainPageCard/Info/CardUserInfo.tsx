import React from 'react'
import styled from 'styled-components'
import Images from '../../../Image/profile_si.png'

function CardUserInfo() {
  return (
    <CardUserContainer>
      <CardUserImage src={Images} alt="프로필 이미지" />
      <CardUserInfos>
        <CardUserNames>Westagram_Typescript</CardUserNames>
        <CardUserLocation>인천 광역시</CardUserLocation>
      </CardUserInfos>
    </CardUserContainer>
  )
}

const CardUserContainer = styled.div`
  display: flex;
  align-items: center;
`

const CardUserImage = styled.img`
  width: 50px;
  height: 40px;
  margin: 5px 0 0 5px;
  border-radius: 100%;
  border: 1px solid #262626;
  overflow: hidden;
`

const CardUserInfos = styled.section`
  margin-left: 15px;
`

const CardUserNames = styled.h4`
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: bold;
  color: #999;
`

const CardUserLocation = styled.p`
  font-size: 12px;
`
export default CardUserInfo
