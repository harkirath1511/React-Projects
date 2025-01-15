import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header , Footer} from './Components'


function App() {


  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
