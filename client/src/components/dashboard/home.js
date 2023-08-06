import React from 'react';
import '../../assets/css/home.css';
import NavbarInside from './navbar-inside.js';
import photo1 from '../../assets/images/police-writing.jpg';
import photo2 from '../../assets/images/police-duty.jpg';
import photo3 from '../../assets/images/police-duty2.jpg';
import photo4 from '../../assets/images/police-duty3.jpg';
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
                      Police Officer Onboarding
                    </div>
                    <div className='row'>
                      <div className='box-inner-left col-sm-4'>
                        <img alt='' src={photo1} className='box-inner-img'></img>
                      </div>
                      <div className='box-inner-right bxr6 col-sm-8'>
                      It ensures an efficient integration process, aiding in successful onboarding of police officer into Aarakshak App. 
                      </div>  
                    </div>
                    </Link>
                  </center>
                </div>


                <div className='home-box col-sm-4'>
                <center>
                  <Link to='/dashboard/create-session'>
                  <div className='home-box-heading'>
                   Create Session
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img alt='' src={photo2} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr6 col-sm-8'>
                    It allows the admin to create duty sessions where police officers are assigned duties later.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>

              <div className='home-box col-sm-4'>
                  <center>
                    <Link to='/dashboard/assign-duty'>
                    <div className='home-box-heading'>
                     Assign Duty
                    </div>
                    <div className='row'>
                      <div className='box-inner-left col-sm-4'>
                        <img src={photo4} className='box-inner-img' alt=''></img>
                      </div>
                      <div className='box-inner-right bxr6 col-sm-8'>
                      This feature allows the admin to assign specific sessions to policemen stationed at various locations.
                      </div>  
                    </div>
                    </Link>
                  </center>
                </div>
            </div>
            </div>

            <div className='home-box-outer'>
            <div className='row'>

            <div className='home-box col-sm-4'>
                  <center>
                    <Link to='/dashboard/supervision'>
                    <div className='home-box-heading'>
                     Police Officer Supervision
                    </div>
                    <div className='row'>
                      <div className='box-inner-left col-sm-4'>
                        <img alt='' src={photo4} className='box-inner-img'></img>
                      </div>
                      <div className='box-inner-right bxr6 col-sm-8'>
                      This feature enables admin to closely monitor and oversee police officers, ensuring their presense at duty locations and adherence to protocols.
                      </div>  
                    </div>
                    </Link>
                  </center>
                </div>

            <div className='home-box col-sm-4'>
                  <center>
                    <Link to='/dashboard/post-work-notifications'>
                    <div className='home-box-heading'>
                     Post Work Notifications
                    </div>
                    <div className='row'>
                      <div className='box-inner-left col-sm-4'>
                        <img alt='' src={photo3} className='box-inner-img'></img>
                      </div>
                      <div className='box-inner-right bxr6 col-sm-8'>
                      It allows admin to post notifications about upcoming meetings, events and other work related notifications.
                      </div>  
                    </div>
                    </Link>
                  </center>
                </div>


            <div className='home-box col-sm-4'>
                <center>
                <Link to='/dashboard/sos'>
                <div className='home-box-heading'>
                 SOS
                </div>
                <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img alt='' src={customerimg} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr5 col-sm-8'>
                    It helps admins see the emergency SOS raised by Police officers from different duty locations.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

