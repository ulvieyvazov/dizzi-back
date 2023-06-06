import React from 'react'
import { Outlet } from 'react-router-dom'

const MainRoot = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default MainRoot