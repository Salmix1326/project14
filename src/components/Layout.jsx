import { Outlet } from 'react-router'
import MainMenu from './MainMenu'

function Layout() {
  return (
    <div>
      <MainMenu />
      <hr />
      <Outlet />
    </div>
  )
}

export default Layout
