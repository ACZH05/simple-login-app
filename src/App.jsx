import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login.jsx"
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home /> } path='/' />
        <Route element={ <Login /> } path='/login' />
        <Route element={ <Dashboard /> } path='/dashboard' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
