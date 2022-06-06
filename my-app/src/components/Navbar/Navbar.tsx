import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'


const Navbar: React.FC = () => {
  return (
    <>
    <NavLink to='/'> Main</NavLink>
    <NavLink to='/addPost'> Add post</NavLink>
    <NavLink to='/editPost'> Edit post</NavLink>
    </>
  )
}

export default Navbar