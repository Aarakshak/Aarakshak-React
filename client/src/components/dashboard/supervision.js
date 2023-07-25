import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../assets/css/sos.css";
import NavbarInside from './navbar-inside2';
import SupervisionCard from "./supervision-card";

const Supervision = () => {
  const [supData, setSupData] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => {
        setSupData(response.data);
      })
      .catch(error => {
        console.error('Error fetching Supervision data:', error);
      });
  }, []);

  return (
    <div className='home-outer-sos'>
      <div>
        <NavbarInside />
      </div>
      <center><h1 className="sos-heading">POLICE SUPERVISION</h1></center>
      <div className="cards">
        {supData.map((supItem, index) => (
          <SupervisionCard
            key={index}
            policeName={supItem.policeName}
            badgeId={supItem.badgeId}
            sessionID={supItem.sessionID}
            sessionDate={supItem.sessionDate}
            startTime={supItem.startTime}
            endTime={supItem.endTime}
            sessionLocation={supItem.sessionLocation}
          />
        ))}
      </div>
    </div>
  )
}

export default Supervision;
