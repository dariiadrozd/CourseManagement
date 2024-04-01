import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Pages/Navigation/Navigation'
import Home from './Pages/Home/Home'


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/nav' element={<Navigation></Navigation>}></Route>
    </Routes>
  )
}

export default App
