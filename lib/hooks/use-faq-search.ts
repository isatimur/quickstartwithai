import { create } from 'zustand'
import { faqData, FAQCategory, FAQItem } from '@/lib/constants/faq-data'

type SearchStore = {
    searchQuery: string
    setSearchQuery: (query: string) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
    searchQuery: '',
    setSearchQuery: (query) => set({ searchQuery: query }),
}))

export const filterFAQs = (category: FAQCategory, searchQuery: string): FAQItem[] => {
    const categoryFAQs = faqData[category]
    if (!searchQuery.trim()) return categoryFAQs

    const query = searchQuery.toLowerCase()
    return categoryFAQs.filter(
        faq =>
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query)
    )
}