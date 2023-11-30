import React from 'react'
import { NavLink } from "react-router-dom";
import './index.scss'
const Dropdown = ({className}) => {
  return (
    <div id='dropdown' className={className}>
      <ul>
        <li className='dropdown_items'>
            <NavLink to={"/shop"}>shop</NavLink>
        </li>
        <li className='dropdown_items'>
            <NavLink to={"/shopDetail"}>shop detail</NavLink>
        </li>
        <li className='dropdown_items'>
            <NavLink to={"/shopCart"}>shop cart</NavLink>
        </li>
        <li className='dropdown_items'>
            <NavLink to={"/shopCheckout"}>shop checkout</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
