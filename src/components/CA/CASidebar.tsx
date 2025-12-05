import { Link, useLocation } from 'react-router-dom'
import { getCurrentUser } from '../../utils/auth'

const CASidebar = () => {
  const location = useLocation()
  const user = getCurrentUser()

  const menuItems = [
    { path: '/ca/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/ca/clients', icon: '👥', label: 'My Clients' },
    { path: '/ca/services', icon: '📋', label: 'Services' },
    { path: '/ca/tasks', icon: '✅', label: 'Tasks' },
    { path: '/ca/reports', icon: '📈', label: 'Reports' },
    { path: '/ca/profile', icon: '👤', label: 'Profile' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen sticky top-0">
      <div className="p-6 border-b">
        <div className="bg-pride-red text-white font-bold text-xl px-4 py-2 rounded-lg inline-block mb-3">
          PRIDE
        </div>
        <p className="text-sm text-gray-600 font-semibold">CA Portal</p>
        {user && (
          <div className="mt-3 pt-3 border-t">
            <p className="text-sm font-semibold text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.designation}</p>
            <p className="text-xs text-gray-500">{user.caId}</p>
          </div>
        )}
      </div>

      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-pride-red text-white hover:bg-pride-dark-red'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
        <Link
          to="/"
          onClick={() => {
            localStorage.removeItem('currentUser')
          }}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-200 text-gray-700 transition-all"
        >
          <span className="text-xl">🚪</span>
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </aside>
  )
}

export default CASidebar

