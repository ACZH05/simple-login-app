import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import useLocalStorage from 'use-local-storage';
import Home from "./pages/Home"
import Login from "./pages/Login.jsx"
import Dashboard from './pages/Dashboard';
import { AuthContext } from './AuthContext';
import RequireAuth from './components/requireAuth';
import SectionAuth from './components/SectionAuth'
import Profile from './pages/Profile';
import LogButton from './LogButton.jsx';

function NavBar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <SectionAuth>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>`
            </SectionAuth>
          </Nav>
      <LogButton />
      </Container>
    </Navbar>
  )
}

function App() {
  const [token, setToken] = useLocalStorage("token", null)

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <NavBar />
`      <BrowserRouter>
        <Routes>
          <Route element={ <Home /> } path='/' />
          <Route element={ <Login /> } path='/login' />
          <Route element={
            <RequireAuth><Dashboard /></RequireAuth>
          }
          path='/dashboard'
          />
          <Route element={
            <RequireAuth><Profile /></RequireAuth>
          }
          path='/profile'
          />
        </Routes>
      </BrowserRouter>`
    </AuthContext.Provider>
  )
}

export default App
