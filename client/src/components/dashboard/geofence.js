import '../../assets/css/navbar.css';
import AdminIdContext from "../context/adminContext";
import AdminNameContext from '../context/AdminNameContext';
import React, { useState, useEffect, useContext } from 'react';
import '../../assets/css/modal.css';
import NavbarInside2 from './navbar-inside2';

const Geofence = () => {

  return (
        <div className='home-outer'>
            <div>
                <NavbarInside2 />
            </div>
            <div>

            </div>
        </div>
  );
};

export default Geofence;
