import React from 'react'
import styled from 'styled-components'
import Nav from './Components/Nav/Nav'
import Layout from './Components/MainPageCard/Layout'
import Layouts from './Components/Aside/Layout'

function App() {
  return (
    <Container>
      <Nav />
      <Test>
        <Layout />
        <Layouts /> {/* Aside */}
      </Test>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1300px;
`

const Test = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`

export default App
