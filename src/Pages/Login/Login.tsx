import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'

interface PropsButton {
  disabled: boolean | undefined
  children: string
}

function Login({ children, disabled }: PropsButton) {
  const navigate = useNavigate()

  const goToMain = () => {
    navigate('/')
  }

  const goToSignUp = () => {
    navigate('/signup')
  }

  const [inputse, setInputse] = useState({
    id: '',
    password: '',
  })

  const inputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputse({ ...inputse, [name]: value })
  }

  const { id, password } = inputse

  const isFormValid = inputse.id.includes('@') && inputse.password.length > 6
  return (
    <Container>
      <LoginBox>
        <LoginTitle>Westagram</LoginTitle>
        <Inputs
          type="text"
          name="id"
          value={id}
          onInput={inputValues}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />

        <Inputs
          type="password"
          name="password"
          value={password}
          onInput={inputValues}
          placeholder="비밀번호"
        />

        <Button disabled={isFormValid}>로그인</Button>
        <LoginFind onClick={goToMain}>비밀번호를 잊으셨나요?</LoginFind>
      </LoginBox>
      <SignUpBox>
        <SignUp onClick={goToSignUp}>계정이 없나요? 가입하기</SignUp>
      </SignUpBox>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 350px;
  height: 100vh;
  text-align: center;
  align-self: center;
  @media screen and (max-width: 768px) {
    width: 70%;
    font-weight: bold;
  }
`

const LoginBox = styled.div`
  height: 300px;
  border: 1px solid #dbdbdb;
`

const LoginTitle = styled.h1`
  font-family: 'Lobster';
  font-weight: bold;
  font-size: 50px;
`
const Inputs = styled.input`
  width: 90%;
  line-height: 30px;
  margin: 5px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
`

const SignUpBox = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: 13px;
  border: 1px solid #dbdbdb;
`

const SignUp = styled.p`
  text-align: center;
  font-size: 15px;
  cursor: pointer;
`

const LoginFind = styled.p`
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 13px;
  text-align: center;
  color: lightgray;
`

export default Login
