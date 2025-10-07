'use client'

import { memo } from 'react'
import Link from 'next/link'
import { ExternalLink, BookOpen, Users, HelpCircle, Mail } from 'lucide-react'
import { NewsletterSubscription } from '@/components/ui/newsletter-subscription'
import type { FooterSection } from '@/lib/types/cross-linking'

interface FooterSectionComponentProps {
  section: FooterSection
}

const iconMap = {
  "Quick Links": <BookOpen className="h-6 w-6" />,
  "Connect": <Users className="h-6 w-6" />,
  "Legal": <HelpCircle className="h-6 w-6" />,
  "Join our Mailing List": <Mail className="h-6 w-6" />
}

const iconColors = {
  "Quick Links": "text-blue-400",
  "Connect": "text-green-400",
  "Legal": "text-purple-400",
  "Join our Mailing List": "text-orange-400"
}

export const FooterSectionComponent = memo(function FooterSectionComponent({ section }: FooterSectionComponentProps) {
  const icon = iconMap[section.title as keyof typeof iconMap] || null
  const iconColor = iconColors[section.title as keyof typeof iconColors] || 'text-gray-400'

  return (
    <div>
      <h3 className={`text-lg font-semibold mb-6 flex items-center text-white`}>
        <span className={`h-5 w-5 mr-3 ${iconColor}`}>
          {icon}
        </span>
        {section.title}
      </h3>
      
      {section.links.length > 0 ? (
        <ul className="space-y-3">
          {section.links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center group"
              >
                {link.name}
                {link.external && <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p className="text-gray-200 mb-4 text-sm leading-relaxed">
            Get updates on new chapters, AI development insights, and exclusive content from our blog.
          </p>
          <NewsletterSubscription 
            variant="footer"
            placeholder="Enter your email"
            buttonText="Subscribe"
            successMessage="Successfully subscribed to our newsletter!"
          />
        </div>
      )}
    </div>
  )
})
