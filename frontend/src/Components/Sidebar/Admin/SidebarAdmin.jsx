import React, { useState } from 'react'
import './sidebar.css'

import SignalCellularAltSharpIcon from '@mui/icons-material/SignalCellularAltSharp';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Axios } from '../../Api/Axios';



export default function SidebarAdmin() {
  const navigate=useNavigate()
  
  const logout=async()=>{
    try {
      await Axios.post('/logout')
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='side' id='side' >
      <div className='logo'>
        <Link to={'/'}><img id="lg" src='/258541.svg'></img></Link>
      </div>
      <hr></hr>
      <div className='side-list'>
        
          
            <Link to={"/"}><a><i><SignalCellularAltSharpIcon className='icons' /><span>Dashboard</span></i></a></Link>
            <Link to={'/client'}><a><PeopleAltSharpIcon className='icons'/><span>Client</span></a></Link>
            <Link to={"/reclamation"}><a><AssignmentIcon className='icons'/><span>Reclamation</span></a></Link>
            <Link to={"/parametre/:id"}><a><SettingsIcon className='icons'/><span>Parametres</span></a></Link>
            
            <div className='buttom'><hr/>
           <Link to={"#"} onClick={logout}><a><LoginIcon className='icons'/><span>Logout</span></a></Link>
            <Link to={"/login"}><a><PersonAddIcon className='icons'/><span>Register</span></a></Link>
            </div>
            <div><Outlet/></div>
        
      </div>
      
      
    </div>
  )
}
