import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/services', icon: '📋', label: 'My Services' },
    { path: '/documents', icon: '📄', label: 'My Documents' },
    { path: '/billing', icon: '💳', label: 'Billing' },
    { path: '/profile', icon: '👤', label: 'Profile' },
  ]

  return (
    <aside className="bg-white shadow-lg w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-1">Client Portal</h2>
        <p className="text-xs text-gray-500">Manage your services</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/')
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-100">
        <p className="text-sm font-semibold text-pride-dark-red mb-2">Need Help?</p>
        <p className="text-xs text-gray-600 mb-3">Contact your assigned CA for assistance</p>
        <button className="w-full bg-pride-red hover:bg-pride-dark-red text-white text-sm py-2 rounded-lg transition-colors">
          Contact Support
        </button>
      </div>
    </aside>
  )
}

export default Sidebar

