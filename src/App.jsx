import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import useLocalStorage from 'use-local-storage';
import Home from "./pages/Home"
import Login from "./pages/Login.jsx"
import Dashboard from './pages/Dashboard';
import { AuthContext } from './AuthContext';
import RequireAuth from './components/requireAuth';


function App() {
  const [token, setToken] = useLocalStorage("token", null)
  return (
    <AuthContext.Provider value={{token, setToken}}>
`      <BrowserRouter>
        <Routes>
          <Route element={ <Home /> } path='/' />
          <Route element={ <Login /> } path='/login' />
          <Route element={
            <RequireAuth><Dashboard /></RequireAuth>
          }
          path='/dashboard'
          />
        </Routes>
      </BrowserRouter>`
    </AuthContext.Provider>
  )
}

export default App
