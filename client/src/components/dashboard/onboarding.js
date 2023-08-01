import React, { useState, useContext } from 'react';
import axios from 'axios';
import id from '../../assets/logos/id.png';
import avatar from '../../assets/logos/shg.svg';
import ranker from '../../assets/logos/rank.png';
import photo from '../../assets/logos/photo1.png';
import locationping from "../../assets/logos/locationping.png";
import genderlogo from "../../assets/logos/genderlogo.png";
import emaillogo from "../../assets/logos/emailogo.png";
import passwordlogo from "../../assets/logos/passwordlogo.png";
import phonelogo from "../../assets/logos/phonelogo.png";

import NavbarInside from './navbar-inside2';
import AdminIdContext from "../context/adminContext";
import '../../assets/css/home.css';

const Onboarding = () => {
  const { adminId } = useContext(AdminIdContext);
  const [badgeID, setBadgeID] = useState(); 
  const [firstName, setFirstName] = useState(''); 
  const [surname, setSurname] = useState(''); 
  const [password, setPassword] = useState('');
  const [rank, setRank] = useState(''); 
  const [profilePic, setProfilePic] = useState(''); 
  const [location, setLocation] = useState(''); 
  const [zone, setZone] = useState(''); 
  const [subdivision, setSubdivision] = useState(''); 
  const [psID, setPsID] = useState(); 
  const [phoneNo, setPhoneNo] = useState(); 
  const [email, setEmail] = useState(''); 
  const [gender, setGender] = useState(''); 

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
      badgeID: parseInt(badgeID),
      firstName: firstName,
      surname: surname,
      password: password,
      rank: rank,
      profilePic: profilePic,
      location:location,
      zone: zone,
      sub_division:subdivision,
      police_station:parseInt(psID),
      phoneNo: phoneNo,
      emailId: email,
      gender: gender
    };
    console.log(data)
    const url = `http://localhost:8000/v1/admin/add-user/${adminId}`;
    axios.post(url, data)
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
      <div className='wrapper wrapper22 wrapper76' style={{ marginTop: '400px' }}>
        <h1 className='heading-settings'>Police Officer Onboarding</h1>
          <div className='settings-box'>
            <form>
              <div className='row'>
              <div className='form-group col-sm-6'>
                  <label htmlFor='badgeID'>
                    Badge ID :{' '}
                  </label>
                  <span>
                    <img className='updater' src={id}></img>
                  </span>
                  <input
                    type='number'
                    name='badgeID'
                    placeholder= 'Enter Badge ID'
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
                    type='string'
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
                    type='string'
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
                    type='string'
                    name='endTime'
                    placeholder='Enter Last Name'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='email'> Email : </label>
                  <span>
                    <img className='updater' src={emaillogo}></img>
                  </span>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='phoneNo'> Phone No : </label>
                  <span>
                    <img className='updater' src={phonelogo}></img>
                  </span>
                  <input
                    type='string'
                    name='PhoneNo'
                    placeholder='Enter Phone No'
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='zone'> Zone : </label>
                  <span>
                    <img className='updater' src={locationping}></img>
                  </span>
                  <input
                    type='string'
                    name='zone'
                    placeholder='Enter zone'
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='location'> Location : </label>
                  <span>
                    <img className='updater' src={locationping}></img>
                  </span>
                  <input
                    type='string'
                    name='location'
                    placeholder='Enter Location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>  
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='gender'> Gender : </label>
                  <span>
                    <img className='updater' src={genderlogo}></img>
                  </span>
                  <input
                    type='string'
                    name='gender'
                    placeholder='Enter gender'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='location'> Sub Division : </label>
                  <span>
                    <img className='updater' src={locationping}></img>
                  </span>
                  <input
                    type='string'
                    name='sub_division'
                    placeholder='Enter Subdivision'
                    value={subdivision}
                    onChange={(e) => setSubdivision(e.target.value)}
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
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='password'> Password : </label>
                  <span>
                    <img className='updater' src={passwordlogo}></img>
                  </span>
                  <input
                    type='string'
                    name='psID'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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