'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Brain, ShoppingCart, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const allNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Features', href: '/#features' },
    { name: 'Authors', href: '/#authors' },
    { name: 'FAQ', href: '/faq' },
]

export function NavBar() {
    const pathname = usePathname()
    const [navLinks, setNavLinks] = useState(allNavLinks)
    const [isOpen, setIsOpen] = useState(false)
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
                    <h1 className="text-lg sm:text-2xl font-bold">
                        Generative AI with <span className="inline-block text-blue-600">Local LLM</span>
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        variant="outline"
                        className="flex items-center"
                        onClick={() => window.open("https://leanpub.com/quickstartwithai", "_blank", "noopener,noreferrer")}
                    >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Buy Book
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4">
                            <div className="flex items-center justify-between mb-4">
                                <Brain className="h-6 w-6 text-blue-600" />
                            </div>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg py-2 transition-colors hover:text-blue-600",
                                        pathname === link.href ? "text-blue-600" : "text-gray-600"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button
                                className="w-full mt-4 flex items-center justify-center"
                                onClick={() => {
                                    window.open("https://leanpub.com/quickstartwithai", "_blank", "noopener,noreferrer")
                                    setIsOpen(false)
                                }}
                            >
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Buy Book
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
