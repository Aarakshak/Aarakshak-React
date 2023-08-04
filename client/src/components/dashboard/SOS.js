import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "../../assets/css/sos.css";
import NavbarInside from './navbar-inside2';
import SOSCard from "./SOS-card";
import AdminIdContext from "../context/adminContext";

const SOS = () => {
  const { adminId } = useContext(AdminIdContext);
  const [sosData, setSOSData] = useState([]);
  const url = `https://violet-kitten-toga.cyclic.cloud/v1/admin/sos/${adminId}`;
  
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setSOSData(res.data);
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
            policeName={sosItem.badgeID === 12345 ? "Anonymous" : sosItem.issue.firstName} 
            badgeId={sosItem.issue.badgeID} 
            time={new Date(sosItem.issue.raised).toLocaleDateString()} 
            location={sosItem.issue.location} 
            description={sosItem.issue.issueText} 
            respond={sosItem.issue.resolved} 
          />
        ))}
      </div>
    </div>
  )
}

export default SOS;
