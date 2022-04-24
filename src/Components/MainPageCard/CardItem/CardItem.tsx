import React, { useState } from 'react'
import styled from 'styled-components'
import { ICommentsTypes } from '../../../Interface/Comments'
import { MdClose } from 'react-icons/md'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface PropsType {
  id: number
  comments: string
  isCompleted: boolean

  onComplete: (id: number) => void
  onDelete: (id: number) => void

  iscomment: ICommentsTypes[]
}

const CardItem = ({ id, comments, onDelete, onComplete }: PropsType) => {
  const [isButton, setIsButton] = useState<boolean>(false)

  const handleButton = () => {
    setIsButton(!isButton)
  } // 버튼 icon 변경 관련 로직

  return (
    <CardItems>
      <p onClick={() => onComplete(id)}>{comments}</p>
      <CardIcons onClick={handleButton}>
        {isButton ? <AiFillHeart /> : <AiOutlineHeart />}
        <MdClose onClick={() => onDelete(id)} />
      </CardIcons>
    </CardItems>
  )
}
const CardItems = styled.section`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-weight: bold;
  }
`

const CardIcons = styled.section`
  display: flex;
  align-items: center;
`
export default CardItem
