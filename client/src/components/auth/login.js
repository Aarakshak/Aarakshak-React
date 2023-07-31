import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import '../../assets/css/modal.css';
import '../../assets/css/form.css';
import Loader from '../../assets/images/Loader123.gif';
import AdminIdContext from '../context/adminContext';

const Login = () => {
  const { setAdminId } = useContext(AdminIdContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = 'http://localhost:5000/v1/admin/login';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.error('Login failed. Please check your credentials.');
        return;
      }
      const data = await response.json();
      setAdminId(data.adminId);
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <>
      <div id="login" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">
            Close
          </a>
          <h1>LOGIN</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="btn-sbmt-cont">
              <button type="submit" value="Login" className="btn-sbmt">
                Login <img src={Loader} className="loginbtn-loader" alt="Loader" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

 
export default Login;

