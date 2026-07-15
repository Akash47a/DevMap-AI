import React from 'react'

function SideBar() {
  return (
    <div className='h-100 d-flex flex-column justify-content-center align-items-center gap-3'>
      <div ><img src="src\assets\profile1.jpg" alt="" className='rounded-circle' style={{width:"100px"}}/></div>
      <div>DashBoard</div>
      <div>Projects</div>
      <div>Tasks</div>
      <div>Calendar</div>
      <div>AI Assist</div>
      <div>Settings</div>
    </div>
  )
}

export default SideBar