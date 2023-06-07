import React from 'react'
import Header from '../../../Header'
import Logout from '../../../logout'

const Home = () => {
  return (
    <>
      <Header />
      <div className='header-container'>
        <div className='header-parent'>
          <div className="header">
          <Logout/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home