import React from 'react'
import Contant from './Contant'
import NavBar from './NavBar'
import SideBar from './SideBar'
function App() {
  return (
    <div className='d-flex '>
      <div style={{width:"20%", height:"100vh"}}><SideBar/></div>
      <div style={{width:"80%"}}>
        <div style={{height:"50px"}}><NavBar/></div>
        <div><Contant/></div>
      </div>
    </div>
  )
}

export default App