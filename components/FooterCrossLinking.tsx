'use client'

import { memo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NewsletterSubscription } from '@/components/ui/newsletter-subscription'
import { 
  ShoppingCart, 
  Heart,
  Twitter,
  Linkedin,
  Github,
  ArrowRight
} from 'lucide-react'

export default memo(function FooterCrossLinking() {
  return (
    <footer className="relative bg-black text-white overflow-hidden pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900/50 via-black to-black pointer-events-none" />
      
      {/* Massive Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[12vw] font-black leading-none text-white whitespace-nowrap select-none tracking-tighter transform translate-y-[20%]">
          QUICKSTART GENAI
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                Quickstart GenAI
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                The definitive guide to building production-ready AI applications with local Large Language Models.
              </p>
            </div>

            <div className="flex items-center gap-4">
               <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
               <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
               <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="GitHub" />
            </div>
          </div>

          {/* Navigation Columns (2 cols each) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Product</h4>
            <ul className="space-y-4">
              <FooterLink href="/buy">Get the Book</FooterLink>
              <FooterLink href="/#features">Features</FooterLink>
              <FooterLink href="/#authors">Authors</FooterLink>
              <FooterLink href="https://leanpub.com/quickstartwithai" external>Leanpub</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-2">
             <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Resources</h4>
             <ul className="space-y-4">
               <FooterLink href="https://blog.quickstartgenai.com" external>Engineering Blog</FooterLink>
               <FooterLink href="/faq">FAQ</FooterLink>
               <FooterLink href="https://github.com/srecon/Getting_started_with_AI" external>Source Code</FooterLink>
             </ul>
          </div>

           <div className="lg:col-span-4">
             <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">The Inner Circle</h4>
             <p className="text-gray-400 text-sm mb-6">
               Join exclusive community of engineers building the future of local AI.
             </p>
             <div className="bg-gray-900/50 p-1 rounded-xl border border-gray-800">
                <NewsletterSubscription 
                  variant="footer"
                  placeholder="Enter your email"
                  buttonText="Join"
                  successMessage="Welcome to the circle."
                />
             </div>
           </div>

        </div>

        {/* CTA Strip */}
        <div className="border-t border-white/10 py-12 mb-12">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                 <h3 className="text-3xl font-bold text-white mb-2">Ready to build?</h3>
                 <p className="text-gray-400">Start your journey with Chapter 1 today.</p>
              </div>
              <div className="flex gap-4">
                 <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold rounded-full px-8">
                    <Link href="/buy">
                       Buy the Book <ShoppingCart className="ml-2 w-4 h-4" />
                    </Link>
                 </Button>
                 <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                    <Link href="/faq">
                       Read FAQ
                    </Link>
                 </Button>
              </div>
           </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 pt-8 border-t border-white/5">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span>© 2025 Shamim Bhuiyan & Timur Isachenko</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>for the AI community</span>
          </div>
        </div>
      </div>
    </footer>
  )
})

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children, external }: { href: string, children: React.ReactNode, external?: boolean }) {
  return (
    <li>
      <Link 
        href={href} 
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
      >
        {children}
        {external && <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />}
      </Link>
    </li>
  )
}
