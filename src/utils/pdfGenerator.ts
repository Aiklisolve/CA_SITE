// PDF Generator utility for invoices and documents
// Creates downloadable PDF-like content

interface InvoiceData {
  invoiceNumber: string
  date: string
  amount: number
  service: string
  status: string
  lineItems: Array<{ description: string; amount: number }>
  paidDate?: string | null
  paidAmount?: number
}

// Generate Invoice PDF as downloadable content
export const generateInvoicePDF = (invoice: InvoiceData) => {
  // Create a printable HTML content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Invoice ${invoice.invoiceNumber}</title>
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
        .invoice-info {
          text-align: right;
        }
        .invoice-info h2 {
          margin: 0 0 10px 0;
          color: #E50914;
          font-size: 28px;
        }
        .details {
          margin: 30px 0;
        }
        .bill-to {
          background: #f5f5f5;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 30px;
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
        }
        td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }
        .total-row {
          background: #f5f5f5;
          font-weight: bold;
          font-size: 18px;
        }
        .total-amount {
          color: #E50914;
          font-size: 24px;
        }
        .status {
          margin-top: 30px;
          padding: 15px;
          border-radius: 5px;
          text-align: center;
        }
        .status.paid {
          background: #d4edda;
          color: #155724;
          border: 2px solid #c3e6cb;
        }
        .status.pending {
          background: #f8d7da;
          color: #721c24;
          border: 2px solid #f5c6cb;
        }
        .status.partially-paid {
          background: #fff3cd;
          color: #856404;
          border: 2px solid #ffeaa7;
        }
        .footer {
          margin-top: 50px;
          padding-top: 20px;
          border-top: 2px solid #ddd;
          text-align: center;
          color: #666;
          font-size: 12px;
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
        <div class="invoice-info">
          <h2>INVOICE</h2>
          <p><strong>Invoice #:</strong> ${invoice.invoiceNumber}</p>
          <p><strong>Date:</strong> ${new Date(invoice.date).toLocaleDateString('en-IN')}</p>
        </div>
      </div>

      <div class="details">
        <div class="bill-to">
          <p style="margin: 0 0 5px 0; font-size: 14px; color: #666;">Bill To:</p>
          <p style="margin: 5px 0; font-weight: bold; font-size: 16px;">John Doe</p>
          <p style="margin: 5px 0; font-size: 14px;">Client ID: #12345</p>
          <p style="margin: 5px 0; font-size: 14px;">john.doe@example.com</p>
        </div>

        <p style="font-weight: bold; margin-bottom: 10px;">Service: ${invoice.service}</p>

        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th style="text-align: right;">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            ${invoice.lineItems.map(item => `
              <tr>
                <td>${item.description}</td>
                <td style="text-align: right;">₹${item.amount.toLocaleString()}</td>
              </tr>
            `).join('')}
            <tr class="total-row">
              <td>Total Amount</td>
              <td style="text-align: right;" class="total-amount">₹${invoice.amount.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>

        <div class="status ${invoice.status}">
          ${invoice.status === 'paid' ? `
            <p style="margin: 0; font-weight: bold; font-size: 16px;">✅ Payment Completed</p>
            ${invoice.paidDate ? `<p style="margin: 5px 0 0 0; font-size: 14px;">Paid on ${new Date(invoice.paidDate).toLocaleDateString('en-IN')}</p>` : ''}
          ` : invoice.status === 'partially-paid' && invoice.paidAmount ? `
            <p style="margin: 0; font-weight: bold; font-size: 16px;">⏳ Partially Paid</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Paid: ₹${invoice.paidAmount.toLocaleString()} / ₹${invoice.amount.toLocaleString()}</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Remaining: ₹${(invoice.amount - invoice.paidAmount).toLocaleString()}</p>
          ` : `
            <p style="margin: 0; font-weight: bold; font-size: 16px;">⚠️ Payment Pending</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Amount Due: ₹${invoice.amount.toLocaleString()}</p>
          `}
        </div>
      </div>

      <div class="footer">
        <p>Thank you for choosing PRIDE Chartered Accountants!</p>
        <p>This is an auto-generated invoice. For any queries, please contact us.</p>
      </div>
    </body>
    </html>
  `

  // Create blob and download
  const blob = new Blob([htmlContent], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `Invoice_${invoice.invoiceNumber}.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)

  // Also open in new window for printing/saving as PDF
  const printWindow = window.open('', '_blank')
  if (printWindow) {
    printWindow.document.write(htmlContent)
    printWindow.document.close()
    // Auto-print dialog (user can choose to save as PDF)
    setTimeout(() => {
      printWindow.print()
    }, 250)
  }
}

// Generate Document Download
export const downloadDocument = (documentName: string, content?: string) => {
  // Create HTML content that can be printed/saved as PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${documentName}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          color: #333;
          line-height: 1.6;
        }
        .header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
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
        .document-title {
          font-size: 28px;
          color: #E50914;
          margin: 30px 0;
          font-weight: bold;
        }
        .document-info {
          background: #f5f5f5;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .content {
          margin: 30px 0;
          min-height: 300px;
        }
        .footer {
          margin-top: 50px;
          padding-top: 20px;
          border-top: 2px solid #ddd;
          text-align: center;
          color: #666;
          font-size: 12px;
        }
        @media print {
          body { margin: 0; }
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
          <p style="margin: 0; font-size: 12px; color: #666;">Document Date</p>
          <p style="margin: 5px 0; font-weight: bold;">${new Date().toLocaleDateString('en-IN')}</p>
        </div>
      </div>

      <div class="document-title">${documentName.replace('.pdf', '')}</div>

      <div class="document-info">
        <p style="margin: 0 0 5px 0; font-size: 14px; color: #666;">Client Information:</p>
        <p style="margin: 5px 0; font-weight: bold; font-size: 16px;">John Doe</p>
        <p style="margin: 5px 0; font-size: 14px;">Client ID: #12345</p>
        <p style="margin: 5px 0; font-size: 14px;">john.doe@example.com</p>
      </div>

      <div class="content">
        ${content || `
          <p>This is an official document generated by PRIDE Chartered Accountants.</p>
          <p>The document contains important information related to your account and services.</p>
          <p>Please keep this document safe for your records.</p>
          <br/>
          <p><strong>Document Details:</strong></p>
          <ul>
            <li>Document Name: ${documentName}</li>
            <li>Generated Date: ${new Date().toLocaleDateString('en-IN')}</li>
            <li>Status: Verified and Certified</li>
          </ul>
        `}
      </div>

      <div class="footer">
        <p>This is an official document from PRIDE Chartered Accountants.</p>
        <p>For any queries, please contact us at info@pride.ca</p>
      </div>
    </body>
    </html>
  `

  // Create blob and download
  const blob = new Blob([htmlContent], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = documentName.endsWith('.pdf') ? documentName : `${documentName}.html`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)

  // Also open in new window for printing/saving as PDF
  const printWindow = window.open('', '_blank')
  if (printWindow) {
    printWindow.document.write(htmlContent)
    printWindow.document.close()
    // Auto-print dialog (user can choose to save as PDF)
    setTimeout(() => {
      printWindow.print()
    }, 250)
  }
}

// Generate a simple PDF statement for invoices (alternative method)
export const downloadInvoiceAsPDF = (invoice: InvoiceData) => {
  generateInvoicePDF(invoice)
}

