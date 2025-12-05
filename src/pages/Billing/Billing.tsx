import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'
import invoicesData from '../../data/invoices.json'

const Billing = () => {
  const totalPaid = invoicesData
    .filter(inv => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0)
  
  const totalPending = invoicesData
    .filter(inv => inv.status === 'pending')
    .reduce((sum, inv) => sum + inv.amount, 0)
  
  const partiallyPaidAmount = invoicesData
    .filter(inv => inv.status === 'partially-paid')
    .reduce((sum, inv) => sum + (inv.amount - (inv.paidAmount || 0)), 0)

  const getStatusText = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'paid': 'Paid',
      'pending': 'Pending',
      'partially-paid': 'Partially Paid',
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Invoices</h1>
            <p className="text-gray-600">Manage your payments and view invoice history</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Total Paid</p>
                  <p className="text-3xl font-bold text-green-600">₹{totalPaid.toLocaleString()}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-full">
                  <span className="text-4xl">✅</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Pending Payment</p>
                  <p className="text-3xl font-bold text-red-600">₹{totalPending.toLocaleString()}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-full">
                  <span className="text-4xl">⏰</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Partial Payment</p>
                  <p className="text-3xl font-bold text-orange-600">₹{partiallyPaidAmount.toLocaleString()}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-full">
                  <span className="text-4xl">⏳</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Pending Payments Alert */}
          {(totalPending > 0 || partiallyPaidAmount > 0) && (
            <div className="mb-8 bg-red-50 border-2 border-red-200 rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <span className="text-4xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-pride-dark-red mb-2">Payment Action Required</h3>
                  <p className="text-gray-700 mb-3">
                    You have pending payments totaling <span className="font-bold text-pride-red">₹{(totalPending + partiallyPaidAmount).toLocaleString()}</span>. 
                    Service processing starts only after full payment is received.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    💡 Complete your payments to avoid service delays
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Invoices List */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-50 p-3 rounded-lg">
                <span className="text-3xl">📄</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">All Invoices</h2>
                <p className="text-sm text-gray-500">View and manage your invoices</p>
              </div>
            </div>

            <div className="space-y-4">
              {invoicesData.map((invoice) => (
                <div 
                  key={invoice.id} 
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 bg-gray-50 rounded-lg hover:shadow-md transition-all border border-gray-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{invoice.invoiceNumber}</h3>
                      <StatusBadge 
                        status={getStatusText(invoice.status)} 
                        color={invoice.statusColor as any} 
                      />
                    </div>
                    <p className="text-gray-700 font-medium mb-2">{invoice.service}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>📅 Issued: {new Date(invoice.date).toLocaleDateString('en-IN')}</span>
                      <span>💰 Amount: ₹{invoice.amount.toLocaleString()}</span>
                      {invoice.paidDate && (
                        <span>✅ Paid: {new Date(invoice.paidDate).toLocaleDateString('en-IN')}</span>
                      )}
                      {invoice.status === 'partially-paid' && invoice.paidAmount && (
                        <span>⏳ Paid: ₹{invoice.paidAmount.toLocaleString()} / ₹{invoice.amount.toLocaleString()}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link 
                      to={`/billing/${invoice.id}`}
                      className="bg-white hover:bg-gray-50 border-2 border-pride-red text-pride-red font-semibold px-4 py-2 rounded-lg transition-all"
                    >
                      View Details
                    </Link>
                    {(invoice.status === 'pending' || invoice.status === 'partially-paid') && (
                      <button className="bg-pride-red hover:bg-pride-dark-red text-white font-semibold px-4 py-2 rounded-lg transition-all">
                        Pay Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Payment Info */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">💳</span>
              Payment Information
            </h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p>• Payments can be made via UPI, Net Banking, or Card</p>
              <p>• All transactions are secure and encrypted</p>
              <p>• Service processing begins immediately after payment confirmation</p>
              <p>• Contact support for any payment-related queries</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Billing

