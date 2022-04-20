import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { ICommentsTypes, CommentState } from '../../../Interface/Comments'
import CardItem from '../CardItem/CardItem'
import styled from 'styled-components'

function CardList() {
  const [iscomment, setIsComment] =
    useRecoilState<ICommentsTypes[]>(CommentState)
  const onComplete = useCallback(
    (id: number): void => {
      iscomment.map((comment: ICommentsTypes) => {
        return comment.id === id
          ? { ...comment, isCompleted: !comment.isCompleted }
          : comment
      })
    },
    [setIsComment, iscomment]
  )

  const onDelete = useCallback(
    (id: number) => {
      setIsComment(
        iscomment.filter((comment: ICommentsTypes) => comment.id !== id)
      )
    },
    [setIsComment, iscomment]
  )
  return (
    <Container>
      {iscomment.length > 0 ? (
        iscomment.map((comment: ICommentsTypes) => {
          const { id, comments, isCompleted } = comment

          return (
            <CardItem
              id={id}
              key={id}
              comments={comments}
              isCompleted={isCompleted}
              iscomment={iscomment}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          )
        })
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </Container>
  )
}
const Container = styled.div`
  width: 500px;
  height: 150px;
  max-height: 500px;
  position: relative;
  border: 1px solid white;
  overflow-x: hidden;
  overflow-y: auto;
`
export default CardList