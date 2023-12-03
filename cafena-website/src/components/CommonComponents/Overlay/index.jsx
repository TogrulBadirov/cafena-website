import React from 'react'
import './index.scss'
import { useCommonContext } from '../../../context/CommonContext'
const Overlay = () => {
    const {isSideBarOpen,setIsSideBarOpen,isMobileMenuOpen,setIsMobileMenuOpen}=useCommonContext()
    const handleClick=()=>{
        setIsSideBarOpen(false)
        setIsMobileMenuOpen(false)
    }
    return (
    <div className={`${isSideBarOpen || isMobileMenuOpen ? 'active' : 'closed'} overlay`} onClick={handleClick}></div>
    )
}

export default Overlay