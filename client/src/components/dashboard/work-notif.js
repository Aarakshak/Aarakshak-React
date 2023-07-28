import React, { useState } from 'react';
import axios from 'axios';
import avatar from '../../assets/logos/shg.svg';
import avatarid from '../../assets/logos/id.png';
import timer from '../../assets/logos/time.png';
import NavbarInside from './navbar-inside2';
import '../../assets/css/home.css';

const WorkNotifs = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [choiceValue, setChoiceValue] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [choiceValue2, setChoiceValue2] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      date: date,
      time: time,
      description: description,
      choiceValue: choiceValue,
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
      <div className='wrapper wrapper22 wrapper76 wrapper77' style={{ marginTop: '200px' }}>
        <h1 className='heading-settings'>Post Work Notifications</h1>
          <div className='settings-box'>
            <form className='form-notifs'> 
              <div className='row'>
              <div className='col-sm-6'>
                  <label htmlFor='title'>
                    Notification Title :{' '}
                  </label>
                  <span>
                    <img alt='' className='updater updater-notif' src={avatar}></img>
                  </span>
                  <input
                    type='number'
                    name='title'
                    placeholder= 'Enter Title for Notification'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>                
                <div className='col-sm-6'>
                  <label htmlFor='location'>Type : </label>
                    <select value={choiceValue} onChange={(e) => setChoiceValue(e.target.value)}>
                        <option onClick={() => setChoiceValue("1")}> Meeting </option>
                        <option onClick={() => setChoiceValue("2")}> Duty </option>
                        <option onClick={() => setChoiceValue("3")}> Local Events </option>
                        <option onClick={() => setChoiceValue("4")}> Emergency </option>
                        <option onClick={() => setChoiceValue("5")}> Others </option>
                    </select>
                </div>
              </div>

              <div className='row'>
              <div className='col-sm-6'>
                  <label htmlFor='location'>Post to : </label>
                    <select value={choiceValue2} onChange={(e) => setChoiceValue2(e.target.value)}>
                        <option onClick={() => setChoiceValue2("1")}> Police Officer </option>
                        <option onClick={() => setChoiceValue2("2")}> Police Station </option>
                    </select>
                </div>
                <div className='col-sm-6'>
                    <label htmlFor='title'>
                      Unique ID :{' '}
                    </label>
                    <span>
                      <img alt='' className='updater updater-notif' src={avatarid}></img>
                    </span>
                    <input
                      type='number'
                      name='uniqueid'
                      placeholder= 'Enter Unique ID'
                      value={uniqueId}
                      onChange={(e) => setUniqueId(e.target.value)}
                    />
                  </div>                
              </div>

              <div className='row'>
                <div className='col-sm-6'>
                  <label htmlFor='date'> Date of Event : </label>
                  <input
                    type='date'
                    name='date'
                    placeholder='Enter Date of Event'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className='col-sm-6'>
                  <label htmlFor='time'> Time of Event : </label>
                  <span>
                      <img alt='' className='updater updater-notif' src={timer}></img>
                  </span>
                  <input
                    type='time'
                    name='time'
                    placeholder='Enter Time of Event'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>    
              <div className='row'>
                <div className='col-sm-12'>
                <label htmlFor='time'> Description : </label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
              </div>
        
              <br></br>
              <div className='row'>
                <center>
                <input
                  type='submit'
                  value='Post'
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