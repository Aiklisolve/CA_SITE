import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Services from './pages/Services/Services'
import ServiceDetail from './pages/Services/ServiceDetail'
import Documents from './pages/Documents/Documents'
import Billing from './pages/Billing/Billing'
import InvoiceDetail from './pages/Billing/InvoiceDetail'
import Profile from './pages/Profile/Profile'
import CADashboard from './pages/CA/Dashboard/Dashboard'
import CAClients from './pages/CA/Clients/Clients'
import CAServices from './pages/CA/Services/Services'
import CATasks from './pages/CA/Tasks/Tasks'
import CAReports from './pages/CA/Reports/Reports'
import CAProfile from './pages/CA/Profile/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      
      {/* Customer Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/billing/:id" element={<InvoiceDetail />} />
      <Route path="/profile" element={<Profile />} />
      
      {/* CA Routes */}
      <Route path="/ca/dashboard" element={<CADashboard />} />
      <Route path="/ca/clients" element={<CAClients />} />
      <Route path="/ca/services" element={<CAServices />} />
      <Route path="/ca/tasks" element={<CATasks />} />
      <Route path="/ca/reports" element={<CAReports />} />
      <Route path="/ca/profile" element={<CAProfile />} />
    </Routes>
  )
}

export default App

