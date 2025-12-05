import Navbar from '../../../components/Navbar'
import CASidebar from '../../../components/CA/CASidebar'
import Card from '../../../components/Card'
import { getCurrentUser } from '../../../utils/auth'

const CAProfile = () => {
  const user = getCurrentUser()

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <CASidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-600">Manage your CA account information</p>
          </div>

          {/* Profile Header */}
          <Card className="mb-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-pride-red to-pride-dark-red text-white rounded-full flex items-center justify-center text-4xl font-bold">
                {user ? getInitials(user.name) : 'CA'}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{user?.name || 'CA Name'}</h2>
                <p className="text-gray-600 mb-1">{user?.designation || 'Chartered Accountant'}</p>
                <p className="text-gray-600 mb-2">CA ID: {user?.caId || 'CA-000'}</p>
                <div className="flex gap-2">
                  <button className="btn-primary">Change Photo</button>
                  <button className="btn-secondary">Remove</button>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Personal Information */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <span className="text-3xl">👤</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
                  <p className="text-sm text-gray-500">Your basic details</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue={user?.name || ''}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue={user?.email || ''}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    defaultValue="+91 98765 43210"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">CA ID</label>
                  <input 
                    type="text" 
                    defaultValue={user?.caId || ''}
                    disabled
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-100"
                  />
                </div>

                <button className="btn-primary w-full">Save Changes</button>
              </div>
            </Card>

            {/* Professional Information */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-50 p-3 rounded-lg">
                  <span className="text-3xl">🎓</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Professional Information</h2>
                  <p className="text-sm text-gray-500">Your CA credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Designation</label>
                  <input 
                    type="text" 
                    defaultValue={user?.designation || ''}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience</label>
                  <input 
                    type="number" 
                    defaultValue="10"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Specialization</label>
                  <input 
                    type="text" 
                    defaultValue="Taxation, Audit, Compliance"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Assigned Clients</label>
                  <input 
                    type="text" 
                    defaultValue={user?.assignedClients?.length || 0}
                    disabled
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-100"
                  />
                </div>

                <button className="btn-primary w-full">Update Profile</button>
              </div>
            </Card>

            {/* Security Settings */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-50 p-3 rounded-lg">
                  <span className="text-3xl">🔒</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>
                  <p className="text-sm text-gray-500">Manage your password</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <button className="btn-primary w-full">Change Password</button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CAProfile

