import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'
import dashboardData from '../../data/dashboard.json'
import { Link } from 'react-router-dom'
import { downloadDocument } from '../../utils/pdfGenerator'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back! 👋</h1>
            <p className="text-gray-600">Here's an overview of your services and activities</p>
          </div>

          {/* Service Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Active Services</p>
                  <p className="text-4xl font-bold text-pride-red">{dashboardData.serviceStatus.active}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-full">
                  <span className="text-4xl">⚡</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Pending Payment</p>
                  <p className="text-4xl font-bold text-orange-600">{dashboardData.serviceStatus.pending}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-full">
                  <span className="text-4xl">💳</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Completed</p>
                  <p className="text-4xl font-bold text-green-600">{dashboardData.serviceStatus.completed}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-full">
                  <span className="text-4xl">✅</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Billing Summary */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-50 p-3 rounded-lg">
                  <span className="text-3xl">💰</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Billing Summary</h2>
                  <p className="text-sm text-gray-500">Your payment overview</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Total Invoices</span>
                  <span className="font-bold text-gray-900">{dashboardData.billingSummary.totalInvoices}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Paid Amount</span>
                  <span className="font-bold text-green-600">₹{dashboardData.billingSummary.paidAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Pending Amount</span>
                  <span className="font-bold text-red-600">₹{dashboardData.billingSummary.pendingAmount.toLocaleString()}</span>
                </div>
              </div>

              {dashboardData.billingSummary.pendingAmount > 0 && (
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-pride-dark-red mb-2">⚠️ Payment Required</p>
                  <p className="text-xs text-gray-600 mb-3">
                    Service processing starts only after full payment is received.
                  </p>
                  <Link to="/billing" className="inline-block bg-pride-red hover:bg-pride-dark-red text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors">
                    View Invoices
                  </Link>
                </div>
              )}
            </Card>

            {/* Upcoming Due Dates */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <span className="text-3xl">📅</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Upcoming Due Dates</h2>
                  <p className="text-sm text-gray-500">Don't miss important deadlines</p>
                </div>
              </div>

              <div className="space-y-4">
                {dashboardData.upcomingDueDates.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.service}</p>
                      <p className="text-sm text-gray-600">Due: {new Date(item.dueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                    <StatusBadge 
                      status={item.priority === 'high' ? 'Urgent' : 'Normal'} 
                      color={item.priority === 'high' ? 'red' : 'blue'} 
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pending Actions */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <span className="text-3xl">✋</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Pending Actions</h2>
                  <p className="text-sm text-gray-500">Actions required from you</p>
                </div>
              </div>

              <div className="space-y-3">
                {dashboardData.pendingActions.map((action) => (
                  <div key={action.id} className="flex items-center gap-3 p-4 border-l-4 border-orange-500 bg-orange-50 rounded-r-lg">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{action.action}</p>
                      <p className="text-sm text-gray-600">
                        {action.service} • Deadline: {new Date(action.deadline).toLocaleDateString('en-IN')}
                      </p>
                    </div>
                    <button className="bg-pride-red hover:bg-pride-dark-red text-white text-sm px-4 py-2 rounded-lg transition-colors font-semibold">
                      Upload
                    </button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Documents */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-50 p-3 rounded-lg">
                  <span className="text-3xl">📄</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Recent Documents</h2>
                  <p className="text-sm text-gray-500">Latest generated files</p>
                </div>
              </div>

              <div className="space-y-3">
                {dashboardData.recentDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-50 p-2 rounded">
                        <span className="text-2xl">📎</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{doc.name}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(doc.date).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => downloadDocument(doc.name)}
                      className="text-pride-red hover:text-pride-dark-red font-semibold text-sm"
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t">
                <Link to="/documents" className="text-pride-red hover:text-pride-dark-red font-semibold text-sm">
                  View All Documents →
                </Link>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard

