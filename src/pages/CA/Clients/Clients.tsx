import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import CASidebar from '../../../components/CA/CASidebar'
import Card from '../../../components/Card'

const CAClients = () => {
  // Mock client data
  const clients = [
    {
      id: 1,
      name: 'John Doe',
      clientId: '#12345',
      email: 'john.doe@example.com',
      phone: '+91 98765 43210',
      services: 3,
      status: 'active',
      totalInvoices: 5,
      pendingPayments: 1500,
      lastActivity: '2024-12-04'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      clientId: '#12346',
      email: 'priya.sharma@example.com',
      phone: '+91 98765 43211',
      services: 2,
      status: 'active',
      totalInvoices: 3,
      pendingPayments: 0,
      lastActivity: '2024-12-03'
    },
    {
      id: 3,
      name: 'Amit Patel',
      clientId: '#12347',
      email: 'amit.patel@example.com',
      phone: '+91 98765 43212',
      services: 4,
      status: 'active',
      totalInvoices: 7,
      pendingPayments: 3000,
      lastActivity: '2024-12-05'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      clientId: '#12348',
      email: 'sneha.reddy@example.com',
      phone: '+91 98765 43213',
      services: 1,
      status: 'active',
      totalInvoices: 1,
      pendingPayments: 0,
      lastActivity: '2024-12-01'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <CASidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Clients</h1>
            <p className="text-gray-600">Manage all your assigned clients</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Total Clients</p>
                <p className="text-3xl font-bold text-pride-red">{clients.length}</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Active Services</p>
                <p className="text-3xl font-bold text-blue-600">
                  {clients.reduce((sum, c) => sum + c.services, 0)}
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Total Invoices</p>
                <p className="text-3xl font-bold text-purple-600">
                  {clients.reduce((sum, c) => sum + c.totalInvoices, 0)}
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Pending Payments</p>
                <p className="text-3xl font-bold text-red-600">
                  ₹{clients.reduce((sum, c) => sum + c.pendingPayments, 0).toLocaleString()}
                </p>
              </div>
            </Card>
          </div>

          {/* Clients List */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <span className="text-3xl">👥</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">All Clients</h2>
                  <p className="text-sm text-gray-500">View and manage client details</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {clients.map((client) => (
                <div 
                  key={client.id} 
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all border border-gray-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-pride-red text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                        <p className="text-sm text-gray-500">Client ID: {client.clientId}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                      <div>
                        <p className="text-gray-500">Email</p>
                        <p className="font-semibold text-gray-900">{client.email}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Phone</p>
                        <p className="font-semibold text-gray-900">{client.phone}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Active Services</p>
                        <p className="font-semibold text-gray-900">{client.services}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Last Activity</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(client.lastActivity).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Invoices:</span>
                        <span className="font-semibold text-gray-900">{client.totalInvoices}</span>
                      </div>
                      {client.pendingPayments > 0 && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-red-600">Pending:</span>
                          <span className="font-semibold text-red-600">₹{client.pendingPayments.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Link 
                      to={`/ca/clients/${client.id}`}
                      className="bg-white hover:bg-gray-50 border-2 border-pride-red text-pride-red font-semibold px-4 py-2 rounded-lg transition-all"
                    >
                      View Details
                    </Link>
                    <Link 
                      to={`/ca/clients/${client.id}/services`}
                      className="bg-pride-red hover:bg-pride-dark-red text-white font-semibold px-4 py-2 rounded-lg transition-all"
                    >
                      Services
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}

export default CAClients

