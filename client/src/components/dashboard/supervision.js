import React, { useState, useEffect, useContext } from 'react';
import AdminIdContext from "../context/adminContext";
import axios from 'axios';
import "../../assets/css/sos.css";
import NavbarInside from './navbar-inside2';
import SupervisionCard from "./supervision-card";


  const Supervision = () => {
    const { adminId } = useContext(AdminIdContext);
    const [supData, setSupData] = useState([]);
  
    const url_get = `https://violet-kitten-toga.cyclic.cloud/v1/admin/surveillance/${adminId}`;
    useEffect(() => {
      axios.get(url_get)
        .then(response => {
          setSupData(response.data.ans);
          console.log(response.data);
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
        {Array.isArray(supData) && supData.length > 0 ? (
          supData.map((supItem, index) => (
            <SupervisionCard
              key={index}
              policeName={supItem.firstName}
              badgeId={supItem.badgeID}
              sessionDate={supItem.sessionDate}
              startTime={supItem.startTime}
              endTime={supItem.endTime}
              sessionLocation={supItem.sessionLocation}
              profilePic={supItem.profilePic}
              latitude={supItem.latitude}
              longitude={supItem.longitude}
            />
          ))
        ) : (
          <p>No supervision data available.</p>
        )}
      </div>
      
    </div>
  )
}

export default Supervision;
