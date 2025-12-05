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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/billing/:id" element={<InvoiceDetail />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App

