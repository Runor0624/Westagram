import React from 'react'
import styled from 'styled-components'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Layout from './Components/MainPageCard/Layout'
import Layouts from './Components/Aside/Layout'

function App() {
  return (
    <Container>
      <Nav />
      <Layout />
      <Layouts />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  max-width: 1300px;
`
export default App
