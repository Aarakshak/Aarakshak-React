import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminIdContext from './components/context/adminContext';
import MainHomepage from './components/homepage/main-homepage.js';
import Home from './components/dashboard/home.js';
import CreateSession from './components/dashboard/create-session.js';
import AssignDuty from './components/dashboard/assign-duty.js';
import SOS from './components/dashboard/SOS.js';
import Onboarding from './components/dashboard/onboarding.js';
import WorkNotifs from './components/dashboard/work-notif.js';
import Supervision from './components/dashboard/supervision.js';
import './App.css';
import AdminNameContext from './components/context/AdminNameContext';

function App() {
  const [adminId, setAdminId] = useState(null);
  const [firstName, setAdminName] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <AdminIdContext.Provider value={{ adminId, setAdminId }}>
        <AdminNameContext.Provider value={{ firstName, setAdminName }}>
          <main>
            <Routes path="/">
              <Route index element={<MainHomepage />} />
              <Route path="dashboard">
                <Route path="home" element={<Home />} />
                <Route path="assign-duty" element={<AssignDuty />} />
                <Route path="create-session" element={<CreateSession />} />
                <Route path="sos" element={<SOS />} />
                <Route path="onboarding" element={<Onboarding />} />
                <Route path="post-work-notifications" element={<WorkNotifs />} />
                <Route path="supervision" element={<Supervision />} />
              </Route>
            </Routes>
          </main>
          </AdminNameContext.Provider>
        </AdminIdContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
