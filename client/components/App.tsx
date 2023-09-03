import { Link, Outlet } from 'react-router-dom'; // Make sure to import Routes

// import HomePage from './Home';
// import CreateJobPage from './CreateJobPage';

function App() {
  return (
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
        <Outlet />
      </main>
    </div>
  );
}

export default App;