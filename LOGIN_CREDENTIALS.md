# 🔐 PRIDE CA Portal - Login Credentials & Role-Based Features

## 👤 Customer Login Credentials

### Customer 1
- **Email:** `customer1@pride.ca`
- **Password:** `customer123`
- **Name:** John Doe
- **Client ID:** #12345
- **Assigned CA:** Rajesh Kumar

### Customer 2
- **Email:** `customer2@pride.ca`
- **Password:** `customer123`
- **Name:** Priya Sharma
- **Client ID:** #12346
- **Assigned CA:** Rajesh Kumar

### Customer 3
- **Email:** `customer3@pride.ca`
- **Password:** `customer123`
- **Name:** Amit Patel
- **Client ID:** #12347
- **Assigned CA:** Sneha Desai

---

## 👨‍💼 Chartered Accountant (CA) Login Credentials

### CA 1 - Rajesh Kumar
- **Email:** `rajesh.kumar@pride.ca`
- **Password:** `ca123`
- **CA ID:** CA-001
- **Designation:** Senior Chartered Accountant
- **Assigned Clients:** John Doe, Priya Sharma

### CA 2 - Sneha Desai
- **Email:** `sneha.desai@pride.ca`
- **Password:** `ca123`
- **CA ID:** CA-002
- **Designation:** Chartered Accountant
- **Assigned Clients:** Amit Patel

### CA 3 - Vijay Singh
- **Email:** `vijay.singh@pride.ca`
- **Password:** `ca123`
- **CA ID:** CA-003
- **Designation:** Senior Chartered Accountant
- **Assigned Clients:** None (can be assigned)

---

## 🎯 Role-Based Features

### 👤 Customer Portal Features

After logging in as a customer, you can access:

1. **Dashboard** (`/dashboard`)
   - Service status overview
   - Billing summary with payment alerts
   - Recent documents
   - Pending actions

2. **My Services** (`/services`)
   - View all active services
   - Service status tracking
   - Payment status indicators
   - Service timeline

3. **Service Detail** (`/services/:id`)
   - Detailed service information
   - Payment status
   - Timeline tracker
   - Documents section

4. **My Documents** (`/documents`)
   - Client uploaded documents
   - PRIDE generated documents
   - Download functionality
   - Upload new documents

5. **Billing** (`/billing`)
   - Payment summary cards
   - Invoice list
   - Payment status tracking
   - Download invoice PDFs

6. **Invoice Detail** (`/billing/:id`)
   - Complete invoice view
   - Line items breakdown
   - Payment status
   - Payment timeline
   - Download invoice PDF

7. **Profile** (`/profile`)
   - Personal information
   - Tax information
   - Address details
   - Security settings
   - Assigned CA information

---

### 👨‍💼 CA Portal Features

After logging in as a CA, you can access:

1. **CA Dashboard** (`/ca/dashboard`)
   - Total clients overview
   - Active services count
   - Pending tasks
   - Completed services (monthly)
   - Total revenue
   - Pending payments
   - Recent clients list
   - Pending tasks with priorities

2. **My Clients** (`/ca/clients`)
   - List of all assigned clients
   - Client details (email, phone, services)
   - Total invoices per client
   - Pending payments
   - Last activity tracking
   - Quick access to client services

3. **Service Management** (`/ca/services`)
   - All client services overview
   - Service status tracking
   - Payment status indicators
   - Due date tracking
   - Document management
   - Priority-based task list

4. **CA Sidebar Navigation**
   - Dashboard
   - My Clients
   - Services
   - Tasks (coming soon)
   - Reports (coming soon)
   - Profile

---

## 🔄 Authentication Flow

1. **Login Page** (`/login`)
   - Email/password authentication
   - Role-based routing after login
   - Customers → `/dashboard`
   - CAs → `/ca/dashboard`

2. **Session Management**
   - User data stored in localStorage
   - Auto-logout on page refresh (demo mode)
   - Role-based access control

3. **Navigation**
   - Customers see customer sidebar
   - CAs see CA sidebar
   - Different navigation menus per role

---

## 🎨 Key Features

### Role-Based Access
- Different dashboards for Customers and CAs
- Role-specific navigation menus
- User information displayed based on role

### PDF Downloads
- Invoice PDF generation and download
- Document downloads
- Professional formatting with PRIDE branding

### Data Management
- Client assignment tracking
- Service status management
- Payment tracking
- Document management

---

## 📝 Quick Start Guide

1. **For Customers:**
   - Go to `/login`
   - Use any customer credential above
   - Access your personalized dashboard

2. **For CAs:**
   - Go to `/login`
   - Use any CA credential above
   - Access CA dashboard to manage clients

3. **Testing:**
   - Try different user roles
   - Test PDF downloads
   - Explore role-specific features

---

## 🚀 Future Enhancements

- Task management system
- Reports and analytics
- Client communication portal
- Document upload for CAs
- Advanced filtering and search
- Real-time notifications

---

**Note:** This is a demo application. All authentication is simulated and data is stored locally in the browser.

