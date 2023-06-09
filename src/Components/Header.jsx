import React from 'react'
import netflixLogo from '../Images/Netflix.png'

function Header() {
  return (
    <div className='bg-black text-white h-16 flex justify-between'>
      <img src={netflixLogo} className='w-32 ml-10 p-4' alt='netflix' />
      <div className='flex justify-end items-center mr-10'>
        <p className=''>UNLIMITED TV SHOWS & MOVIES</p>
        <button className='bg-white text-black px-2 m-4 border-0'>JOIN NOW</button>
        <button className='bg-red-700 px-3 py-0.5'>SIGN IN</button>
      </div>
    </div>
  )
}

export default Header