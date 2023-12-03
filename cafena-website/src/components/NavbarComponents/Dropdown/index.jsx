  import React from 'react'
  import { NavLink } from "react-router-dom";
  import './index.scss'
  const Dropdown = ({ className, links}) => {
    return (
      <div id='dropdown' className={className}>
        <ul>
          {
            links.map((link,i)=>(
            <>
              <li key={i} className='dropdown_items'>
              <NavLink to={link.to}>{link.name}</NavLink>
            </li>
            
            </>
            
            ))
          }
        </ul>
      </div>
    )
  }

  export default Dropdown
