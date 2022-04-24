import React from 'react'
import styled from 'styled-components'

const LOGIN_BOTTOM_LIST = [
  { id: 1, content: 'Meta ・' },
  { id: 2, content: '소개 ・' },
  { id: 3, content: '블로그 ・' },
  { id: 4, content: '채용 정보 ・' },
  { id: 5, content: '도움말 ・' },
  { id: 6, content: 'API' },
]

const Footer = () => {
  return (
    <FooterMap>
      {LOGIN_BOTTOM_LIST.map((bottoms) => (
        <p key={bottoms.id}>{bottoms.content}</p>
      ))}
    </FooterMap>
  )
}

const FooterMap = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: bold;
  color: #dbdbdb;
`
export default Footer
