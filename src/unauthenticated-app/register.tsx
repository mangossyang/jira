import { useAuth } from 'context/auth-context'
import React, { FormEvent } from 'react'
import { Form, Input, Button } from 'antd'
import { FillButton } from 'unauthenticated-app'
const Register = () => {
  const { register } = useAuth()

  const handleClick = (values: { username: string; password: string }) => {
    // const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    // const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    register(values)
  }

  return (
    <Form onFinish={handleClick}>
      <Form.Item name={'username'}>
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item name={'password'}>
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <Form.Item>
        <FillButton htmlType="submit" type={'primary'}>
          注册
        </FillButton>
      </Form.Item>
    </Form>
  )
}

export default Register
