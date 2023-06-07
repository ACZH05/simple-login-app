import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import useLocalStorage from 'use-local-storage';
import Home from "./pages/Home"
import Login from "./pages/Login.jsx"
import Dashboard from './pages/Dashboard';
import { AuthContext } from './AuthContext';
import RequireAuth from './components/requireAuth';

function NavBar({ logout }) {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/login">Login Page</Nav.Link>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
      <Button variant='outline-light' onClick={ logout }>Logout</Button>
      </Container>
    </Navbar>
  )
}

function App() {
  const [token, setToken] = useLocalStorage("token", null)

  function logout() {
    setToken(null)
  }
  return (
    <AuthContext.Provider value={{token, setToken}}>
      <NavBar logout={ logout }/>
`      <BrowserRouter>
        <Routes>
          <Route element={ <Home /> } path='/home' />
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
