import React from 'react'
import { Outlet } from "react-router-dom";
import CommonProvider from '../../context/CommonContext';
import Footer from '../Footer';
import Navbar from '../Navbar';
const MainLayout = () => {
  return (
    <>
    <CommonProvider>
    <Navbar/>
    <Outlet/>
    {/* <Footer/> */}
    </CommonProvider>
   
    </>
  )
}

export default MainLayout