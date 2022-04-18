import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import {
  BsHouseDoorFill,
  BsHeartFill,
  BsPlusCircle,
  BsFillCompassFill,
  BsFillPersonFill,
} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
// import Checkbox from '@mui/material/Checkbox'

function Nav() {
  const navigate = useNavigate()

  const goToMain = () => {
    navigate('/')
  }

  return (
    <Container>
      <Title onClick={goToMain}>Westagram</Title>
      <InputBox>
        <NavInput placeholder="검색" />
      </InputBox>
      {/* <Checkbox /> */}
      <RightButtonGroup>
        <BsHouseDoorFill />
        <BsFillCompassFill />
        <BsPlusCircle />
        <BsFillPersonFill />
        <BsHeartFill />
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

const InputBox = styled.div`
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

const RightButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -40px;
  width: 30%;
  font-size: 30px;
`
export default Nav
