import '../../assets/css/navbar.css';
import AdminIdContext from "../context/adminContext";
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/modal.css';
import avatar from '../../assets/logos/girlava.png';

const NavbarInside = () => {

  const { adminId } = useContext(AdminIdContext);

  return (
    <>
      <nav className='nav nav-inside'>
        <div className='nav-header'>
          <div className='nav-title'>
            <div className='row'>
              <div className='col-sm-2'>
                <img src={avatar} className='navbar-inside-logo'></img>
              </div>
              <div className='col-sm-10'>
              <span className=''>
                  <span className='welcomerr'>WELCOME</span>
                  <p>
                    {adminId}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='nav-btn-22 navbar-back-arrow'>
          <Link to='/dashboard/home'>
              
          <i class="fa-solid fa-2x fa-circle-chevron-left"></i>
          </Link>
        </div>
        <input type='checkbox' className='nav-check' id='nav-check'></input>
        <div className='nav-links'>
            <Link to='/dashboard/home'>HOME</Link>
            <Link to='/dashboard/onboarding'>POLICE OFFICER ONBOARDING</Link>
            <Link to='/dashboard/assign-duty'>ASSIGN DUTY</Link>
            <Link to='/dashboard/supervision'>POLICE OFFICER SUPERVISION</Link>
            <Link to='/dashboard/post-work-notifications'>POST WORK NOTIFICATIONS</Link>
            <Link to='/dashboard/sos'>SOS</Link>
            <Link to='/' className='loginbtn'>LOGOUT</Link>
        </div>
      </nav>

      
    </>
  );
};

export default NavbarInside;
