'use client'

import { Suspense } from 'react'
import { NavBar } from "@/components/NavBar"
import { faqCategories } from '@/lib/constants/faq-data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchFAQ } from '@/components/search-faq'
import { FAQList } from '@/components/faq-list'

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white">
            <NavBar />
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-600 mb-8 text-center">
                        Find answers to common questions about Generative AI development
                    </p>

                    <SearchFAQ />

                    <Tabs defaultValue="basics" className="w-full">
                        <TabsList className="mb-8 w-full justify-start overflow-x-auto">
                            {faqCategories.map(category => (
                                <TabsTrigger
                                    key={category}
                                    value={category}
                                    className="capitalize"
                                >
                                    {category}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {faqCategories.map(category => (
                            <TabsContent key={category} value={category}>
                                <Suspense fallback={
                                    <div className="animate-pulse space-y-4">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="h-16 bg-gray-100 rounded-lg" />
                                        ))}
                                    </div>
                                }>
                                    <FAQList category={category} />
                                </Suspense>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </main>
        </div>
    )
}