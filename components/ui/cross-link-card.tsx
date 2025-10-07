'use client'

import { memo } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import type { CrossLinkItem } from '@/lib/types/cross-linking'

interface CrossLinkCardProps {
  item: CrossLinkItem
}

export const CrossLinkCard = memo(function CrossLinkCard({ item }: CrossLinkCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>
        <div className="flex items-center justify-center gap-2">
          <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
          {item.badge && (
            <Badge variant="secondary" className="text-xs">
              {item.badge}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="text-center pt-0">
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {item.description}
        </p>
        <Button 
          asChild 
          variant={item.variant}
          className="w-full group-hover:shadow-lg transition-all duration-300"
          size="sm"
        >
          <Link 
            href={item.href} 
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.title === "Get the Book" ? (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Buy Now
              </>
            ) : (
              <>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
})
