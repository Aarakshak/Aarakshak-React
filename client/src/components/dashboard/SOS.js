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
        console.log(res.data)
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
          sosItem.issue.resolved ? <></> :
          <SOSCard
            key={index}
            policeName={sosItem.issue.firstName?sosItem.issue.firstName:'John'}
            issueID={sosItem.issue.issueID}
            badgeID={sosItem.issue.badgeID} 
            time={new Date(sosItem.issue.raised).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })} 
            location={sosItem.issue.location} 
            latitude={sosItem.issue.latitude}
            longitude={sosItem.issue.longitude}
            description={sosItem.issue.issueText} 
            respond={sosItem.issue.resolved} 
          />
        ))}
      </div>
    </div>
  )
}

export default SOS;
