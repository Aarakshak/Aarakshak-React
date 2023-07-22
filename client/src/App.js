import { BrowserRouter, Routes, Route } from "react-router-dom";


import MainHomepage from "./components/homepage/main-homepage.js";
import Home from './components/dashboard/home.js';
import Settings from "./components/dashboard/settings";
import SOS from "./components/dashboard/SOS.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
        <Routes path="/">
          <Route index element={<MainHomepage />} />
          <Route path="dashboard">
              <Route path="home" element={<Home />} />
              <Route path="assign-duty" element={<Settings />} />
              <Route path="sos" element={<SOS />} />
            </Route>

        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
