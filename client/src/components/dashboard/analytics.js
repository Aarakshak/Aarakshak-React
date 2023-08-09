import React, { useEffect, useState, useContext } from "react";
import "../../assets/css/analytics.css";
import NavbarInside from "./navbar-inside2";
import PerformanceCard from "./performanceCard";
import PerformanceCard2 from "./performanceCardS";
import AdminIdContext from "../context/adminContext";
import VictoryHistogramChart from "./HistogramChart"; 
import axios from "axios";

function Analytics() {
  const { adminId } = useContext(AdminIdContext);
  const [duties, setDuties] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [issues, setIssues] = useState(0);
  const [bestPerformers, setBestPerformers] = useState([]);
  const [leastPerformers, setLeastPerformers] = useState([]);
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const url_get = `https://violet-kitten-toga.cyclic.cloud/v1/admin/statistics/${adminId}`;
  
  useEffect(() => {
    axios
      .get(url_get)
      .then((response) => {
        console.log("Received data:", response.data);
        setDuties(response.data.dutiesNow);
        setSessions(response.data.ongoingSessions);
        setIssues(response.data.issueRaisedToday);
        setBestPerformers(response.data.usersSortedByAttendanceRatio);
        setLeastPerformers(
          response.data.usersSortedByAttendanceRatio.slice(-5)
        );

        const loadArray = response.data.load;
        const loadLabels = loadArray
          .slice(0, 18)
          .map((entry, index) => `${index + 1}`); // Modify labels to start from 1
        const loadValues = loadArray
          .slice(0, 18)
          .map((entry) => entry.loadFactor);
          setLabels(loadLabels);
          setValues(loadValues);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  

  return (
    <div className="analytics-outer">
      <NavbarInside />
      <div className="analytics">
        <div className="analytics-cards-row">
          <div className="analytics-base-data row">
            <p className="p1 col-sm-3">Number of officers on duty: {duties}</p>
            <p className="p2 col-sm-3">Number of active sessions: {sessions}</p>
            <p className="p1 col-sm-3">
              New issues in past 24 hrs: {issues.length}
            </p>
          </div>
          <div className="analytics-stats">
            <div className="best-performers col-sm-6">
              <h3>Most Punctual Performers</h3>
              {bestPerformers.slice(5, 10).map((user) => (
                <PerformanceCard
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
            <div className="least-performers col-sm-6">
              <h3>Need Improvement</h3>
              {leastPerformers.map((user) => (
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
          <div className="histogram-chart col-sm-12">
            <h1 style={{marginTop:'50px', fontWeight:'bold'}}>Load Factor Histogram</h1>
            <VictoryHistogramChart data={{ labels, values }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
