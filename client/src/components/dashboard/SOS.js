import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../assets/css/sos.css";
import NavbarInside from './navbar-inside2';
import SOSCard from "./SOS-card";
import AdminIdContext from "../context/adminContext";

const SOS = () => {
  const { adminId } = useContext(AdminIdContext);
  const [sosData, setSOSData] = useState([]);
  const url = `http://localhost:8000/v1/admin/add-session/${adminId}`;
  
  useEffect(() => {
    axios.get(url)
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
            policeName={sosItem.firstName} //
            badgeId={sosItem.badgeId} //
            time={sosItem.raised} //
            location={sosItem.location}
            description={sosItem.issueText} //
            respond={sosItem.resolved} //
          />
        ))}
      </div>
    </div>
  )
}

export default SOS;
