import React, { useState, useEffect } from 'react'
import SearchPanel from './SearchPanel'
import { cleanObject } from '../../utils'
import qs from 'qs'
import List from './list'
import useDebounce from '../../hooks/useDebounce'
import useHttp from 'utils/http'
const ProjectList = () => {
  const [users, setUsers] = useState([])
  const [lists, setLists] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const resquest = useHttp()
  console.log(resquest)

  const debounceParam = useDebounce(param)
  useEffect(() => {
    resquest('projects', { data: cleanObject(debounceParam) }).then(setLists)
  }, [debounceParam])
  useEffect(() => {
    resquest('users').then(setUsers)
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
