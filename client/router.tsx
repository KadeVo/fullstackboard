import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'

import App from './components/App.js'
import CreateJobPage from './components/CreateJobPage.js'
import HomePage from './components/Home.js'

export const routes = createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-job" element={<CreateJobPage />} />

    </Route>
)

export const router = createBrowserRouter(routes)