import styled from '@emotion/styled'
import { useAuth } from 'context/auth-context'
import ProjectList from 'views/project-list'
import { Button, Dropdown, Menu } from 'antd'
import { ReactComponent as SoftwareLogo } from './assets/software-logo.svg'
export const Authenticated = () => {
  const { logout, user } = useAuth()
  return (
    <Container>
      <PageHeader>
        <Row>
          <SoftwareLogo width="18rem" color="rgb(38,132,255" />
          <h2>项目</h2>
          <h2>用户</h2>
        </Row>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item onClick={() => logout()}>
                <div>退出登录</div>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link">hi~ {user?.name}</Button>
        </Dropdown>
      </PageHeader>
      <main>
        <ProjectList />
      </main>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem calc(100vh - 6rem);
`
const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`
const Row = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 2rem;
    margin-bottom: 0;
    margin-top: 0;
  }
`
// const Main = styled.main`
//   height: calc('100vh - 6rem');
// `
