import '../../assets/css/navbar.css';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/modal.css';
import userAvatar from '../../assets/logos/user-avatar.png';

const NavbarInside = () => {

  return (
    <>
      <nav className='nav nav-inside'>
        <div className='nav-header'>
          <div className='nav-title'>
            <div className='row'>
              <div className='col-sm-2'>
                <img src={userAvatar} className='navbar-inside-logo'></img>
              </div>
              <div className='col-sm-10'>
                <span className=''>
                  <span className='welcomerr'>WELCOME</span>
                  <p>
                    Super Admin
                    {/* {user && user.name} */}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='nav-btn-22 navbar-back-arrow'>
          <Link to='/'>
              
          <i class="fa-solid fa-2x fa-circle-chevron-left"></i>
          </Link>
        </div>
        <input type='checkbox' id='nav-check'></input>
        <div className='nav-links'>
            <Link to='/home'>HOME</Link>
            <Link to='/categories'>CONNECT WITH PEERS</Link>
            <Link to='/'>CUSTOMER SUPPORT</Link>
            <Link to='/settings'>MANAGE PROFILE</Link>
            <Link to='/' className='loginbtn'>LOGOUT</Link>
        </div>
      </nav>

      
    </>
  );
};

export default NavbarInside;
