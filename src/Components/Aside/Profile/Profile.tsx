import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Images from '../../../Image/profile_si.png'

function Profile() {
  return (
    <AsideContainer>
      <AsideUserImage src={Images} alt="유저 프로필 이미지" />
      <AsideUserInfo>
        <AsideUserName>Westagram_Admin</AsideUserName>
        <AsideUserActive>비공개</AsideUserActive>
      </AsideUserInfo>
    </AsideContainer>
  )
}
const AsideContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #262626;
`

const AsideUserImage = styled.img`
  width: 50px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid #262626;
  overflow: hidden;
`

const AsideUserInfo = styled.div`
  margin-left: 15px;
`

const AsideUserName = styled.p`
  font-size: 13px;
  color: #999;
`
const AsideUserActive = styled.p`
  font-size: 11px;
  font-weight: bold;
`

export default Profile
