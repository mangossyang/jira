import { User } from './SearchPanel'
import { Table } from 'antd'
import dayjs from 'dayjs'
interface ListProps {
  lists: Project[]
  users: User[]
}
interface Project {
  id: number
  name: string
  personId: number
  organization: string
  created: number
}
const List = ({ lists, users }: ListProps) => {
  console.log(users)

  return (
    <Table
      pagination={false}
      dataSource={lists}
      columns={[
        {
          title: '名称',
          dataIndex: 'name'
        },
        {
          title: '部门',
          dataIndex: 'organization'
        },
        {
          title: '负责人',
          render(val) {
            return (
              <span>
                {users.find((user) => user.id === val.personId)?.name}
              </span>
            )
          }
        },
        {
          title: '创建时间',
          render(val) {
            return (
              <span>
                {val.created ? dayjs(val.created).format('YYYY-MM-DD') : '---'}
              </span>
            )
          }
        }
      ]}
    ></Table>
  )
}

export default List
