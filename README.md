# PRIDE - Chartered Accountant Website

A complete static demo website for PRIDE Chartered Accountants, featuring a professional company landing page and an ERP-style client portal.

## 🎨 Design Features

- **Branding Colors:**
  - Primary Red: #E50914
  - Dark Red: #B00020
  - White: #FFFFFF
- **Corporate & Professional Design**
- **Responsive Layout**
- **Modern UI with smooth animations**

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **TailwindCSS** for styling
- **React Router** for navigation
- **Static JSON data** (no backend required)

## 📁 Project Structure

```
pride-ca-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Card.tsx
│   │   └── StatusBadge.tsx
│   ├── pages/
│   │   ├── Landing/
│   │   │   └── Landing.tsx
│   │   ├── Login/
│   │   │   └── Login.tsx
│   │   ├── Dashboard/
│   │   │   └── Dashboard.tsx
│   │   ├── Services/
│   │   │   ├── Services.tsx
│   │   │   └── ServiceDetail.tsx
│   │   ├── Documents/
│   │   │   └── Documents.tsx
│   │   ├── Billing/
│   │   │   ├── Billing.tsx
│   │   │   └── InvoiceDetail.tsx
│   │   └── Profile/
│   │       └── Profile.tsx
│   ├── data/
│   │   ├── dashboard.json
│   │   ├── services.json
│   │   ├── invoices.json
│   │   └── documents.json
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── index.html
```

## 📄 Pages

### 1. Landing Page (`/`)
- Hero section with company branding
- Services overview
- How PRIDE Works
- Client portal preview
- Why Choose PRIDE
- Contact information

### 2. Login Page (`/login`)
- Clean login form
- Redirects to dashboard (no real authentication)

### 3. Dashboard (`/dashboard`)
- Service status widgets
- Billing summary with payment alerts
- Upcoming due dates
- Pending actions
- Recent documents

### 4. My Services (`/services`)
- List of all services
- Service status badges
- Payment status indicators

### 5. Service Detail (`/services/:id`)
- Service information
- Payment status
- Timeline tracker
- Documents section

### 6. My Documents (`/documents`)
- Client uploaded documents
- PRIDE generated documents
- Download functionality

### 7. Billing (`/billing`)
- Payment summary cards
- Invoice list
- Payment status tracking

### 8. Invoice Detail (`/billing/:id`)
- Complete invoice view
- Line items
- Payment status
- Payment timeline

### 9. Profile (`/profile`)
- Personal information
- Tax information
- Address details
- Security settings
- Assigned CA information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd "D:\Aiklisolve Projects\CA Project"
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 💳 Payment & Billing Features

The website includes comprehensive payment status tracking:

- **Payment Status Badges**: Paid, Pending, Partially Paid
- **Payment Alerts**: Dashboard widget showing pending payments
- **Service-Payment Link**: Services show payment requirements
- **Invoice Details**: Complete payment tracking and history
- **Payment Timeline**: Visual progress tracking
- **Payment Notices**: Clear messaging that "Service processing starts only after full payment is received"

## 🎯 Key Features

1. **ERP-Style Portal**: Professional client dashboard with sidebar navigation
2. **Payment Tracking**: Complete billing and payment status management
3. **Document Management**: Upload and download functionality
4. **Service Timeline**: Visual progress tracking for each service
5. **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
6. **Modern UI/UX**: Smooth animations, hover effects, and transitions
7. **Corporate Branding**: Consistent red-white theme throughout

## 📝 Demo Data

All data is static and stored in JSON files:
- `dashboard.json` - Dashboard widgets data
- `services.json` - Services list with details
- `invoices.json` - Invoice history
- `documents.json` - Document library

## 🔒 Authentication

This is a demo project with no real authentication. Clicking "Sign In" on the login page will directly navigate to the dashboard.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1366px+)
- Tablet (768px+)
- Mobile (320px+)

## 🎨 Color Scheme

- **Primary Red**: Used for CTAs, highlights, and brand identity
- **Dark Red**: Used for hover states and accents
- **White**: Background and clean spaces
- **Gray Shades**: Text and borders
- **Status Colors**: Green (success), Yellow (warning), Orange (partial), Red (urgent)

## 📞 Support

For any queries or support, contact:
- Email: info@pride.ca
- Phone: +91 98765 43210
- Address: 123 Finance Street, Mumbai, India

## 📄 License

This is a demo project for educational purposes.

---

**Built with ❤️ for PRIDE Chartered Accountants**

