import Navbar from '../../../components/Navbar'
import CASidebar from '../../../components/CA/CASidebar'
import Card from '../../../components/Card'

const CAReports = () => {
  // Mock reports data
  const monthlyStats = [
    { month: 'December 2024', services: 12, revenue: 45000, clients: 8 },
    { month: 'November 2024', services: 15, revenue: 52000, clients: 10 },
    { month: 'October 2024', services: 18, revenue: 65000, clients: 12 },
  ]

  const serviceBreakdown = [
    { service: 'ITR Filing', count: 25, revenue: 62500 },
    { service: 'GST Filing', count: 18, revenue: 27000 },
    { service: 'TDS Filing', count: 12, revenue: 36000 },
    { service: 'Audit Services', count: 5, revenue: 25000 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <CASidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
            <p className="text-gray-600">View performance metrics and insights</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Total Services (This Month)</p>
                <p className="text-3xl font-bold text-pride-red">12</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Revenue (This Month)</p>
                <p className="text-3xl font-bold text-green-600">₹45,000</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Active Clients</p>
                <p className="text-3xl font-bold text-blue-600">8</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Completion Rate</p>
                <p className="text-3xl font-bold text-purple-600">92%</p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Performance */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <span className="text-3xl">📊</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Monthly Performance</h2>
                  <p className="text-sm text-gray-500">Last 3 months overview</p>
                </div>
              </div>

              <div className="space-y-4">
                {monthlyStats.map((stat, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{stat.month}</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Services</p>
                        <p className="font-bold text-gray-900">{stat.services}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Revenue</p>
                        <p className="font-bold text-green-600">₹{stat.revenue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Clients</p>
                        <p className="font-bold text-blue-600">{stat.clients}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Service Breakdown */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <span className="text-3xl">📋</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Service Breakdown</h2>
                  <p className="text-sm text-gray-500">Services by category</p>
                </div>
              </div>

              <div className="space-y-4">
                {serviceBreakdown.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{item.service}</h3>
                      <span className="px-3 py-1 bg-pride-red text-white rounded-full text-xs font-semibold">
                        {item.count}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">Total Revenue</p>
                      <p className="font-bold text-green-600">₹{item.revenue.toLocaleString()}</p>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-pride-red h-2 rounded-full"
                        style={{ width: `${(item.revenue / 150500) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Export Options */}
          <Card className="mt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-50 p-3 rounded-lg">
                <span className="text-3xl">📥</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Export Reports</h2>
                <p className="text-sm text-gray-500">Download reports in various formats</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-white hover:bg-gray-50 border-2 border-pride-red text-pride-red font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                <span>📄</span>
                <span>Export as PDF</span>
              </button>
              <button className="bg-white hover:bg-gray-50 border-2 border-pride-red text-pride-red font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                <span>📊</span>
                <span>Export as Excel</span>
              </button>
              <button className="bg-white hover:bg-gray-50 border-2 border-pride-red text-pride-red font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                <span>📈</span>
                <span>Export as CSV</span>
              </button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}

export default CAReports

