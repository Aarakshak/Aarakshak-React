import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../assets/css/sos.css";
import NavbarInside from './navbar-inside';
import SOSCard from "./SOS-card";

const SOS = () => {
  const [sosData, setSOSData] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => {
        setSOSData(response.data);
      })
      .catch(error => {
        console.error('Error fetching SOS data:', error);
      });
  }, []);

  return (
    <div className='home-outer-sos'>
      <div>
        <NavbarInside />
      </div>
      <center><h1 className="sos-heading">SOS Received</h1></center>
      <div className="cards">
        {sosData.map((sosItem, index) => (
          <SOSCard
            key={index}
            policeName={sosItem.policeName}
            badgeId={sosItem.badgeId}
            time={sosItem.time}
            location={sosItem.location}
            description={sosItem.description}
            respond={sosItem.respond}
          />
        ))}
      </div>
    </div>
  )
}

export default SOS;
