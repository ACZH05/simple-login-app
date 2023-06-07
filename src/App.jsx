import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home /> } path='/' />
        <Route element={ <Login /> } path='/login' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
