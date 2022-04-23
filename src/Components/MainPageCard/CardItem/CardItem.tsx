import React from 'react'
import styled from 'styled-components'
import { ICommentsTypes } from '../../../Interface/Comments'
import { MdClose } from 'react-icons/md'

interface PropsType {
  id: number
  comments: string
  isCompleted: boolean

  onComplete: (id: number) => void
  onDelete: (id: number) => void

  iscomment: ICommentsTypes[]
}

const CardItem = ({
  id,
  comments,
  onDelete,
  onComplete,
}: PropsType) => {
  return (
    <CardItems>
      <p onClick={() => onComplete(id)}>{comments}</p>
      <CardIcons>
        <MdClose onClick={() => onDelete(id)} />
      </CardIcons>
    </CardItems>
  )
}
const CardItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: white;
  font-size: 13px;
  @media screen and (max-width: 768px) {
    width: 60%;
    font-weight: bold;
  }
`

const CardIcons = styled.p`
  display: flex;
  align-items: center;
`
export default CardItem
