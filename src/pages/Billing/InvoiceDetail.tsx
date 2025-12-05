import { useParams, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import StatusBadge from '../../components/StatusBadge'
import invoicesData from '../../data/invoices.json'

const InvoiceDetail = () => {
  const { id } = useParams()
  const invoice = invoicesData.find(inv => inv.id === Number(id))

  if (!invoice) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar isPortal />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <div className="text-center py-12">
              <p className="text-2xl text-gray-600">Invoice not found</p>
              <Link to="/billing" className="btn-primary inline-block mt-4">
                Back to Billing
              </Link>
            </div>
          </main>
        </div>
      </div>
    )
  }

  const getStatusText = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'paid': 'Paid',
      'pending': 'Pending',
      'partially-paid': 'Partially Paid',
    }
    return statusMap[status] || status
  }

  const remainingAmount = invoice.status === 'partially-paid' && invoice.paidAmount
    ? invoice.amount - invoice.paidAmount
    : invoice.amount

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="mb-6">
            <Link to="/billing" className="text-pride-red hover:text-pride-dark-red font-semibold mb-4 inline-block">
              ← Back to Billing
            </Link>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Invoice {invoice.invoiceNumber}</h1>
                <p className="text-gray-600">{invoice.service}</p>
              </div>
              <StatusBadge 
                status={getStatusText(invoice.status)} 
                color={invoice.statusColor as any} 
              />
            </div>
          </div>

          {/* Invoice Card */}
          <Card className="mb-6">
            <div className="border-b pb-6 mb-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="bg-pride-red text-white font-bold text-2xl px-6 py-3 rounded-lg inline-block mb-4">
                    PRIDE
                  </div>
                  <p className="text-sm text-gray-600">Chartered Accountants</p>
                  <p className="text-sm text-gray-600">123 Finance Street, Mumbai, India</p>
                  <p className="text-sm text-gray-600">📧 info@pride.ca | 📞 +91 98765 43210</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Invoice Number</p>
                  <p className="text-2xl font-bold text-gray-900">{invoice.invoiceNumber}</p>
                  <p className="text-sm text-gray-600 mt-3">
                    Issue Date: {new Date(invoice.date).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Bill To:</p>
                <p className="font-semibold text-gray-900">John Doe</p>
                <p className="text-sm text-gray-600">Client ID: #12345</p>
                <p className="text-sm text-gray-600">john.doe@example.com</p>
              </div>
            </div>

            {/* Line Items */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Invoice Details</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 text-gray-700 font-semibold">Description</th>
                    <th className="text-right py-3 text-gray-700 font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.lineItems.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 text-gray-900">{item.description}</td>
                      <td className="py-3 text-right text-gray-900 font-semibold">₹{item.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-300 font-bold">
                    <td className="py-4 text-lg">Total Amount</td>
                    <td className="py-4 text-right text-xl text-pride-red">₹{invoice.amount.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Payment Status Section */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Payment Status</h3>
              
              {invoice.status === 'paid' && (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">✅</span>
                    <div>
                      <p className="font-bold text-green-800">Payment Completed</p>
                      <p className="text-sm text-green-700">
                        Paid on {new Date(invoice.paidDate!).toLocaleDateString('en-IN')}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {invoice.status === 'pending' && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">⚠️</span>
                    <div>
                      <p className="font-bold text-red-800">Payment Pending</p>
                      <p className="text-sm text-red-700">Amount Due: ₹{invoice.amount.toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-4 bg-white p-3 rounded border-l-4 border-pride-red">
                    <strong>Important:</strong> After full payment, your service will move to processing. Service processing starts only after full payment is received.
                  </p>
                  <button className="btn-primary w-full">
                    💳 Pay Now - ₹{invoice.amount.toLocaleString()}
                  </button>
                </div>
              )}

              {invoice.status === 'partially-paid' && invoice.paidAmount && (
                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">⏳</span>
                    <div>
                      <p className="font-bold text-orange-800">Partially Paid</p>
                      <p className="text-sm text-orange-700">
                        Paid: ₹{invoice.paidAmount.toLocaleString()} / ₹{invoice.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 bg-white rounded-lg p-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Payment Progress</span>
                      <span className="font-semibold">{Math.round((invoice.paidAmount / invoice.amount) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-pride-red h-3 rounded-full transition-all"
                        style={{ width: `${(invoice.paidAmount / invoice.amount) * 100}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-4 bg-white p-3 rounded border-l-4 border-pride-red">
                    <strong>Remaining Amount:</strong> ₹{remainingAmount.toLocaleString()}. Service processing starts only after full payment is received.
                  </p>
                  <button className="btn-primary w-full">
                    💳 Pay Remaining - ₹{remainingAmount.toLocaleString()}
                  </button>
                </div>
              )}
            </div>
          </Card>

          {/* Payment Timeline */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <span className="text-3xl">📊</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Payment Timeline</h2>
                <p className="text-sm text-gray-500">Track your payment status</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div className="w-0.5 h-12 bg-green-500" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-semibold text-gray-900 mb-1">Invoice Generated</h3>
                  <p className="text-sm text-gray-500">{new Date(invoice.date).toLocaleDateString('en-IN')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div className={`w-0.5 h-12 ${invoice.status === 'paid' ? 'bg-green-500' : 'bg-gray-300'}`} />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-semibold text-gray-900 mb-1">Invoice Sent</h3>
                  <p className="text-sm text-gray-500">Sent to registered email</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    invoice.status === 'paid' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {invoice.status === 'paid' ? '✓' : '3'}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Payment Received</h3>
                  {invoice.status === 'paid' ? (
                    <p className="text-sm text-gray-500">{new Date(invoice.paidDate!).toLocaleDateString('en-IN')}</p>
                  ) : (
                    <p className="text-sm text-gray-500">Awaiting payment</p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}

export default InvoiceDetail

