// Authentication utility for role-based access

export interface User {
  id: number
  email: string
  password: string
  role: 'customer' | 'ca'
  name: string
  clientId?: string
  caId?: string
  designation?: string
  assignedCA?: {
    id: number
    name: string
    email: string
  }
  assignedClients?: number[]
}

// Store current user in localStorage
export const setCurrentUser = (user: User) => {
  // Remove password before storing
  const { password, ...userWithoutPassword } = user
  localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
}

// Get current user from localStorage
export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser')
  if (!userStr) return null
  try {
    return JSON.parse(userStr) as User
  } catch {
    return null
  }
}

// Clear current user (logout)
export const clearCurrentUser = () => {
  localStorage.removeItem('currentUser')
}

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null
}

// Check user role
export const isCustomer = (): boolean => {
  const user = getCurrentUser()
  return user?.role === 'customer'
}

export const isCA = (): boolean => {
  const user = getCurrentUser()
  return user?.role === 'ca'
}

// Get user role
export const getUserRole = (): 'customer' | 'ca' | null => {
  const user = getCurrentUser()
  return user?.role || null
}

