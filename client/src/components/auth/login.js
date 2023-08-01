import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/modal.css';
import '../../assets/css/form.css';
import Loader from '../../assets/images/Loader123.gif';
import AdminIdContext from '../context/adminContext';

const Login = () => {
  const { setAdminId } = useContext(AdminIdContext);
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const apiUrl = 'http://localhost:8000/v1/admin/login';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailId, password }),
      });

      setIsLoading(false);

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Please check your credentials.');
        return;
      }

      const data = await response.json();
      console.log(data.message)
      setAdminId(data.adminID);
    } catch (error) {
      setError('An error occurred during login. Please try again later.');
      setIsLoading(false);
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
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                required
                value={emailId}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="string"
                name="password"
                autoComplete="off"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="btn-sbmt-cont"><Link to="/dashboard/home">
              <button type="submit" value="Login" className="btn-sbmt" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <img src={Loader} className="loginbtn-loader" alt="Loader" /> Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </button></Link>
            </div>
          </form>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
