import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import CASidebar from '../../../components/CA/CASidebar'
import Card from '../../../components/Card'
import StatusBadge from '../../../components/StatusBadge'

const CAServices = () => {
  // Mock services data for CA view
  const services = [
    {
      id: 1,
      clientId: 1,
      clientName: 'John Doe',
      serviceName: 'ITR Filing 2024',
      status: 'in-progress',
      statusColor: 'yellow',
      assignedDate: '2024-11-15',
      dueDate: '2024-12-15',
      paymentStatus: 'paid',
      documents: { uploaded: 5, generated: 2 }
    },
    {
      id: 2,
      clientId: 2,
      clientName: 'Priya Sharma',
      serviceName: 'GST Monthly Return',
      status: 'pending',
      statusColor: 'red',
      assignedDate: '2024-12-01',
      dueDate: '2024-12-10',
      paymentStatus: 'pending',
      documents: { uploaded: 3, generated: 0 }
    },
    {
      id: 3,
      clientId: 3,
      clientName: 'Amit Patel',
      serviceName: 'TDS Filing',
      status: 'in-progress',
      statusColor: 'yellow',
      assignedDate: '2024-10-15',
      dueDate: '2024-12-20',
      paymentStatus: 'partially-paid',
      documents: { uploaded: 8, generated: 1 }
    },
    {
      id: 4,
      clientId: 1,
      clientName: 'John Doe',
      serviceName: 'GST Registration',
      status: 'completed',
      statusColor: 'green',
      assignedDate: '2024-08-10',
      dueDate: '2024-08-15',
      paymentStatus: 'paid',
      documents: { uploaded: 4, generated: 1 }
    },
  ]

  const statusCounts = {
    pending: services.filter(s => s.status === 'pending').length,
    inProgress: services.filter(s => s.status === 'in-progress').length,
    completed: services.filter(s => s.status === 'completed').length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <CASidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Management</h1>
            <p className="text-gray-600">Manage all client services and track progress</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Total Services</p>
                <p className="text-3xl font-bold text-pride-red">{services.length}</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Pending</p>
                <p className="text-3xl font-bold text-red-600">{statusCounts.pending}</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">In Progress</p>
                <p className="text-3xl font-bold text-yellow-600">{statusCounts.inProgress}</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Completed</p>
                <p className="text-3xl font-bold text-green-600">{statusCounts.completed}</p>
              </div>
            </Card>
          </div>

          {/* Services List */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <span className="text-3xl">📋</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">All Services</h2>
                  <p className="text-sm text-gray-500">Track service status and progress</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all border border-gray-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{service.serviceName}</h3>
                      <StatusBadge 
                        status={service.status === 'in-progress' ? 'In Progress' : service.status === 'completed' ? 'Completed' : 'Pending'}
                        color={service.statusColor as any}
                      />
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.paymentStatus === 'paid' 
                          ? 'bg-green-100 text-green-800'
                          : service.paymentStatus === 'pending'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {service.paymentStatus === 'paid' ? '✅ Paid' : service.paymentStatus === 'pending' ? '⏰ Pending' : '⏳ Partial'}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium mb-3">Client: {service.clientName}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Assigned</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(service.assignedDate).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Due Date</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(service.dueDate).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Documents</p>
                        <p className="font-semibold text-gray-900">
                          📤 {service.documents.uploaded} | 📥 {service.documents.generated}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Days Remaining</p>
                        <p className={`font-semibold ${
                          new Date(service.dueDate) < new Date() ? 'text-red-600' : 'text-gray-900'
                        }`}>
                          {Math.ceil((new Date(service.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Link 
                      to={`/ca/services/${service.id}`}
                      className="bg-white hover:bg-gray-50 border-2 border-pride-red text-pride-red font-semibold px-4 py-2 rounded-lg transition-all"
                    >
                      View Details
                    </Link>
                    <Link 
                      to={`/ca/services/${service.id}/documents`}
                      className="bg-pride-red hover:bg-pride-dark-red text-white font-semibold px-4 py-2 rounded-lg transition-all"
                    >
                      Documents
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

export default CAServices

