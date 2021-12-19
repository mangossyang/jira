import React, { useState, useEffect } from 'react'
import SearchPanel from './SearchPanel'
import { cleanObject } from '../../utils'
import qs from 'qs'
import List from './list'
import useDebounce from '../../hooks/useDebounce'
const ProjectList = () => {
  const [users, setUsers] = useState([])
  const [lists, setLists] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const debounceParam = useDebounce(param)
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/projects?${qs.stringify(
        cleanObject(debounceParam)
      )}`
    ).then(async (res) => {
      setLists(await res.json())
    })
  }, [debounceParam])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`).then(async (res) => {
      setUsers(await res.json())
    })
  }, [])
  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} lists={lists}></List>
    </div>
  )
}

export default ProjectList
