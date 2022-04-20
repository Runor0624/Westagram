import React from 'react'
import styled from 'styled-components'

interface StoryTypes {
  id: number
  image: string
  username: string
  onlineTime: string
}

const storys: StoryTypes[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    username: '테스터1',
    onlineTime: '2시간 전',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    username: '테스터2',
    onlineTime: '4시간 전',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    username: '테스터3',
    onlineTime: '1시간 전',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    username: '테스터51',
    onlineTime: '1시간 전',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    username: '테스터41',
    onlineTime: '21시간 전',
  },
]

function AsideStory() {
  return (
    <Container>
      <AsideHeader>
        <p>스토리</p>
        <p>모두 보기</p>
      </AsideHeader>
      {storys.map((item, idx) => (
        <AsideStorymap>
          <ProfileImage src={item.image} alt="테스트" />
          <div>
            <UserName>{item.username}</UserName>
            <LastOnline>{item.onlineTime}</LastOnline>
          </div>
        </AsideStorymap>
      ))}
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid #dbdbdb;
  max-width: 320px;
`

const AsideStorymap = styled.div`
  display: flex;
  margin-left: 25px;
`

const AsideHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 15px 10px 0 0;
  border-radius: 100%;
  overflow: hidden;
`
const UserName = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #999;
`

const LastOnline = styled.p`
  font-size: 11px;
`
export default AsideStory
