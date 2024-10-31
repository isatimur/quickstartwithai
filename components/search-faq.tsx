'use client'

import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { useSearchStore } from '@/lib/hooks/use-faq-search'

export function SearchFAQ() {
    const { searchQuery, setSearchQuery } = useSearchStore()

    return (
        <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
                type="search"
                placeholder="Search FAQs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}