'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Brain, ShoppingCart } from 'lucide-react'

const allNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Features', href: '/#features' },
    { name: 'Authors', href: '/#authors' },
]

export function NavBar() {
    const pathname = usePathname()
    const [navLinks, setNavLinks] = useState(allNavLinks)
    const isBlogPage = pathname.startsWith('/blog')

    useEffect(() => {
        if (isBlogPage) {
            setNavLinks(allNavLinks.filter(link => !['Home', 'Blog', 'Features', 'Authors'].includes(link.name)))
        } else {
            setNavLinks(allNavLinks)
        }
    }, [isBlogPage])

    return (
        <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    <h1 className="text-lg sm:text-2xl font-bold">Getting started with <span className="inline-block text-blue-600">Generative AI</span></h1>
                </Link>
                <nav className="hidden md:flex space-x-4">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600">
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <Button
                    variant="outline"
                    className="hidden sm:flex items-center"
                    onClick={() => window.open("https://leanpub.com/quickstartwithai", "_blank", "noopener,noreferrer")}
                >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Book
                </Button>
            </div>
        </header>
    )
}
