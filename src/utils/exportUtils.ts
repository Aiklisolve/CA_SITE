// Export utilities for CSV and PDF generation

interface ServiceData {
  id: number
  title: string
  status: string
  dueDate: string
  assignedCA: string
  description: string
  charge: number
  paymentStatus: string
}

// Export services data to CSV
export const exportServicesToCSV = (services: ServiceData[]) => {
  // CSV headers
  const headers = [
    'Service ID',
    'Service Title',
    'Status',
    'Due Date',
    'Assigned CA',
    'Description',
    'Charge (₹)',
    'Payment Status'
  ]

  // Convert services to CSV rows
  const rows = services.map(service => [
    service.id.toString(),
    service.title,
    service.status,
    new Date(service.dueDate).toLocaleDateString('en-IN'),
    service.assignedCA,
    service.description,
    service.charge.toString(),
    service.paymentStatus
  ])

  // Combine headers and rows
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n')

  // Create blob and download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', `services_report_${new Date().toISOString().split('T')[0]}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

// Export services data to PDF
export const exportServicesToPDF = (services: ServiceData[]) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Services Report</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          color: #333;
        }
        .header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 3px solid #E50914;
        }
        .logo {
          background: #E50914;
          color: white;
          font-weight: bold;
          font-size: 24px;
          padding: 15px 30px;
          border-radius: 8px;
          display: inline-block;
        }
        .report-title {
          font-size: 28px;
          color: #E50914;
          margin: 30px 0;
          font-weight: bold;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 30px 0;
        }
        th {
          background: #E50914;
          color: white;
          padding: 12px;
          text-align: left;
          font-weight: bold;
        }
        td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }
        tr:nth-child(even) {
          background: #f5f5f5;
        }
        .status-badge {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
        }
        .status-in-progress {
          background: #ffc107;
          color: #000;
        }
        .status-pending {
          background: #f44336;
          color: white;
        }
        .status-completed {
          background: #4caf50;
          color: white;
        }
        .status-pending-docs {
          background: #ff9800;
          color: white;
        }
        .footer {
          margin-top: 50px;
          padding-top: 20px;
          border-top: 2px solid #ddd;
          text-align: center;
          color: #666;
          font-size: 12px;
        }
        .summary {
          background: #f5f5f5;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .summary-item {
          display: inline-block;
          margin-right: 30px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="logo">PRIDE</div>
          <p style="margin-top: 10px; margin-bottom: 5px;">Chartered Accountants</p>
          <p style="margin: 0; font-size: 12px;">123 Finance Street, Mumbai, India</p>
          <p style="margin: 5px 0; font-size: 12px;">📧 info@pride.ca | 📞 +91 98765 43210</p>
        </div>
        <div style="text-align: right;">
          <p style="margin: 0; font-size: 12px; color: #666;">Report Date</p>
          <p style="margin: 5px 0; font-weight: bold;">${new Date().toLocaleDateString('en-IN')}</p>
        </div>
      </div>

      <div class="report-title">Services Report</div>

      <div class="summary">
        <div class="summary-item">
          <strong>Total Services:</strong> ${services.length}
        </div>
        <div class="summary-item">
          <strong>In Progress:</strong> ${services.filter(s => s.status === 'in-progress').length}
        </div>
        <div class="summary-item">
          <strong>Pending:</strong> ${services.filter(s => s.status === 'pending' || s.status === 'pending-docs').length}
        </div>
        <div class="summary-item">
          <strong>Completed:</strong> ${services.filter(s => s.status === 'completed').length}
        </div>
        <div class="summary-item">
          <strong>Total Amount:</strong> ₹${services.reduce((sum, s) => sum + s.charge, 0).toLocaleString()}
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Service Title</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Assigned CA</th>
            <th>Charge (₹)</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          ${services.map(service => {
            const statusClass = `status-${service.status.replace('-', '-')}`
            const statusText = service.status === 'in-progress' ? 'In Progress' 
              : service.status === 'pending-docs' ? 'Pending Docs'
              : service.status.charAt(0).toUpperCase() + service.status.slice(1)
            
            return `
              <tr>
                <td>${service.id}</td>
                <td>${service.title}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td>${new Date(service.dueDate).toLocaleDateString('en-IN')}</td>
                <td>${service.assignedCA}</td>
                <td>₹${service.charge.toLocaleString()}</td>
                <td>${service.paymentStatus === 'paid' ? '✅ Paid' : service.paymentStatus === 'pending' ? '⏰ Pending' : '⏳ Partial'}</td>
              </tr>
            `
          }).join('')}
        </tbody>
      </table>

      <div class="footer">
        <p>This is an official report from PRIDE Chartered Accountants.</p>
        <p>Generated on ${new Date().toLocaleString('en-IN')}</p>
      </div>
    </body>
    </html>
  `

  // Create blob and download
  const blob = new Blob([htmlContent], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `services_report_${new Date().toISOString().split('T')[0]}.html`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)

  // Also open in new window for printing/saving as PDF
  const printWindow = window.open('', '_blank')
  if (printWindow) {
    printWindow.document.write(htmlContent)
    printWindow.document.close()
    setTimeout(() => {
      printWindow.print()
    }, 250)
  }
}

