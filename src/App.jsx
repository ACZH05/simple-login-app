import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react';
import Home from "./pages/Home"
import Login from "./pages/Login.jsx"
import Dashboard from './pages/Dashboard';
import { AuthContext } from './AuthContext';


function App() {
  const [token, setToken] = useState(null)
  return (
    <AuthContext.Provider value={{token, setToken}}>
`      <BrowserRouter>
        <Routes>
          <Route element={ <Home /> } path='/' />
          <Route element={ <Login /> } path='/login' />
          <Route element={ <Dashboard /> } path='/dashboard' />
        </Routes>
      </BrowserRouter>`
    </AuthContext.Provider>
  )
}

export default App
