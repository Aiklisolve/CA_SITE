// Login authentication utility
import usersData from '../data/users.json'
import { User, setCurrentUser } from './auth'

export const authenticateUser = (email: string, password: string): { success: boolean; user?: User; error?: string } => {
  const users = usersData as User[]
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
  
  if (!user) {
    return { success: false, error: 'Invalid email or password' }
  }
  
  setCurrentUser(user)
  return { success: true, user }
}

export const getRoleBasedRedirect = (role: 'customer' | 'ca'): string => {
  if (role === 'ca') {
    return '/ca/dashboard'
  }
  return '/dashboard'
}

