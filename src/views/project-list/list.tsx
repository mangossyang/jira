import { User } from './SearchPanel'
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
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {lists.length &&
          lists.map((i) => [
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.personId}</td>
            </tr>
          ])}
      </tbody>
    </table>
  )
}

export default List
