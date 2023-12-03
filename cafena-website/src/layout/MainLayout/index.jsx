import React from 'react'
import { Outlet,useLocation } from "react-router-dom";
import CommonProvider from '../../context/CommonContext';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Overlay from '../../components/CommonComponents/Overlay';
import BreadCrumbs from '../../components/CommonComponents/BreadCrumbs';
const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
    <CommonProvider>
    <Navbar/>
    {
      !isHomePage && <BreadCrumbs/>
    }
    
    <Overlay/>
    <Outlet/>
    {/* <Footer/> */}
    </CommonProvider>
   
    </>
  )
}

export default MainLayout