import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import About from './Pages/About/About.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
