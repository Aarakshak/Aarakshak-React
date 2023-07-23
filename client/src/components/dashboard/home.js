import React, { useContext, useEffect } from 'react';
import '../../assets/css/home.css';
import NavbarInside from './navbar-inside.js';
import photo1 from '../../assets/images/police-writing.jpg';
import photo2 from '../../assets/images/police-duty.jpg';
import photo3 from '../../assets/images/police-duty2.jpg';
import customerimg from '../../assets/images/customer-support.jpg';
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
            <div className='home-box-outer'>
              <div className='row'>

              <div className='home-box col-sm-4'>
                  <center>
                    <Link to='/dashboard/onboarding'>
                    <div className='home-box-heading'>
                    <i class="fa-regular fa-circle-user"></i> Police Officer Onboarding
                    </div>
                    <div className='row'>
                      <div className='box-inner-left col-sm-4'>
                        <img src={photo1} className='box-inner-img'></img>
                      </div>
                      <div className='box-inner-right bxr6 col-sm-8'>
                      The Assign Duty page allows the admin to assign duties to policemen giving duty at various locations
                      </div>  
                    </div>
                    </Link>
                  </center>
                </div>


                <div className='home-box col-sm-4'>
                <center>
                  <Link to='/dashboard/settings'>
                  <div className='home-box-heading'>
                  <i class="fa-solid fa-address-card"></i> Assign Duty
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={photo2} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr6 col-sm-8'>
                    The Assign Duty page allows the admin to assign duties to policemen giving duty at various locations
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>

              <div className='home-box col-sm-4'>
                  <center>
                    <Link to='/dashboard/post-work-notifications'>
                    <div className='home-box-heading'>
                    <i class="fa-solid fa-briefcase"></i> Posting Work Notifications
                    </div>
                    <div className='row'>
                      <div className='box-inner-left col-sm-4'>
                        <img src={photo3} className='box-inner-img'></img>
                      </div>
                      <div className='box-inner-right bxr6 col-sm-8'>
                      The Assign Duty page allows the admin to assign duties to policemen giving duty at various locations
                      </div>  
                    </div>
                    </Link>
                  </center>
                </div>

            </div>
            </div>

            <div className='row'>

            <div className='home-box col-sm-4'>
                <center>
                <Link to='/dashboard/sos'>
                <div className='home-box-heading'>
                <i class="fa-solid fa-tower-broadcast"></i> SOS
                </div>
                <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={customerimg} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr5 col-sm-8'>
                    This tab is available for administrators to see the emergency SOS raised by Police officers within past 24 hours
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
