import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import MainHomepage from "./components/homepage/main-homepage.js";
import Home from './components/dashboard/home.js';
import Settings from "./components/dashboard/settings";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
        <Routes path="/">
          <Route index element={<MainHomepage />} />
          <Route path="dashboard">
              <Route path="home" element={<Home />} />
              <Route path="settings" element={<Settings />} />
            </Route>

        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
