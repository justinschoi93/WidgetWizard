import Header from './Components/Header/Header'
import Dashboard from './Pages/Dashboard/Dashboard'
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Outlet/>
      <Header/>
      <Dashboard/>
    </>
  )
}

export default App
