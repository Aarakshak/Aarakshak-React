import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/modal.css';
import '../../assets/css/form.css';
import ShowMap from './map';

const Login = () => {

  return (
    <>
      <div id="mapModal" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">
            X
          </a>
          <h1>LOGIN</h1>
          <div>
            <ShowMap latitude={latitude} longitude={longitude} />
          </div>
          <p>
            {error && <div className="error-message">{error}</div>}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
