import React from 'react'

function NavBar() {
  return (
    <div className='d-flex justify-content-between'>
      <div>Page Name</div>
      <div className='d-flex gap-5'>
        <div>Search</div>
        <div className='d-flex'>
          <div><img src="src\assets\icons8-fire-48.png" alt="" className='w-50' /></div>
          <div><img src="src\assets\icons8-notification-48.png" alt="" className='w-50'/></div>
          <div><img src="src\assets\icons8-moon-48.png" alt="" className='w-50'/></div>
        </div>
      </div>
    </div>
  )
}

export default NavBar