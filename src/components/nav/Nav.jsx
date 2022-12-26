import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import {AiOutlineCode} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import './nav.css'

function Nav() {

  // Active Navbar is clicked
  const [activeNav , setActiveNav]  = useState('#')

  return (
    <nav>
    <NavLink to='/' > <AiOutlineHome/></NavLink>
    <NavLink to='about'><AiOutlineUser/></NavLink>
    <NavLink to='experience'><BsCodeSlash/></NavLink>
    <NavLink to='portfolio'><AiOutlineCode/></NavLink>





      
    </nav>
  )
}

export default Nav