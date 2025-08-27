import { routes } from '@/router/routes'
import { NavLink } from 'react-router'

function getItemsForMainMenu(routesList, basePath) {
  const resList = []
  routesList.forEach((route) => {
    if (route?.meta?.labelForMainMenu)
      resList.push({
        path: route.index ? basePath : basePath + route.path,
        label: route.meta.labelForMainMenu,
      })
    if (route.children)
      resList.push(
        ...getItemsForMainMenu(
          route.children,
          basePath ? basePath + route.path + '/' : route.path
        )
      )
  })
  return resList
}

function MainMenu() {
  const itemsForMainMenu = getItemsForMainMenu(routes, '')
  return (
    <nav className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <ul className="flex flex-row gap-4">
        {itemsForMainMenu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition-colors duration-200
                ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainMenu
