'use client'

import { memo } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FooterSectionComponent } from '@/components/ui/footer-section'
import { 
  ShoppingCart, 
  HelpCircle,
  ExternalLink,
  Heart
} from 'lucide-react'
import { footerSections } from '@/lib/constants/cross-linking-data'

export default memo(function FooterCrossLinking() {
  return (
    <footer className="relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          {/* Professional Four Column Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {footerSections.map((section, index) => (
              <FooterSectionComponent key={index} section={section} />
            ))}
          </div>

          {/* Professional Separator */}
          <div className="relative mb-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gray-800 px-8 py-3 rounded-lg border border-gray-600">
                <span className="text-gray-100 text-sm font-medium">Ready to Transform Your AI Journey?</span>
              </div>
            </div>
          </div>

          {/* Professional CTA Section */}
          <div className="text-center mb-20">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-800/95 backdrop-blur-xl shadow-2xl">
              {/* Subtle background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-indigo-500/50"></div>
              
              <CardContent className="relative p-16">
                {/* Professional Header */}
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-white leading-tight">
                    Ready to Master<br />
                    <span className="text-blue-300">Local LLM Development?</span>
                  </h3>
                </div>

                <p className="text-gray-200 mb-12 max-w-4xl mx-auto text-lg leading-relaxed">
                  Get your copy of &quot;Generative AI with Local LLM&quot; and start building production-ready AI applications today. 
                  Join thousands of developers who are already mastering the future of AI.
                </p>

                {/* Professional Button Group */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <Button 
                    asChild 
                    size="lg" 
                    className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 px-10 py-4 text-lg font-semibold rounded-lg"
                  >
                    <Link href="/buy">
                      <div className="flex items-center space-x-3">
                        <ShoppingCart className="h-5 w-5" />
                        <span>Get the Book</span>
                      </div>
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="group border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300 transform hover:scale-105 px-10 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm"
                  >
                    <Link href="/faq">
                      <div className="flex items-center space-x-3">
                        <HelpCircle className="h-5 w-5" />
                        <span>Learn More</span>
                      </div>
                    </Link>
                  </Button>
                </div>

                {/* Professional Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>60-day guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Lifetime updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Community support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Bottom Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-3">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-gray-100 text-sm font-medium">
                  © 2025 Shamim Bhuiyan & Timur Isachenko
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
              <span className="text-gray-300 text-sm">
                Made with passion for the AI community
              </span>
            </div>

            {/* Professional Navigation Links */}
            <div className="flex items-center space-x-8">
              {[
                { name: "Purchase", href: "/buy", icon: ShoppingCart },
                { name: "FAQ", href: "/faq", icon: HelpCircle },
                { name: "Blog", href: "https://blog.quickstartgenai.com", external: true, icon: ExternalLink }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center space-x-2 text-gray-200 hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                  {link.external && <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})