import React, { useState, useContext, useEffect } from 'react';
import '../../assets/css/modal.css';
import '../../assets/css/form.css';
import Loader from '../../assets/images/Loader123.gif';

// Testing
const Login = () => {

  return ( 
    <>
    <div id="login" className="modal-window">
      <div>
        <a href="#" title="Close" class="modal-close">Close</a>
          <h1>LOGIN</h1>
          <form>
          <div className='form-group'>
            
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              name='username'
              value="username"
              autoComplete='off'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value="password"
              autoComplete='off'
              required
            />
          </div>
          <div className='btn-sbmt-cont'>
            <button type='submit' value='Login' className='btn-sbmt'>Login <img src={Loader} className='loginbtn-loader'></img></button>
          </div>
          </form>
      </div>
    </div>
    </>
   );
}
 
export default Login;

