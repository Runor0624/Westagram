import React, { useState } from 'react'
import styled from 'styled-components'
import {
  BsHouseDoorFill,
  BsFillCompassFill,
  BsFillPersonFill,
} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
// import Checkbox from '@mui/material/Checkbox'

interface DropdownTypes {
  id: number
  contents: string
}

const Dropdowns: DropdownTypes[] = [
  {
    id: 1,
    contents: '메인 페이지',
  },
  {
    id: 2,
    contents: '환경설정',
  },
  {
    id: 3,
    contents: '고객센터',
  },
]

function Nav() {
  const [ismenuopen, setIsmenuopen] = useState(false)
  const menuOpen = () => {
    setIsmenuopen((ismenuopen) => !ismenuopen)
  }

  const navigate = useNavigate()

  const goToMain = () => {
    navigate('/')
  }

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <Container>
      <Title>
        Westagram
        <DropdownTest
          className={ismenuopen ? 'DropdownOpens' : 'DropdownClose'}
        >
          {Dropdowns.map((item, idx) => (
            <DropdownListTest key={idx}>{item.contents}</DropdownListTest>
          ))}
        </DropdownTest>
      </Title>
      <InputBox>
        <NavInput placeholder="검색" />
      </InputBox>
      {/* <Checkbox /> */}
      <RightButtonGroup>
        <BsFillPersonFill onClick={menuOpen}></BsFillPersonFill>

        <BsFillCompassFill onClick={goToLogin} />
        <BsHouseDoorFill />
      </RightButtonGroup>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  height: auto;
  border-bottom: 1px solid #dbdbdb;
  @media screen and (max-width: 768px) {
    width: 70%;
    display: none;
  }
`

const Title = styled.h1`
  width: 100%;
  height: 10px;
  text-align: right;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Lobster';
  cursor: pointer;
`

const InputBox = styled.section`
  justify-items: center;
  text-align: center;
  margin-top: -15px;
  height: 30px;
`

const NavInput = styled.input`
  width: 25%;
  text-align: center;
  border: none;
  border-radius: 10px;
`

const RightButtonGroup = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: -40px;
  width: 25%;
  font-size: 30px;
`

const DropdownTest = styled.ul`
  border: 1px solid #dbdbdb;
  width: 50px;
  height: 70px;
  line-height: 25px;
  list-style-type: none;
  text-align: center;
  font-size: 11px;
  overflow: hidden;

  &.DropdownOpens {
    margin: 1px;
    transition: 0.1s;
  }

  &.DropdownClose {
    transition: 0.1s;
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
    display: none;
  }
`

const DropdownListTest = styled.li`
  width: 100%;
  margin-left: -15px;
`
export default Nav
