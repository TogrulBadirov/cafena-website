import React from 'react'
import { NavLink } from "react-router-dom";
import './index.scss'
const Dropdown = ({className}) => {
  return (
    <div id='dropdown' className={className}>
      <ul>
        <li className='dropdown_items'>
            <NavLink>shop</NavLink>
        </li>
        <li className='dropdown_items'>
            <NavLink>shop detail</NavLink>
        </li>
        <li className='dropdown_items'>
            <NavLink>shop cart</NavLink>
        </li>
        <li className='dropdown_items'>
            <NavLink>shop checkout</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown