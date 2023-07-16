import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import MainHomepage from "./components/homepage/main-homepage.js";

function App() {
  return (
    <div className="App">
            
      <BrowserRouter>
        <main>
        <Routes path="/">
          <Route index element={<MainHomepage />} />
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
