import { Link, useNavigate } from 'react-router-dom'
import { getCurrentUser, clearCurrentUser } from '../utils/auth'

interface NavbarProps {
  isPortal?: boolean
}

const Navbar = ({ isPortal = false }: NavbarProps) => {
  const navigate = useNavigate()
  const user = getCurrentUser()

  const handleLogout = () => {
    clearCurrentUser()
    navigate('/')
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-pride-red text-white font-bold text-2xl px-4 py-2 rounded-lg">
            PRIDE
          </div>
          <span className="text-gray-600 text-sm hidden md:block">
            Chartered Accountants
          </span>
        </Link>

        {!isPortal ? (
          <div className="flex items-center gap-6">
            <a href="#services" className="text-gray-700 hover:text-pride-red transition-colors font-medium">
              Services
            </a>
            <a href="#why-pride" className="text-gray-700 hover:text-pride-red transition-colors font-medium">
              Why Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pride-red transition-colors font-medium">
              Contact
            </a>
            <Link to="/login" className="btn-primary">
              Client Login
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-pride-red text-white rounded-full flex items-center justify-center font-semibold">
                {user ? getInitials(user.name) : 'U'}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold">{user?.name || 'User'}</p>
                <p className="text-xs text-gray-500">
                  {user?.role === 'ca' ? `${user.caId} - ${user.designation}` : `Client ID: ${user?.clientId || '#00000'}`}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-all"
            >
              <span>🚪</span>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

