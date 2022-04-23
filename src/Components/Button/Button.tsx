import React from 'react'
import styled from 'styled-components'
// 로그인 + 회원가입 페이지에서 사용하는 버튼 컴포넌트

interface ButtonsType {
  disabled: boolean | undefined
  children: string
}

function Button({ disabled, children }: ButtonsType) {
  return <Buttons disabled={disabled}>{children}</Buttons>
}
const Buttons = styled.button`
  border: none;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  align-self: center;
  color: white;
  width: 100%;
  margin-bottom: 15px;
  height: 30px;
  cursor: pointer;
  &:active {
    background-color: #0095f6;
  }
  &:disabled {
    background-color: #0095f6;
    opacity: 0.5;
  }
`
export default Button
