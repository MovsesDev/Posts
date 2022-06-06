import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'


const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
    <NavLink to='/'> Main</NavLink>
    <NavLink to='/myPosts'> My posts</NavLink>
    <NavLink to='/editPost'> Edit post</NavLink>
    </div>
  )
}

export default Navbar