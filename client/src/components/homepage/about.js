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
              Aarakshak would track the location of police 
              officers in real-time, allowing supervisors 
              to monitor their whereabouts and respond quickly 
              to emergencies.
              </p>
            </div>
          </div>

          <div className='abouter about-2 col-sm-4' data-aos='zoom-in-down'>
            <div className='about-text'>
              <h2>Authentication and access control <img src={logoabt2} className='about-img'></img> </h2>
              <p className='p1'>
              The NFC solution ensures that only 
              authorized personnel have access to sensitive 
              areas or data by requiring officers to authenticate 
              themselves before accessing certain resources.
              </p>
            </div>
          </div>

          <div className='abouter about-3 col-sm-4' data-aos='zoom-in-left'>
            <div className='about-text'>
              <h2>Data <br></br>encryption <img src={logoabt3} className='about-img'></img> </h2>
              <p>
              All communications between the officer 
              and the supervisor would be encrypted to protect 
              against unauthorized access. The sensitive data stored about 
              every officer is encrypted. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
