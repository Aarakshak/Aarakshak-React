
import '../../assets/css/navbar.css';
import BannerPhoto from '../../assets/images/banner-main-img.png';

const Banner = () => {
  let URL = 'http://localhost:3000';
  return (
    <div className='banner-main' id='home'>
      <div className='banner-main-inner'>
        <div className='banner-left'>
          <div className='main-heading'>
          <span className="hellospanner">Securely</span> tracking every move with <span className="hellospanner">NFC-based</span> police personnel monitoring
          </div>
          <div className='sub-heading'>
          Aarakshak is an NFC-based solution for securely 
          tracking and authenticating police personnel in 
          real time. It simplifies officer onboarding, duty 
          assignment, and enables effective responses to emergencies.
          </div>

          <div className='button-banner-cont'>
            <a href={`${URL}/#about`}>
              <button className='button-banner'>
                Read More &nbsp;<i class='fa-solid fa-circle-chevron-down'></i>
              </button>
            </a>
            <a href={`${URL}/#contact`}>
              <button className='button-banner'>
                Contact Us &nbsp;<i class='fa-solid fa-message'></i>
              </button>
            </a>
          </div>
        </div>
        <div className='banner-right'>
          <img alt='' className='banner-photo' src={BannerPhoto} style={{borderRadius:100}}></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
