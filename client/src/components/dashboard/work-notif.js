import React, { useState } from 'react';
import axios from 'axios';
import time from '../../assets/logos/time.png';
import skilllogo from '../../assets/logos/skill.svg';
import shglogo from '../../assets/logos/shg.svg';
import locationping from '../../assets/logos/locationping.png';
import earth from '../../assets/logos/earth-globe.png';
import NavbarInside from './navbar-inside';
import '../../assets/css/home.css';

const WorkNotifs = () => {
  const [employeeId, setEmployeeId] = useState();
  const [location, setLocation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();


  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      employeeId: employeeId,
      location: location,
      startTime: startTime,
      endTime: endTime,
      longitude: longitude,
      latitude: latitude,
    };

    axios.post('', data)
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
      <div className='wrapper wrapper22' style={{ marginTop: '200px' }}>
        <h1 className='heading-settings'>Post Work Notifications</h1>
          <div className='settings-box'>
            <form>
              <div className='row'>
              <div className='form-group col-sm-6'>
                  <label htmlFor='employeeId'>
                    Employee ID :{' '}
                  </label>
                  <span>
                    <img className='updater' src={shglogo}></img>
                  </span>
                  <input
                    type='number'
                    name='employeeId'
                    placeholder= 'Enter police id'
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                  />
                </div>                
                <div className='form-group col-sm-6'>
                  <label htmlFor='location'>Location : </label>
                  <span>
                  <img className='updater' src={locationping}></img>
                  </span>
                  <input
                    type='text'
                    name='location'
                    placeholder= 'Enter duty Location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='startTime'>Duty Start Time : </label>
                  <span>
                    <img className='updater' src={time}></img>
                  </span>
                  <input
                    type='text'
                    name='startTime'
                    placeholder='Enter duty start time'
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='endTime'>Duty End Time : </label>
                  <span>
                    <img className='updater' src={time}></img>
                  </span>
                  <input
                    type='text'
                    name='endTime'
                    placeholder='Enter duty end time'
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </div>    
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='longitude'>Longitude : </label>
                  <span>
                    <img className='updater' src={earth}></img>
                  </span>
                  <input
                    type='number'
                    name='longitude'
                    placeholder= 'Enter longitude' 
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='latitude'>Latitude : </label>
                  <span>
                    <img className='updater' src={earth}></img>
                  </span>
                  <input
                    type='number'
                    name='latitude'
                    placeholder='Enter latitude'
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                  />
                </div>
              </div>
        
              <br></br>
              <div className='row'>
                <center>
                <input
                  type='submit'
                  value='Set Duty'
                  className='btn-sbmt col-sm-6'
                  onClick={onSubmit}
                /> </center>
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

export default WorkNotifs;