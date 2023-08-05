
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from "../../assets/images/uncle1.jfif";
import image2 from "../../assets/images/uncle2.jfif";
import image3 from "../../assets/images/uncle3.jfif";
import '../../assets/css/testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <div className='hal row'>
        <div className='col-sm-9 l-sec'>
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
                  “Aarakshak has completely changed how we handle our police personnel on ground duty every day. It helps us track and authenticate our officers in real-time, making sure they are safe, and serving the public effectively. It's simple to use and reliable, making our daily operations more efficient and secure. We appreciate the positive impact Aarakshak has had on our service making it even better.”      </p>         </div>
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
                  "Our experience with Aarakshak has been remarkable. This solution is a game-changer, enabling real-time monitoring of our police personnel on ground duty. The invaluable insights gained have significantly improved our emergency response, empowering us to act swiftly and effectively. Aarakshak has positively impacted our operations and the safety of our officers."                  </p>
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
                  "We have used Aarakshak for months and are highly impressed with its performance. It enables real-time monitoring of police personnel on ground duty, providing valuable insights for informed decision-making and optimized resource allocation. Our emergency response has improved, making our community safer and operations more efficient."         </p>       </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className='col-sm-2'>
          <div className='test-heading2-testi'>
            <h1 style={{fontSize: '3.5em'}}> प्रशंसापत्र / </h1>
          </div>
          <div className='test-heading-testi'>
            <h1 style={{fontSize: '3.5em'}}> TESTIMONIALS. </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

