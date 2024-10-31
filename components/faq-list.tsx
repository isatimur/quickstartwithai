'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useSearchStore, filterFAQs } from '@/lib/hooks/use-faq-search'
import type { FAQCategory, FAQItem } from '@/lib/constants/faq-data'

export function FAQList({ category }: { category: FAQCategory }) {
    const { searchQuery } = useSearchStore()
    const filteredFAQs = filterFAQs(category, searchQuery)

    if (filteredFAQs.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                No FAQs found matching your search.
            </div>
        )
    }

    return (
        <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((item: FAQItem, index: number) => (
                <AccordionItem
                    key={`${category}-${index}`}
                    value={`${category}-${index}`}
                    className="bg-white rounded-lg shadow-sm border"
                >
                    <AccordionTrigger className="px-4 py-4 hover:bg-gray-50">
                        <span className="text-left">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-4 text-gray-600">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}