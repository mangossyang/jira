import React, { ReactNode, useState } from 'react'
import { User } from '../views/project-list/SearchPanel'
import * as auth from '../auth-provider'
const AuthContext = React.createContext<ContextValue | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

interface ContextValue {
  user: User | null
  login: (form: AuthForm) => Promise<void>
  register: (form: AuthForm) => Promise<void>
  logout: () => void
}

interface AuthForm {
  username: string
  password: string
}
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const login = (form: AuthForm) =>
    auth.login(form).then((user) => setUser(user))
  const register = (form: AuthForm) =>
    auth.register(form).then((user) => setUser(user))
  const logout = () => auth.logout().then(() => setUser(null))
  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    ></AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用')
  }
  console.log(context)

  return context
}
