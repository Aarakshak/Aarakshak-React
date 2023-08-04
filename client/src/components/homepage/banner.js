import '../../assets/css/navbar.css';
import BannerPhoto from '../../assets/images/banner-main-img.png';

const Banner = () => {
  return (
    <div className='banner-main' id='home'>
      <div className='banner-main-inner'>
        <div className='banner-left'>
          <div className='main-heading'>
          <span className="hellospanner">Securely</span> tracking every move with <span className="hellospanner">NFC-based</span> police personnel monitoring
          </div>
          <div className='sub-heading'>
          Aarakshak is a Near Field Communication based solution, 
          which can be used for securely tracking and authenticating 
          police personnel on ground duty in real time.
          </div>

          <div className='button-banner-cont'>
            <a>
              <button className='button-banner'>
                Read More &nbsp;<i class='fa-solid fa-circle-chevron-down'></i>
              </button>
            </a>
            <a>
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