
import React, { useEffect } from 'react';
import '../../assets/css/about.css';
import logoabt1 from '../../assets/images/location.gif';
import logoabt2 from '../../assets/images/key.gif';
import logoabt3 from '../../assets/images/lock.gif';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <div className='hello-about' id='about'></div>
      <div className='about-main'>
        <div className='about-inner row'>
          <div className='abouter about-1 col-sm-4' data-aos='zoom-in-right'>
            <div className='about-text'>
              <h2>Real-time location tracking <img src={logoabt1} className='about-img'></img> </h2>
              <p>
              Aarakshak employs real-time location tracking for police 
              officers stationed at various locations, enabling admins 
              to monitor officers on duty and ensuring prompt responses 
              to emergencies.
              </p>
            </div>
          </div>

          <div className='abouter about-2 col-sm-4' data-aos='zoom-in-down'>
            <div className='about-text'>
              <h2>Authentication and access control <img src={logoabt2} className='about-img'></img> </h2>
              <p className='p1'>
              The NFC system mandates the officers to 
              authenticate themselves before accessing 
              sensitive areas or data. This ensures that 
              only authorized personnels have access to 
              specific resources.
              </p>
            </div>
          </div>

          <div className='abouter about-3 col-sm-4' data-aos='zoom-in-left'>
            <div className='about-text'>
              <h2>Data <br></br>encryption <img src={logoabt3} className='about-img'></img> </h2>
              <p>
              All admin-officer communications are 
              encrypted to safeguard against unauthorized 
              access. The system ensures that sensitive 
              data stored about each officer remains 
              confidential and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

