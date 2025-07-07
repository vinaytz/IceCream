import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import HomePage from './pages/HomePage';
import BuyNowPage from './pages/BuyNowPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<BuyNowPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;