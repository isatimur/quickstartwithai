import { NavBar } from '@/components/NavBar'

// Design System Constants for Consistent Styling
export const DESIGN_SYSTEM = {
  // Color Palette
  colors: {
    primary: {
      blue: 'blue-600',
      blueHover: 'blue-700',
      blueLight: 'blue-50',
      blueBorder: 'blue-200'
    },
    secondary: {
      gray: 'gray-600',
      grayHover: 'gray-700',
      grayLight: 'gray-50',
      grayBorder: 'gray-200'
    },
    accent: {
      green: 'green-600',
      greenHover: 'green-700',
      greenLight: 'green-50',
      greenBorder: 'green-200'
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500'
    },
    background: {
      white: 'bg-white',
      light: 'bg-gray-50',
      dark: 'bg-gray-900'
    }
  },

  // Typography
  typography: {
    headings: {
      h1: 'text-4xl md:text-5xl font-bold text-gray-900',
      h2: 'text-3xl md:text-4xl font-bold text-gray-900',
      h3: 'text-2xl font-bold text-gray-900',
      h4: 'text-xl font-semibold text-gray-900'
    },
    body: {
      large: 'text-xl text-gray-600',
      medium: 'text-lg text-gray-600',
      small: 'text-sm text-gray-600'
    }
  },

  // Spacing
  spacing: {
    section: 'py-16 md:py-20',
    container: 'container mx-auto px-4',
    content: 'max-w-4xl mx-auto'
  },

  // Components
  components: {
    card: 'bg-white rounded-xl shadow-lg p-8',
    cardSmall: 'bg-white rounded-lg shadow-md p-6',
    button: {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors',
      secondary: 'bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors',
      outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors'
    },
    input: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500',
    badge: 'inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors'
  },

  // Layout Patterns
  layout: {
    page: 'min-h-screen bg-white',
    pageWithGradient: 'min-h-screen bg-gradient-to-b from-blue-50 to-white',
    pageWithGray: 'min-h-screen bg-gray-50',
    section: 'py-16 md:py-20',
    container: 'container mx-auto px-4',
    content: 'max-w-4xl mx-auto',
    grid: {
      twoCol: 'grid md:grid-cols-2 gap-8',
      threeCol: 'grid md:grid-cols-3 gap-8',
      fourCol: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8'
    }
  }
} as const

// Common Page Layout Component
export const PageLayout = ({ 
  children, 
  background = 'white',
  showNavBar = true 
}: { 
  children: React.ReactNode
  background?: 'white' | 'gradient' | 'gray'
  showNavBar?: boolean
}) => {
  const bgClass = background === 'gradient' 
    ? 'min-h-screen bg-gradient-to-b from-blue-50 to-white'
    : background === 'gray'
    ? 'min-h-screen bg-gray-50'
    : 'min-h-screen bg-white'

  return (
    <div className={bgClass}>
      {showNavBar && <NavBar />}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}

// Common Section Header Component
export const SectionHeader = ({ 
  title, 
  subtitle, 
  className = '' 
}: { 
  title: string
  subtitle?: string
  className?: string 
}) => (
  <div className={`text-center mb-12 ${className}`}>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      {title}
    </h1>
    {subtitle && (
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
)

// Common Card Component
export const Card = ({ 
  children, 
  className = '',
  variant = 'default'
}: { 
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'small' | 'highlighted'
}) => {
  const baseClass = variant === 'small' 
    ? 'bg-white rounded-lg shadow-md p-6'
    : variant === 'highlighted'
    ? 'bg-blue-50 rounded-lg p-8 border border-blue-200'
    : 'bg-white rounded-xl shadow-lg p-8'

  return (
    <div className={`${baseClass} ${className}`}>
      {children}
    </div>
  )
}

// Common Button Component
export const Button = ({ 
  children, 
  variant = 'primary',
  className = '',
  href,
  external = false,
  ...props
}: { 
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  href?: string
  external?: boolean
  [key: string]: unknown
}) => {
  const baseClass = variant === 'primary'
    ? 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
    : variant === 'secondary'
    ? 'bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
    : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors'

  const buttonClass = `${baseClass} ${className}`

  if (href) {
    return (
      <a 
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={buttonClass}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}
