import React from 'react'
import styled from 'styled-components'
import Profile from './Profile/Profile'
import AsideStory from './AsideStory/AsideStory'

// 메인페이지 우측에 존재하는 Aside 관련 파일을 여기서 종합하여 App.tsx 로 넘긴다.
// MainPageCard - Layout.tsx와 동일한 기능을 수행한다.

function Layout() {
  return (
    <Container>
      <Profile />
      <AsideStory />
    </Container>
  )
}

const Container = styled.div`
  width: 350px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export default Layout
