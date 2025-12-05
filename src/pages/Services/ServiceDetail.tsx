import { useParams, Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'
import servicesData from '../../data/services.json'
import { downloadDocument } from '../../utils/pdfGenerator'

const ServiceDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const documentsRef = useRef<HTMLDivElement>(null)
  const service = servicesData.find(s => s.id === Number(id))

  // Scroll to documents section if hash is present
  useEffect(() => {
    if (location.hash === '#documents' && documentsRef.current) {
      setTimeout(() => {
        documentsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location.hash])

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar isPortal />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <div className="text-center py-12">
              <p className="text-2xl text-gray-600">Service not found</p>
              <Link to="/services" className="btn-primary inline-block mt-4">
                Back to Services
              </Link>
            </div>
          </main>
        </div>
      </div>
    )
  }

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
          {/* Header */}
          <div className="mb-6">
            <Link to="/services" className="text-pride-red hover:text-pride-dark-red font-semibold mb-4 inline-block">
              ← Back to Services
            </Link>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h1>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <StatusBadge 
                status={getStatusText(service.status)} 
                color={service.statusColor as any} 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Service Info Cards */}
            <Card>
              <div className="text-center">
                <div className="text-4xl mb-2">📅</div>
                <p className="text-sm text-gray-500 mb-1">Due Date</p>
                <p className="font-bold text-gray-900">
                  {new Date(service.dueDate).toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-2">👤</div>
                <p className="text-sm text-gray-500 mb-1">Assigned CA</p>
                <p className="font-bold text-gray-900">{service.assignedCA}</p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="text-4xl mb-2">💰</div>
                <p className="text-sm text-gray-500 mb-1">Service Charge</p>
                <p className="font-bold text-gray-900">₹{service.charge.toLocaleString()}</p>
              </div>
            </Card>
          </div>

          {/* Payment Status Section */}
          <Card className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <span className="text-3xl">💳</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Payment Status</h2>
                <p className="text-sm text-gray-500">Current payment information</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status</span>
                {service.paymentStatus === 'paid' && (
                  <StatusBadge status="Paid" color="green" />
                )}
                {service.paymentStatus === 'pending' && (
                  <StatusBadge status="Pending" color="red" />
                )}
                {service.paymentStatus === 'partially-paid' && (
                  <StatusBadge status="Partially Paid" color="orange" />
                )}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Amount</span>
                <span className="font-bold text-gray-900">₹{service.charge.toLocaleString()}</span>
              </div>

              {service.paymentStatus === 'pending' && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-pride-dark-red mb-2">⚠️ Payment Required</p>
                  <p className="text-xs text-gray-600 mb-3">
                    After full payment, your service will move to processing. Service processing starts only after full payment is received.
                  </p>
                  <Link to="/billing" className="btn-primary inline-block">
                    Pay Now
                  </Link>
                </div>
              )}
            </div>
          </Card>

          {/* Timeline */}
          <Card className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <span className="text-3xl">🔄</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Service Timeline</h2>
                <p className="text-sm text-gray-500">Track progress step by step</p>
              </div>
            </div>

            <div className="space-y-4">
              {service.timeline.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : step.status === 'in-progress'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {step.status === 'completed' ? '✓' : index + 1}
                    </div>
                    {index < service.timeline.length - 1 && (
                      <div className={`w-0.5 h-12 ${
                        step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-gray-900">{step.step}</h3>
                      {step.status === 'completed' && (
                        <StatusBadge status="Completed" color="green" />
                      )}
                      {step.status === 'in-progress' && (
                        <StatusBadge status="In Progress" color="yellow" />
                      )}
                      {step.status === 'pending' && (
                        <StatusBadge status="Pending" color="gray" />
                      )}
                    </div>
                    {step.date && (
                      <p className="text-sm text-gray-500">
                        {new Date(step.date).toLocaleDateString('en-IN')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Documents Section */}
          <Card id="documents" ref={documentsRef}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-50 p-3 rounded-lg">
                <span className="text-3xl">📎</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Documents</h2>
                <p className="text-sm text-gray-500">Uploaded and generated files</p>
              </div>
            </div>

            {service.documents.length > 0 ? (
              <div className="space-y-3">
                {service.documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-50 p-2 rounded">
                        <span className="text-2xl">📄</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{doc.name}</p>
                        <p className="text-xs text-gray-500">
                          {doc.type === 'uploaded' ? 'Uploaded' : 'Generated'} on {new Date(doc.uploadDate).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        downloadDocument(doc.name)
                      }}
                      className="bg-pride-red hover:bg-pride-dark-red text-white font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                    >
                      <span>📥</span>
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p className="mb-4">No documents uploaded yet</p>
              </div>
            )}

            <div className="mt-4 pt-4 border-t">
              <input
                type="file"
                id={`file-input-${service.id}`}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    // In a real app, this would upload the file
                    console.log('File selected:', file.name)
                    alert(`File "${file.name}" selected. In production, this would upload to the server.`)
                  }
                }}
              />
              <button
                type="button"
                onClick={() => {
                  const fileInput = document.getElementById(`file-input-${service.id}`)
                  fileInput?.click()
                }}
                className="btn-secondary w-full"
              >
                📤 Upload Document
              </button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}

export default ServiceDetail

