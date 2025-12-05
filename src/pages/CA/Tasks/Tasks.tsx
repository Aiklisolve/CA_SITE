import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import CASidebar from '../../../components/CA/CASidebar'
import Card from '../../../components/Card'
import { getCurrentUser } from '../../../utils/auth'

const CATasks = () => {
  const user = getCurrentUser()
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all')

  // Mock tasks data
  const tasks = [
    {
      id: 1,
      clientId: 1,
      clientName: 'John Doe',
      clientIdNumber: '#12345',
      task: 'Review ITR documents',
      description: 'Review and verify all submitted ITR documents for accuracy',
      priority: 'high' as const,
      status: 'pending',
      dueDate: '2024-12-07',
      assignedDate: '2024-12-01',
      service: 'ITR Filing 2024'
    },
    {
      id: 2,
      clientId: 2,
      clientName: 'Priya Sharma',
      clientIdNumber: '#12346',
      task: 'GST return filing',
      description: 'File monthly GST return for October 2024',
      priority: 'medium' as const,
      status: 'in-progress',
      dueDate: '2024-12-10',
      assignedDate: '2024-12-03',
      service: 'GST Monthly Return'
    },
    {
      id: 3,
      clientId: 3,
      clientName: 'Amit Patel',
      clientIdNumber: '#12347',
      task: 'Audit report preparation',
      description: 'Prepare annual audit report for FY 2023-24',
      priority: 'high' as const,
      status: 'pending',
      dueDate: '2024-12-08',
      assignedDate: '2024-11-25',
      service: 'Annual Audit'
    },
    {
      id: 4,
      clientId: 1,
      clientName: 'John Doe',
      clientIdNumber: '#12345',
      task: 'TDS certificate generation',
      description: 'Generate TDS certificates for Q2 2024',
      priority: 'low' as const,
      status: 'completed',
      dueDate: '2024-12-05',
      assignedDate: '2024-11-20',
      service: 'TDS Filing'
    },
    {
      id: 5,
      clientId: 2,
      clientName: 'Priya Sharma',
      clientIdNumber: '#12346',
      task: 'Client consultation call',
      description: 'Schedule and conduct quarterly consultation',
      priority: 'medium' as const,
      status: 'pending',
      dueDate: '2024-12-12',
      assignedDate: '2024-12-05',
      service: 'Consultation'
    },
    {
      id: 6,
      clientId: 3,
      clientName: 'Amit Patel',
      clientIdNumber: '#12347',
      task: 'Tax planning document review',
      description: 'Review and update tax planning strategy',
      priority: 'medium' as const,
      status: 'in-progress',
      dueDate: '2024-12-15',
      assignedDate: '2024-12-01',
      service: 'Tax Planning'
    },
  ]

  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(t => t.priority === filter)

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: { bg: 'bg-red-100', text: 'text-red-800', label: 'Pending' },
      'in-progress': { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'In Progress' },
      completed: { bg: 'bg-green-100', text: 'text-green-800', label: 'Completed' },
    }
    const badge = badges[status as keyof typeof badges] || badges.pending
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}>
        {badge.label}
      </span>
    )
  }

  const getPriorityBadge = (priority: string) => {
    const badges = {
      high: { bg: 'bg-red-100', text: 'text-red-800', label: '🔴 High' },
      medium: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: '🟡 Medium' },
      low: { bg: 'bg-blue-100', text: 'text-blue-800', label: '🔵 Low' },
    }
    const badge = badges[priority as keyof typeof badges] || badges.medium
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}>
        {badge.label}
      </span>
    )
  }

  const getDaysRemaining = (dueDate: string) => {
    const days = Math.ceil((new Date(dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    return days
  }

  const handleTaskAction = (e: React.MouseEvent, taskId: number, action: string) => {
    e.preventDefault()
    e.stopPropagation()
    // In a real app, this would update task status
    console.log(`Task ${taskId}: ${action}`)
    // Show a user-friendly message instead of alert
    const message = `Task ${action} - This is a demo. In production, this would update the task status.`
    // You can replace this with a toast notification
    console.log(message)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <CASidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Task Management</h1>
            <p className="text-gray-600">Track and manage all your assigned tasks</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Total Tasks</p>
                <p className="text-3xl font-bold text-pride-red">{tasks.length}</p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Pending</p>
                <p className="text-3xl font-bold text-red-600">
                  {tasks.filter(t => t.status === 'pending').length}
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">In Progress</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {tasks.filter(t => t.status === 'in-progress').length}
                </p>
              </div>
            </Card>
            <Card>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium mb-1">Completed</p>
                <p className="text-3xl font-bold text-green-600">
                  {tasks.filter(t => t.status === 'completed').length}
                </p>
              </div>
            </Card>
          </div>

          {/* Filter and Actions */}
          <Card className="mb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">Filter by Priority:</span>
                <div className="flex gap-2">
                  {(['all', 'high', 'medium', 'low'] as const).map((priority) => (
                    <button
                      key={priority}
                      type="button"
                      onClick={() => setFilter(priority)}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                        filter === priority
                          ? 'bg-pride-red text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {priority === 'all' ? 'All' : priority.charAt(0).toUpperCase() + priority.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Tasks List */}
          <div className="space-y-4">
            {filteredTasks.map((task) => {
              const daysRemaining = getDaysRemaining(task.dueDate)
              const isOverdue = daysRemaining < 0
              
              return (
                <Card key={task.id}>
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 bg-pride-red text-white rounded-full flex items-center justify-center font-bold">
                          {task.clientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="text-lg font-bold text-gray-900">{task.task}</h3>
                            {getStatusBadge(task.status)}
                            {getPriorityBadge(task.priority)}
                          </div>
                          <p className="text-gray-700 mb-2">{task.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="font-semibold">Client: {task.clientName} ({task.clientIdNumber})</span>
                            <span>Service: {task.service}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                        <div>
                          <p className="text-gray-500">Assigned Date</p>
                          <p className="font-semibold text-gray-900">
                            {new Date(task.assignedDate).toLocaleDateString('en-IN')}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Due Date</p>
                          <p className={`font-semibold ${isOverdue ? 'text-red-600' : 'text-gray-900'}`}>
                            {new Date(task.dueDate).toLocaleDateString('en-IN')}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Days Remaining</p>
                          <p className={`font-semibold ${isOverdue ? 'text-red-600' : daysRemaining <= 2 ? 'text-orange-600' : 'text-gray-900'}`}>
                            {isOverdue ? `${Math.abs(daysRemaining)} days overdue` : `${daysRemaining} days`}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Status</p>
                          <p className="font-semibold text-gray-900 capitalize">{task.status.replace('-', ' ')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap lg:flex-col">
                      {task.status === 'pending' && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => handleTaskAction(e, task.id, 'start')}
                            className="bg-pride-red hover:bg-pride-dark-red text-white font-semibold px-4 py-2 rounded-lg transition-all"
                          >
                            Start Task
                          </button>
                          <button
                            type="button"
                            onClick={(e) => handleTaskAction(e, task.id, 'view')}
                            className="bg-white hover:bg-gray-50 border-2 border-pride-red text-pride-red font-semibold px-4 py-2 rounded-lg transition-all"
                          >
                            View Details
                          </button>
                        </>
                      )}
                      {task.status === 'in-progress' && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => handleTaskAction(e, task.id, 'complete')}
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-all"
                          >
                            Mark Complete
                          </button>
                          <button
                            type="button"
                            onClick={(e) => handleTaskAction(e, task.id, 'view')}
                            className="bg-white hover:bg-gray-50 border-2 border-pride-red text-pride-red font-semibold px-4 py-2 rounded-lg transition-all"
                          >
                            View Details
                          </button>
                        </>
                      )}
                      {task.status === 'completed' && (
                        <button
                          type="button"
                          onClick={(e) => handleTaskAction(e, task.id, 'view')}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-all"
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}

export default CATasks

