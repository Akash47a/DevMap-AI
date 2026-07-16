import React from 'react'

function DashBoard() {
  return (
    <div>
      <div className='DashBoard-center'>
        <div className='welcome'></div>
        <div className='Projects-home'>
          <div>Project</div>
          <div className='project-box'></div>
        </div>
        <div className='Quick-links'>
          <div>Quick access</div>
          <div className='links'></div>
        </div>
        <div className='Recent-tabs'>

        </div>
      </div>
      <div className='DashBoard-right'>
        <div className='Calendar-home'>

        </div>
        <div className='Tasks-home'>

        </div>
        <div className='Progress-home'>

        </div>
      </div>
    </div>
  )
}

export default DashBoard