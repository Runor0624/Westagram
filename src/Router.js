import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'

function Router() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        {' '}
        {/* 여기에 리코일 사용하겠다 적용시킴. */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}
export default Router
