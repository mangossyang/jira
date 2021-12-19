import React, { useState, useEffect } from 'react'
export interface User {
  id: number
  name: string
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
    <div>
      <input
        type="text"
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value
          })
        }
      />
      <select
        value={param.personId}
        onChange={(e) =>
          setParam({
            ...param,
            personId: e.target.value
          })
        }
      >
        <option value="">负责人</option>
        {users.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchPanel
