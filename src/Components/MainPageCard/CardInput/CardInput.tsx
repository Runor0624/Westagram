import React, { useCallback, ChangeEvent, KeyboardEvent } from 'react'
import styled from 'styled-components'
import {
  ICommentsTypes,
  InputState,
  CommentState,
} from '../../../Interface/Comments'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

function CardInput() {
  const [comments, setIsCommentse] = useRecoilState<string>(InputState)
  const iscomment = useRecoilValue<ICommentsTypes[]>(CommentState)
  const setIsComments = useSetRecoilState<ICommentsTypes[]>(CommentState)

  const addComments = useCallback((): void => {
    if (!comments.trim()) {
      return
    }
    const Ids: number =
      iscomment.length > 0 ? iscomment[iscomment.length - 1].id + 1 : 0

    const comment: ICommentsTypes = {
      id: Ids,
      comments,
      isCompleted: false,
    }
    setIsComments([...iscomment, comment])
    setIsCommentse('')
  }, [comments, iscomment, setIsComments, setIsCommentse])

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target
      setIsCommentse(value)
    },
    [setIsCommentse]
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        addComments()
      }
    },
    [addComments]
  )
  return (
    <Container>
      <Inputs
        type="text"
        value={comments}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="댓글입력"
      />
      <CardButton onClick={addComments}>작성</CardButton>
    </Container>
  )
}
const Container = styled.div`
  max-width: 700px;
  display: flex;
`

const Inputs = styled.input`
  flex: 1;
  border: none;
  border-radius: 10px;
  font-size: 15px;
`

const CardButton = styled.button`
  font-size: 15px;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: #0095f6;
`
export default CardInput
