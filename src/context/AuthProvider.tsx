import { getAuth } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({})

type Props = {
  children?: React.ReactNode
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const auth = getAuth()

  useEffect(() => {
    const unsubscribed = auth.onIdTokenChanged((user) => {
      if (user?.uid) {
        setUser({ ...user })
        localStorage.setItem('accessToken', user?.accessToken)
        return
      }

      // reset user info
      setUser({})
      localStorage.clear()
      navigate('/login')
    })

    return () => {
      unsubscribed()
    }
  }, [auth])

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthProvider
