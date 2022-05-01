import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button'

interface PropButton {
  disabled: boolean | undefined
  children: string
}

function SignUp({ children, disabled }: PropButton) {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  const [inputse, setInputs] = useState({
    id: '',
    password: '',
    username: '',
    email: '',
  })

  const inputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputs({ ...inputse, [name]: value })
  }

  const { id, password, username, email } = inputse

  const isFormValids =
    inputse.email.includes('@') &&
    inputse.id.length > 5 &&
    inputse.username.length > 5 &&
    inputse.password.length > 5

  return (
    <Container>
      <SignUpBox>
        <SignUpTitle>Westagram</SignUpTitle>
        <Description>친구들의 사진과 동영상을 보려면 가입하세요.</Description>
        <Inputs
          type="email"
          name="email"
          value={email}
          onInput={inputValues}
          placeholder="휴대폰 번호 또는 이메일 주소"
        />

        <Inputs
          type="text"
          name="username"
          value={username}
          onInput={inputValues}
          placeholder="성명"
        />

        <Inputs
          type="text"
          name="id"
          value={id}
          onInput={inputValues}
          placeholder="사용자 이름"
        />

        <Inputs
          type="password"
          name="password"
          value={password}
          onInput={inputValues}
          placeholder="비밀번호"
        />

        <Button disabled={isFormValids}>회원가입</Button>
      </SignUpBox>
      <LoginBox>
        <Login onClick={goToLogin}>계정이 있으신가요? 로그인</Login>
      </LoginBox>

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

const SignUpBox = styled.div`
  height: 375px;
  border: 1px solid #dbdbdb;
`

const SignUpTitle = styled.h1`
  font-family: 'Lobster';
  font-weight: bold;
  font-size: 50px;
`
const Description = styled.h3`
  color: #dbdbdb;
  font-weight: bold;
  font-size: 18px;
`

const Inputs = styled.input`
  width: 90%;
  line-height: 30px;
  margin: 5px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
`

const LoginBox = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: 13px;
  border: 1px solid #dbdbdb;
`

const Login = styled.p`
  text-align: center;
  font-size: 15px;
  cursor: pointer;
`
export default SignUp
