import React, { useEffect, useState, useContext } from 'react';
import '../../assets/css/analytics.css';
import NavbarInside from './navbar-inside2';
import PerformanceCard from './performanceCard';
import PerformanceCard2 from './performanceCardS';
import AdminIdContext from "../context/adminContext";
import axios from 'axios';

function Analytics() {
    const { adminId } = useContext(AdminIdContext);
    const [duties, setDuties] = useState(0);
    const [sessions, setSessions] = useState(0);
    const [bestPerformers, setBestPerformers] = useState([]);
    const [leastPerformers, setLeastPerformers] = useState([]);
    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);
    const url_get = `https://violet-kitten-toga.cyclic.cloud/v1/admin/statistics/${adminId}`;
    useEffect(() => {
        axios.get(url_get)
          .then(response => {
            console.log('Received data:', response.data);
            setDuties(response.data.dutiesNow);
            setSessions(response.data.ongoingSessions);
            setBestPerformers(response.data.usersSortedByTotalHours);
            setLeastPerformers(response.data.usersSortedByAttendanceRatio.slice(-5));
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
    
  return (
    <div className='analytics-outer'>
      <NavbarInside />
      <div className='analytics'>
        <div className='analytics-cards-row'>
          <div className='analytics-base-data row'>
          <p className='p1 col-sm-3'>
              Number of officers on duty: {duties.length}
            </p>
            <p className='p2 col-sm-3'>
              Number of active sessions: {sessions.length}
            </p>
            <p className='p1 col-sm-3'>
              New issues in past 24 hrs: 6
            </p>
          </div>
          <div className='analytics-stats'>
            <div className='best-performers col-sm-6'>
              <h3>Best Performers</h3>
              {bestPerformers.slice(5, 10).map(user => (
                <PerformanceCard
                  key={user.badgeID}
                  badge={user.badgeID}
                  position={user.rank}
                  name={user.firstName}
                  time={user.totalHoursOnDuty}
                />
              ))}
              <div></div>
            </div>
            <div className='least-performers col-sm-6'>
              <h3>Least Performers</h3>
              {leastPerformers.map(user => (
                <PerformanceCard2
                  key={user.badgeID}
                  badge={user.badgeID}
                  position={user.rank}
                  name={user.firstName}
                  totalAttended={user.totalAttended}
                  totalSessions={user.totalSessions}
                />
              ))}
              <div></div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Analytics;
