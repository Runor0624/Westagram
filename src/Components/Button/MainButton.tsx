import React from 'react'
import styled from 'styled-components'

// 메인페이지에서 사용하는 버튼 컴포넌트

interface MainButtonType {
  disabled?: boolean | undefined
  children: string
  onClick?: () => void
}

function MainButton({ disabled, children }: MainButtonType) {
  return (
    <>
      <MainButtons disabled={!disabled}>{children}</MainButtons>
    </>
  )
}
const MainButtons = styled.button`
  border: none;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  align-items: center;
  color: white;
  height: 20px;
  width: 20%;
  margin: 25px 0 0 0;
  cursor: pointer;
  &:active {
    background-color: #0095f6;
  }
  &:disabled {
    background-color: #0095f6;
    opacity: 0.5;
  }
`
export default MainButton
