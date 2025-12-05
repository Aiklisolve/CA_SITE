import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Static demo - no real authentication
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pride-red via-pride-dark-red to-red-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pride-red to-pride-dark-red text-white p-8 text-center">
          <div className="bg-white text-pride-red font-bold text-3xl px-6 py-3 rounded-lg inline-block mb-4">
            PRIDE
          </div>
          <h2 className="text-2xl font-bold mb-2">Client Portal</h2>
          <p className="text-white/90">Sign in to access your account</p>
        </div>

        {/* Dummy Credentials Info */}
        <div className="px-8 pt-6 pb-0">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div className="flex-1">
                <p className="font-semibold text-blue-900 mb-2">Demo Credentials</p>
                <div className="space-y-1 text-sm text-blue-800">
                  <p><strong>Email:</strong> demo@pride.ca</p>
                  <p><strong>Password:</strong> demo123</p>
                </div>
                <p className="text-xs text-blue-700 mt-2 italic">You can use any credentials to login</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 pt-6">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none transition-colors"
              placeholder="demo@pride.ca"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pride-red focus:outline-none transition-colors"
              placeholder="demo123"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-pride-red hover:text-pride-dark-red font-semibold">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn-primary w-full mb-4">
            Sign In
          </button>
          
          <button
            type="button"
            onClick={() => {
              setEmail('demo@pride.ca')
              setPassword('demo123')
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-all mb-4 text-sm"
          >
            🔄 Fill Demo Credentials
          </button>

          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-pride-red hover:text-pride-dark-red font-semibold">
                Contact Us
              </a>
            </p>
          </div>
        </form>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 text-center border-t">
          <Link to="/" className="text-sm text-pride-red hover:text-pride-dark-red font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login

