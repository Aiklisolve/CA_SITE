import { ReactNode, forwardRef } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  id?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className = '', hover = true, id }, ref) => {
  return (
    <div ref={ref} id={id} className={`card ${hover ? 'hover:shadow-xl' : ''} ${className}`}>
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export default Card

