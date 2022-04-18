import React from 'react'
import styled from 'styled-components'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Text>123</Text>
      <Footer />
    </div>
  )
}

const Text = styled.p`
  font-weight: bold;
`

export default App
