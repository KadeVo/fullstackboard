import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/create-job" className="text-white hover:text-gray-400">
                Create a New Job listing
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default App
