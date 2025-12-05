import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'
import servicesData from '../../data/services.json'

const Services = () => {
  const getStatusText = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'in-progress': 'In Progress',
      'pending-docs': 'Pending Docs',
      'completed': 'Completed',
      'pending': 'Pending',
    }
    return statusMap[status] || status
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Services</h1>
            <p className="text-gray-600">Track and manage all your CA services</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {servicesData.map((service) => (
              <Card key={service.id}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <span className="text-3xl">📋</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                          <StatusBadge 
                            status={getStatusText(service.status)} 
                            color={service.statusColor as any} 
                          />
                        </div>
                        <p className="text-gray-600 mb-2">{service.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span>👤 {service.assignedCA}</span>
                          <span>📅 Due: {new Date(service.dueDate).toLocaleDateString('en-IN')}</span>
                          <span>💰 ₹{service.charge.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Payment Status Badge */}
                    <div className="flex items-center gap-2 mt-3">
                      {service.paymentStatus === 'paid' && (
                        <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-200">
                          ✅ Payment Completed
                        </span>
                      )}
                      {service.paymentStatus === 'pending' && (
                        <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-semibold border border-red-200">
                          🧾 Payment Required
                        </span>
                      )}
                      {service.paymentStatus === 'partially-paid' && (
                        <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold border border-orange-200">
                          ⏳ Partially Paid
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link 
                      to={`/services/${service.id}`}
                      className="btn-primary text-center whitespace-nowrap"
                    >
                      View Details
                    </Link>
                    {service.paymentStatus === 'pending' && (
                      <Link 
                        to="/billing"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-all text-center"
                      >
                        Pay Now
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <span className="text-2xl">ℹ️</span>
              Important Information
            </h3>
            <p className="text-sm text-blue-800">
              Service processing begins only after full payment is received. Please ensure timely payment to avoid delays in processing your requests.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Services

