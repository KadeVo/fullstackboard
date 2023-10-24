import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function App() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    console.log('sign out')
    logout()
  }

  const handleSignIn = () => {
    console.log('sign in')
    loginWithRedirect()
  }

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
          <IfAuthenticated>
            <button onClick={handleSignOut}>Sign out</button>
            {user && <p>Signed in as: {user?.nickname}</p>}
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button onClick={handleSignIn}>Sign in</button>
          </IfNotAuthenticated>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default App
