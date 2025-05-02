import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='flex flex-row gap-90 p-2 items-center justify-center bg-blue-900 text-white'>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/notes"> Notes </NavLink>
    </div>
  )
}

export default Navbar