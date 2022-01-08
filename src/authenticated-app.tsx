import { useAuth } from 'context/auth-context'
import ProjectList from 'views/project-list'

export const Authenticated = () => {
  const { logout } = useAuth()
  return (
    <>
      <button onClick={() => logout()}>退出登录</button>
      <ProjectList />
    </>
  )
}
