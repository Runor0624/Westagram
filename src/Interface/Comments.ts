import { atom } from 'recoil'

export interface ICommentsTypes {
  id: number
  comments: string
  isCompleted: boolean
}

export const InputState = atom<string>({
  key: 'InputState',
  default: '',
})

export const CommentState = atom<ICommentsTypes[]>({
  key: 'CommentState',
  default: [
    {
      id: 1,
      comments: '댓글 익명기능 테스트 중',
      isCompleted: false,
    },
    {
      id: 2,
      comments: '타입스크립트 어렵다',
      isCompleted: false,
    },
    {
      id: 3,
      comments: '나는 모바일 개발자에 관심이 있다.',
      isCompleted: false,
    },
  ],
})
