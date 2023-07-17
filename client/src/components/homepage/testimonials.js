import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from "../../assets/images/uncle1.jfif";
import image2 from "../../assets/images/uncle2.jfif";
import image3 from "../../assets/images/uncle3.jfif";
import testimonial from '../../assets/images/testimoniall2.png';
import '../../assets/css/testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <div className='hal row'>
        <div className='col-sm-10 l-sec'>
          <Carousel
            showStatus={false}
            infiniteLoop={true}
            centerMode={true}
            autoPlay={true}
            interval={3000}
            showThumbs={false}
            centerSlidePercentage={33.33}
            dynamicHeight={false}
            emulateTouch={true}
            swipeable={true}
            stopOnHover={true}
            transitionTime={500}
          >
            <div className='col-sm-3'>
              <div className="testimonial-img">
                <div className="testi-img">
                  <div className='women-cont'>
                    <img src={image1} alt="img" className="women" style={{height:'15vh', width:'15vh'}} />
                    <h2 className="paraaa"><>RAMESH KUMAR</></h2>
                  </div>
                  <p className="paraa">
                    I was initially skeptical about implementing Aarakshak, but after implementing this in my district and seeing results, I am impressed. It helps us securely track and authenticate our officers in real time, ensuring their accountability. This has significantly improved our operations and efficiency while maintaining law & order in our region.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className="testimonial-img">
                <div className="testi-img">
                  <div className='women-cont'>
                    <img src={image2} alt="img" className="women" style={{height:'15vh', width:'15vh'}} />
                    <h2 className="paraaa"><>BHARAT MISHRA</></h2>
                  </div>
                  <p className="paraa">
                    Aarakshak has revolutionized the way we are managing our police personnel on ground duty daily. This Near Field Communication based solution's real-time tracking and authentication capabilities have allowed us to ensure the safety of our officers and the public they serve. The solution is really very easy to use and reliable.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className="testimonial-img">
                <div className="testi-img">
                  <div className='women-cont'>
                    <img src={image3} alt="img" className="women" style={{height:'15vh', width:'15vh'}} />
                    <h2 className="paraaa"><>HARSH PANDEY</></h2>
                  </div>
                  <p className="paraa">
                    We have been using Aarakshak for several months now and are extremely impressed with its performance. The solution has allowed us to monitor the location and status of our police personnel on ground duty in real time, providing us with valuable insights and improving our ability to respond to emergencies.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className='col-sm-2'>
          <div className='test-heading2-testi'>
            <h1> प्रशंसापत्र / </h1>
          </div>
          <div className='test-heading-testi'>
            <h1> TESTIMONIALS. </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
