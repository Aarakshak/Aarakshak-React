import React from 'react'
import { useEffect } from "react";
import "../../assets/css/testimonials.css";
import image1 from "../../assets/images/uncle1.jfif";
import image2 from "../../assets/images/uncle2.jfif";
import image3 from "../../assets/images/uncle3.jfif";
import "../../assets/css/testimonials.css";
import testimonial from '../../assets/images/testimoniall2.png';
import AOS from "aos";

function Testimonials() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>
        <center>
        <div className="testimonial-section">
        <div className='hal row'>
          <div className='col-sm-10'>
            <div className='row'>
            <div className='col-sm-4'>
            <div className="testimonial-img" data-aos="zoom-in-right">       
                <div className="testi-img" style={{display:'flex',flexDirection:'column'}}>
                  <div>
                      <center>
                          <div className='women-cont'>
                              <img src={image1} alt="img" className="women" />
                              <p className="paraaa"><b>RAMESH KUMAR</b></p>
                              <div>
                                  <img src={testimonial} alt="img" className="women-below" />
                              </div>
                          </div>
                      </center>
                  </div>
                  <p className="paraa" style={{textAlign:""}}>I was initially skeptical about implementing Aarakshak, but after implementing this in my district and seeing results, I am impressed. It helps us securely track and authenticate our officers in real time, ensuring their accountability. This has significantly improved our operations and efficiency while maintaing law & order in our region.</p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
            <div className="testimonial-img" data-aos="zoom-in-down">       
                <div className="testi-img" style={{display:'flex',flexDirection:'column'}}>
                  <div>
                      <center>
                          <div className='women-cont'>
                              <img src={image2} alt="img" className="women" />
                              <p className="paraaa"><b>BHARAT MISHRA</b></p>
                              <div>
                                  <img src={testimonial} alt="img" className="women-below" />
                              </div>
                          </div>
                      </center>
                  </div>
                  <p className="paraa" style={{textAlign:""}}>Aarakshak has revolutionized the way we are managing our police personnel on ground duty daily. This Near Field Communication based solution has real-time tracking and authentication capabilities have allowed us to ensure the safety of our officers and the public they serve. The solution is really very easy to use and reliable.</p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className="testimonial-img" data-aos="zoom-in-left">       
                <div className="testi-img" style={{display:'flex',flexDirection:'column'}}>
                  <div>
                      <center>
                          <div className='women-cont'>
                              <img src={image3} alt="img" className="women" />
                              <p className="paraaa"><b>HARSH PANDEY</b></p>
                              <div>
                                  <img src={testimonial} alt="img" className="women-below" />
                              </div>
                          </div>
                      </center>
                  </div>
                  <p className="paraa" style={{textAlign:""}}>We have been using Aarakshak for several months now and area extremely impressed with its performance. The solution has allowed us to monitor the location and status of our police personnel on ground duty in real time, providing us with valuable insights and improving our ability to respond to emergencies.</p>
                </div>
              </div>
            </div>
            </div>
            </div>
          <div className='col-sm-2'>
                <div className='test-heading2'>
                    <h1> प्रशंसापत्र / </h1>
                </div>
                <div className='test-heading'>
                    <h1> TESTIMONIALS. </h1>
                </div>
          </div>
        </div>
        </div>
        </center>
    </div>
  )
}

export default Testimonials