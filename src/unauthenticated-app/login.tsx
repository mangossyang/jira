import { useAuth } from 'context/auth-context'
import React, { FormEvent } from 'react'

const Login = () => {
  const { login } = useAuth()

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    login({
      username,
      password
    })
  }

  return (
    <form onSubmit={handleClick}>
      <div>
        <label>用户名</label>
        <input type="text" />
      </div>
      <div>
        <label>密码</label>
        <input type="password" />
      </div>
      <button type={'submit'}>登录</button>
    </form>
  )
}

export default Login
