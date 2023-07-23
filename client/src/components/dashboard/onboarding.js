import React, { useState } from 'react';
import axios from 'axios';
import id from '../../assets/logos/id.png';
import time from '../../assets/logos/time.png';
import avatar from '../../assets/logos/shg.svg';
import ranker from '../../assets/logos/rank.png';
import photo from '../../assets/logos/photo1.png';
import NavbarInside from './navbar-inside';
import '../../assets/css/home.css';

const Onboarding = () => {
  const [badgeID, setBadgeID] = useState();
  const [rank, setRank] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [profilePic, setProfilePic] = useState("");
  const [psID, setPsID] = useState();

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        console.log(reader.result);
        setProfilePic(reader.result);
    };
    reader.onerror = error =>{
        console.log("Error: ",error);
    };

  }

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      badgeID: badgeID,
      rank: rank,
      firstName: firstName,
      surname: surname,
      profilePic: profilePic,
      psID: psID,
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
      <div className='wrapper wrapper22 wrapper76' style={{ marginTop: '200px' }}>
        <h1 className='heading-settings'>Police Officer Onboarding</h1>
          <div className='settings-box'>
            <form>
              <div className='row'>
              <div className='form-group col-sm-6'>
                  <label htmlFor='badgeID'>
                    Police ID :{' '}
                  </label>
                  <span>
                    <img className='updater' src={id}></img>
                  </span>
                  <input
                    type='number'
                    name='badgeID'
                    placeholder= 'Enter Police ID'
                    value={badgeID}
                    onChange={(e) => setBadgeID(e.target.value)}
                  />
                </div>                
                <div className='form-group col-sm-6'>
                  <label htmlFor='rank'> Rank : </label>
                  <span>
                  <img className='updater' src={ranker}></img>
                  </span>
                  <input
                    type='text'
                    name='rank'
                    placeholder= 'Enter Rank of Officer'
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='firstName'> First Name : </label>
                  <span>
                    <img className='updater' src={avatar}></img>
                  </span>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='surname'> Last Name : </label>
                  <span>
                    <img className='updater' src={avatar}></img>
                  </span>
                  <input
                    type='text'
                    name='endTime'
                    placeholder='Enter Last Name'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              </div>    
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='photo'> Officer Photograph : </label>
                  <span>
                    <img className='updater updater1' src={photo}></img>
                  </span>
                  <input
                    accept='image/*'
                    type='file'
                    name='profile-pic'
                    onChange={convertToBase64}
                  />
                  <div className='img-preview'>
                  {profilePic=="" || profilePic==null?"":<img width={100} height={100} src={profilePic} />}
                  </div>
                 
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='psID'> Police Station Unique ID : </label>
                  <span>
                    <img className='updater' src={id}></img>
                  </span>
                  <input
                    type='number'
                    name='psID'
                    placeholder='Enter Police Station ID'
                    value={psID}
                    onChange={(e) => setPsID(e.target.value)}
                  />
                </div>
              </div>
        
              <br></br>
              <div className='row'>
                <center>
                <input
                  type='submit'
                  value='Onboard'
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

export default Onboarding;