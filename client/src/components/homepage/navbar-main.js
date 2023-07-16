import '../../assets/css/navbar.css';
import LogoMain from '../../assets/logos/logo-main.png';
import { Link } from 'react-router-dom';
// import '../../assets/css/modal.css';
// import Login from '../auth/Login';
// import Register from '../auth/Register';

const NavbarMain = () => {
  let URL = 'http://localhost:3000';
  return (
    <>
      <nav className='nav'>
        <div className='nav-header'>
          <div className='nav-title'>
            <span className='nav-title-inner'>
            AaarHak
            </span>
            {/* <span className=''>
              <img src={LogoMain} className='brand-name-logo'></img>
            </span> */}
          </div>
        </div>
        <div className='nav-btn'>
          <label htmlFor='nav-check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <input type='checkbox' id='nav-check'></input>
        <div className='nav-links'>
          <a href={`${URL}/#home`} className='jhk'>
            HOME
          </a>
          <a href={`${URL}/#about`}>ABOUT</a>
          <a href={`${URL}/#contact`}>CONTACT</a>
          <a href={`${URL}/#login`} className='loginbtn'>
            LOGIN
          </a>
          {/* <Login /> */}
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
