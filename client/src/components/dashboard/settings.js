import React, { useState } from 'react';
import time from '../../assets/logos/time.png';
import skilllogo from '../../assets/logos/skill.svg';
import shglogo from '../../assets/logos/shg.svg';
import locationping from '../../assets/logos/locationping.png';
import earth from '../../assets/logos/earth-globe.png';
import NavbarInside from './navbar-inside';
import '../../assets/css/home.css';

const Settings = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [location, setLocation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');


  const onSubmit = (e) => {

  }

  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div className='wrapper wrapper22' style={{ marginTop: '200px' }}>
        <h1 className='heading-settings'>Assign Duty</h1>
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
                    type='text'
                    name='employeeId'
                    placeholder={
                      employeeId === '' ? 'Enter police id' : employeeId
                    }
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
                    placeholder={
                      location === '' ? 'Enter duty Location' : location
                    }
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
                    placeholder={
                      startTime === '' ? 'Enter duty start time' : startTime
                    }
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
                    placeholder={endTime === '' ? 'Enter duty end time' : endTime}
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
                    type='text'
                    name='longitude'
                    placeholder={
                      longitude === '' ? 'Enter longitude' : longitude
                    }
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
                    type='text'
                    name='latitude'
                    placeholder={latitude === '' ? 'Enter latitude' : latitude}
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

export default Settings;