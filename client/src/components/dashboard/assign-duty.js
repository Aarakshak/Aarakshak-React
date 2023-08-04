import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import avatar from '../../assets/logos/shg.svg';
import NavbarInside from './navbar-inside2';
import '../../assets/css/home.css';
import AdminIdContext from "../context/adminContext";

const AssignDuty = () => {
  const { adminId } = useContext(AdminIdContext);

  const [sessionID, setSessionID] = useState('');
  const [badgeID, setBadgeID] = useState('');
  const [sessionsList, setSessionsList] = useState([]);
  
  const url_get = `https://violet-kitten-toga.cyclic.cloud/v1/admin/1/sessions`;
  
  useEffect(() => {
    
    axios.get(url_get)
      .then(res => {
        setSessionsList(res.data);
      })
      .catch(error => {
        console.error('Error fetching Session List:', error);
      });
  }, []);

  
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      sessionId: parseInt(sessionID),
      userIds: parseInt(badgeID),
    };
    console.log(data)
    const url_post = `https://violet-kitten-toga.cyclic.cloud/v1/admin/assign-session/${adminId}`;
    
    axios.post(url_post, data)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div className='wrapper wrapper22 wrapper76' style={{ marginTop: '200px' }}>
        <h1 className='heading-settings'>Assign Duty</h1>
          <div className='settings-box'>
            <form className='form-notifs'> 
              <div className='row'>
               
                <div className='col-sm-6'>
                  <label htmlFor='location'>Session ID : </label>
                  <select value={sessionID} onChange={(e) => setSessionID(e.target.value)}>
                    <option>Select Session</option>
                    {sessionsList.map((sessionsList) => (
                        <option onClick={() => setSessionID(sessionsList.sessionID)}>{sessionsList.sessionID}</option>
                    ))}
                  </select>

                </div>
                <div className='col-sm-6'>
                  <label htmlFor='title'>
                    Police Officer ID :{' '}
                  </label>
                  <span>
                    <img alt='' className='updater updater-notif' src={avatar}></img>
                  </span>
                  <input
                    type='number'
                    name='badgeID'
                    placeholder= 'Enter Police Officer ID'
                    value={badgeID}
                    onChange={(e) => setBadgeID(e.target.value)}
                  />
                </div> 
              </div>
              <div className="row">
              <center>
                <input
                  type="submit"
                  value="Assign Duty"
                  className="btn-sbmt col-sm-6"
                  onClick={onSubmit}
                />{" "}
              </center>
              </div>
             
              <ul class='bg-bubbles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </form>
          </div>
      </div>
    </div>
  );
};

export default AssignDuty;