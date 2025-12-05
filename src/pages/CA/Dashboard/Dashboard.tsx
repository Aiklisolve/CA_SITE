import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import CASidebar from '../../../components/CA/CASidebar'
import Card from '../../../components/Card'
import { getCurrentUser } from '../../../utils/auth'

const CADashboard = () => {
  const user = getCurrentUser()
  
  // Mock data for CA dashboard
  const stats = {
    totalClients: 12,
    activeServices: 28,
    pendingTasks: 8,
    completedThisMonth: 45,
    totalRevenue: 125000,
    pendingPayments: 25000
  }

  const recentClients = [
    { id: 1, name: 'John Doe', clientId: '#12345', services: 3, lastActivity: '2024-12-04' },
    { id: 2, name: 'Priya Sharma', clientId: '#12346', services: 2, lastActivity: '2024-12-03' },
    { id: 3, name: 'Amit Patel', clientId: '#12347', services: 4, lastActivity: '2024-12-05' },
  ]

  const pendingTasks = [
    { id: 1, client: 'John Doe', task: 'Review ITR documents', priority: 'high', dueDate: '2024-12-07' },
    { id: 2, client: 'Priya Sharma', task: 'GST return filing', priority: 'medium', dueDate: '2024-12-10' },
    { id: 3, client: 'Amit Patel', task: 'Audit report preparation', priority: 'high', dueDate: '2024-12-08' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <CASidebar />
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name || 'CA'}! 👋
            </h1>
            <p className="text-gray-600">
              {user?.designation || 'Chartered Accountant'} • {user?.caId || 'CA-001'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Total Clients</p>
                  <p className="text-3xl font-bold text-pride-red">{stats.totalClients}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-full">
                  <span className="text-4xl">👥</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Active Services</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.activeServices}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-full">
                  <span className="text-4xl">📋</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Pending Tasks</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.pendingTasks}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-full">
                  <span className="text-4xl">⏰</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Completed (This Month)</p>
                  <p className="text-3xl font-bold text-green-600">{stats.completedThisMonth}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-full">
                  <span className="text-4xl">✅</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Total Revenue</p>
                  <p className="text-3xl font-bold text-purple-600">₹{stats.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-full">
                  <span className="text-4xl">💰</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Pending Payments</p>
                  <p className="text-3xl font-bold text-red-600">₹{stats.pendingPayments.toLocaleString()}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-full">
                  <span className="text-4xl">💳</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Clients */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="text-3xl">👥</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Recent Clients</h2>
                    <p className="text-sm text-gray-500">Your active clients</p>
                  </div>
                </div>
                <Link to="/ca/clients" className="text-pride-red hover:text-pride-dark-red font-semibold text-sm">
                  View All →
                </Link>
              </div>

              <div className="space-y-3">
                {recentClients.map((client) => (
                  <div key={client.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900">{client.name}</p>
                      <div className="flex gap-4 text-xs text-gray-500 mt-1">
                        <span>ID: {client.clientId}</span>
                        <span>Services: {client.services}</span>
                        <span>Last: {new Date(client.lastActivity).toLocaleDateString('en-IN')}</span>
                      </div>
                    </div>
                    <Link 
                      to={`/ca/clients/${client.id}`}
                      className="text-pride-red hover:text-pride-dark-red font-semibold text-sm"
                    >
                      View →
                    </Link>
                  </div>
                ))}
              </div>
            </Card>

            {/* Pending Tasks */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Pending Tasks</h2>
                    <p className="text-sm text-gray-500">Urgent tasks to complete</p>
                  </div>
                </div>
                <Link to="/ca/tasks" className="text-pride-red hover:text-pride-dark-red font-semibold text-sm">
                  View All →
                </Link>
              </div>

              <div className="space-y-3">
                {pendingTasks.map((task) => (
                  <div key={task.id} className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-100">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{task.task}</p>
                        <p className="text-sm text-gray-600">Client: {task.client}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        task.priority === 'high' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>📅 Due: {new Date(task.dueDate).toLocaleDateString('en-IN')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CADashboard

