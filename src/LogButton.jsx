import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Button } from 'react-bootstrap'

function LogButton() {
    const token = useContext(AuthContext).token
    const setToken = useContext(AuthContext).setToken
    const login = "login"
    const logout = "logout"
    
    const text = !token ? login : logout
    const navigateTo = !token ? "/" + login : ''

    function logOut() {
      if (!navigateTo) setToken(null)
    }

  return (
    <div>
      <Button variant='outline-light' href={navigateTo} onClick={logOut}>{ text }</Button>
    </div>
  )
}

export default LogButton
