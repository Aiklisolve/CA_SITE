import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-600">Manage your account information</p>
          </div>

          {/* Profile Header */}
          <Card className="mb-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-pride-red to-pride-dark-red text-white rounded-full flex items-center justify-center text-4xl font-bold">
                JD
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">John Doe</h2>
                <p className="text-gray-600 mb-2">Client ID: #12345</p>
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
                    defaultValue="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue="john.doe@example.com"
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

                <button className="btn-primary w-full">Save Changes</button>
              </div>
            </Card>

            {/* Tax Information */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-50 p-3 rounded-lg">
                  <span className="text-3xl">📄</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Tax Information</h2>
                  <p className="text-sm text-gray-500">Your tax-related details</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">PAN Number</label>
                  <input 
                    type="text" 
                    defaultValue="ABCDE1234F"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Aadhar Number</label>
                  <input 
                    type="text" 
                    defaultValue="1234 5678 9012"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">GSTIN (if applicable)</label>
                  <input 
                    type="text" 
                    placeholder="29ABCDE1234F1Z5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <button className="btn-primary w-full">Update Tax Info</button>
              </div>
            </Card>

            {/* Address Information */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <span className="text-3xl">📍</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Address</h2>
                  <p className="text-sm text-gray-500">Your contact address</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address</label>
                  <input 
                    type="text" 
                    defaultValue="456 Business Avenue"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                    <input 
                      type="text" 
                      defaultValue="Mumbai"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                    <input 
                      type="text" 
                      defaultValue="Maharashtra"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">PIN Code</label>
                  <input 
                    type="text" 
                    defaultValue="400001"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none"
                  />
                </div>

                <button className="btn-primary w-full">Update Address</button>
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

          {/* Assigned CA Information */}
          <Card className="mt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-50 p-3 rounded-lg">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Your Assigned CA</h2>
                <p className="text-sm text-gray-500">Your dedicated chartered accountant</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                RS
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">CA Rahul Sharma</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>📧 rahul.sharma@pride.ca</p>
                  <p>📞 +91 98765 12345</p>
                  <p>🎓 FCA, 15+ years experience</p>
                </div>
              </div>
              <button className="btn-primary">Contact CA</button>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="mt-6 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <span className="text-3xl">⚠️</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-800">Danger Zone</h2>
                <p className="text-sm text-gray-600">Irreversible actions</p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-3">
                Once you delete your account, there is no going back. All your data will be permanently removed.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-all">
                Delete Account
              </button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}

export default Profile

