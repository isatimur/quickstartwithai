'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle, AlertCircle, LoaderCircle } from 'lucide-react'

interface NewsletterSubscriptionProps {
  className?: string
  placeholder?: string
  buttonText?: string
  successMessage?: string
  variant?: 'default' | 'footer' | 'inline'
}

export function NewsletterSubscription({
  className = '',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  successMessage = 'Successfully subscribed!',
  variant = 'default'
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(successMessage)
        setEmail('')
        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to subscribe')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  const getInputStyles = () => {
    switch (variant) {
      case 'footer':
        return 'w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
      case 'inline':
        return 'flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
      default:
        return 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
    }
  }

  const getButtonStyles = () => {
    switch (variant) {
      case 'footer':
        return 'w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed'
      case 'inline':
        return 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed'
      default:
        return 'w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed'
    }
  }

  const getMessageStyles = () => {
    const baseStyles = 'text-sm mt-2 flex items-center'
    switch (status) {
      case 'success':
        return `${baseStyles} text-green-400`
      case 'error':
        return `${baseStyles} text-red-400`
      default:
        return `${baseStyles} text-gray-400`
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className={getInputStyles()}
            disabled={status === 'loading'}
            required
          />
          <Button
            type="submit"
            disabled={status === 'loading'}
            className={getButtonStyles()}
          >
            {status === 'loading' ? (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                {buttonText}
              </>
            )}
          </Button>
        </div>
        
        {message && (
          <div className={getMessageStyles()}>
            {status === 'success' ? (
              <CheckCircle className="mr-2 h-4 w-4" />
            ) : status === 'error' ? (
              <AlertCircle className="mr-2 h-4 w-4" />
            ) : null}
            {message}
          </div>
        )}
      </form>
      
      {variant === 'footer' && (
        <p className="text-gray-400 text-xs mt-2">
          Subscribe to get updates from{' '}
          <a 
            href="https://blog.quickstartgenai.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            blog.quickstartgenai.com
          </a>
        </p>
      )}
    </div>
  )
}
