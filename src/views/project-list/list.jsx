const List = ({ lists }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {lists.map((i) => [
          <tr key={i.id}>
            <td>{i.name}</td>
            <td>{i.personName}</td>
          </tr>
        ])}
      </tbody>
    </table>
  )
}

export default List
