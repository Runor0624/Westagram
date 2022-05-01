import React, { useState } from 'react'
import styled from 'styled-components'
import {
  BsHouseDoorFill,
  BsFillCompassFill,
  BsFillPersonFill,
  BsCamera,
} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { NavData } from '../../Data/NavData'
// import Checkbox from '@mui/material/Checkbox'

function Nav() {
  const [ismenuopen, setIsmenuopen] = useState(false)
  const menuOpen = () => {
    setIsmenuopen((ismenuopen) => !ismenuopen)
  }

  const navigate = useNavigate()

  const goToPhoto = () => {
    navigate('/photo')
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
          {NavData.map((item, idx) => (
            <DropdownListTest key={idx}>{item.contents}</DropdownListTest>
          ))}
        </DropdownTest>
      </Title>
      <InputBox>
        <NavInput placeholder="검색" />
      </InputBox>
      {/* <Checkbox /> */}
      <LeftButtonGroup>
        <BsFillPersonFill onClick={menuOpen} />

        <BsFillCompassFill onClick={goToLogin} />
        <BsHouseDoorFill />
        <BsCamera onClick={goToPhoto} />
      </LeftButtonGroup>
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

const LeftButtonGroup = styled.section`
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
  z-index: 1;

  &.DropdownOpens {
    margin: 2px;
    transition: 0s;
  }

  &.DropdownClose {
    transition: 0s;
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
