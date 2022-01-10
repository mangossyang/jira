import React, { useState, useEffect } from 'react'
import SearchPanel from './SearchPanel'
import { cleanObject } from '../../utils'
import qs from 'qs'
import List from './list'
import useDebounce from '../../hooks/useDebounce'
import useHttp from 'utils/http'
import styled from '@emotion/styled'
const ProjectList = () => {
  const [users, setUsers] = useState([])
  const [lists, setLists] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const resquest = useHttp()

  const debounceParam = useDebounce(param)
  useEffect(() => {
    resquest('projects', { data: cleanObject(debounceParam) }).then(setLists)
    // eslint-disable-next-line
  }, [debounceParam])
  useEffect(() => {
    resquest('users').then(setUsers)
    // eslint-disable-next-line
  }, [])
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} lists={lists}></List>
    </Container>
  )
}

export default ProjectList

const Container = styled.div`
  padding: 3.2rem;
`
