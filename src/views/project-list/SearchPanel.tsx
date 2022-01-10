import React, { useState, useEffect } from 'react'
import { Select, Input, Form } from 'antd'
import styled from '@emotion/styled'
export interface User {
  id: number
  name: string
  token?: string
}
interface SearchPanelProps {
  users: User[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: SearchPanelProps['param']) => void
}
const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form layout="inline" style={{ marginBottom: '2rem' }}>
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(val) =>
            setParam({
              ...param,
              personId: val
            })
          }
        >
          <Select.Option value="">负责人</Select.Option>
          {users.length &&
            users.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>
    </Form>
  )
}

export default SearchPanel
