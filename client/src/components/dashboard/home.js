import React, { useContext, useEffect } from 'react';
import '../../assets/css/home.css';
import NavbarInside from './navbar-inside.js';
import profilephoto from '../../assets/images/profile-photo.jpg';
import customerimg from '../../assets/images/customer-support.jpg';
import connectimg from '../../assets/images/sellproduct.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <div className='home-outer home-overflow'>
        <div>
          <NavbarInside />
        </div>

        <div className='main'>
          <div className='main-in'>
            <div className='home-box-outer row'>
              
              <div className='home-box col-sm-4'>
                <center>
                <Link to='/categories'>
                  <div className='home-box-heading'>
                  <i class="fa-solid fa-handshake"></i> Connect with Peers
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={connectimg} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr2 col-sm-8'>
                    If required, individuals within the same department can utilize this tab to quickly reach out and communicate with one another.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
              <div className='home-box col-sm-4'>
                <center>
                <Link to='/'>
                <div className='home-box-heading'>
                <i class="fa-solid fa-headset"></i> Customer Support
                </div>
                <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={customerimg} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr5 col-sm-8'>
                    This tab is available for administrators to post any issues they may have. These issues will be resolved promptly, within 24 hours
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
              <div className='home-box col-sm-4'>
                <center>
                  <Link to='/settings'>
                  <div className='home-box-heading'>
                  <i class="fa-solid fa-address-card"></i> Manage Profile
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={profilephoto} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr6 col-sm-8'>
                    The Manage Profile page allows the admin to change their name, address & department. Admins can also change their login credentials.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
