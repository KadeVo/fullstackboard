import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Make sure to import Routes

import HomePage from './Home';
import CreateJobPage from './CreateJobPage';

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-job">Create a new Job listing</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-job" element={<CreateJobPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;