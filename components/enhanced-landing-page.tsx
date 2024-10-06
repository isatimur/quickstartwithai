'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronRight, Users, Mail, Brain } from 'lucide-react'

export function EnhancedLandingPageComponent() {
  const [showContactForm, setShowContactForm] = useState(false);

  // Header component
  function Header() {
    return (
      <header className="bg-white py-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold">Generative AI Guide</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#authors" className="text-gray-600 hover:text-blue-600">Authors</a>
            <a href="/blog" className="text-gray-600 hover:text-blue-600">Articles</a>
          </nav>
          <Button variant="outline" onClick={() => setShowContactForm(true)}>
            Contact Authors
          </Button>
        </div>
      </header>
    )
  }

  // Hero section (main introduction)
  function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-800">
                Unlock the Power of <span className="text-blue-600">Generative AI</span>
              </h2>
              <p className="text-xl mb-8 text-gray-600">
                Dive into the world of AI-driven content creation and problem-solving with expert guidance from Shamim Bhuyan and Timur Isachenko.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Pre-order Now <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <PreviewChapterDialog />
              </div>
            </div>
            <BookCover />
          </div>
        </div>
      </section>
    )
  }

  // Book cover with animation
  function BookCover() {
    return (
      <div className="realvjy">
        <div className="book-wrapper">
          <div className="book-items">
            <div className="main-book-wrap">
              <div className="book-cover">
                <div className="book-inside"></div>
                <div className="book-image">
                  <Image src={'/book-cover.webp'} alt='Getting started with Generative AI' width={300} height={450} />
                  <div className="effect"></div>
                  <div className="light"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Preview Chapter Dialog
  function PreviewChapterDialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" variant="outline">
            Preview Chapter
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Preview Chapter</DialogTitle>
            <DialogDescription>
              Get a sneak peek into the book with this sample chapter on AI Fundamentals.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[300px] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-2">Chapter 1: Introduction to Generative AI</h3>
            <p className="mb-4">
              This chapter covers how to set up a local LLM, configure a Python environment, and begin your hands-on journey with AI.
            </p>
            <Button className="w-full mt-4">Download Full Chapter</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Features Section with Tabs (AI Fundamentals, Applications, Trends)
  function FeaturesSection() {
    return (
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What&apos;s Inside</h2>
          <Tabs defaultValue="fundamentals" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="fundamentals">AI Fundamentals</TabsTrigger>
              <TabsTrigger value="applications">Practical Applications</TabsTrigger>
              <TabsTrigger value="trends">Future Trends</TabsTrigger>
            </TabsList>
            <TabsContent value="fundamentals">
              <FeatureCard
                title="Master the Core Concepts"
                description="Explore the basics of AI, machine learning, and deep learning."
                features={[
                  "Neural networks and deep learning architectures",
                  "Training methodologies and optimization techniques",
                  "Data preprocessing and feature engineering",
                  "Model evaluation and performance metrics",
                ]}
              />
            </TabsContent>
            <TabsContent value="applications">
              <FeatureCard
                title="Real-world Use Cases"
                description="Learn how to apply generative AI to solve complex problems."
                features={[
                  "Natural language processing and text generation",
                  "Image and video synthesis",
                  "Anomaly detection and predictive maintenance",
                  "Personalized content creation and recommendation systems",
                ]}
              />
            </TabsContent>
            <TabsContent value="trends">
              <FeatureCard
                title="Stay Ahead of the Curve"
                description="Explore emerging technologies and methodologies."
                features={[
                  "Advancements in transformer architectures",
                  "Ethical AI and responsible development practices",
                  "Integration of generative AI with IoT and edge computing",
                  "The role of AI in shaping the future of work",
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    )
  }

  // Feature Card component used in Features Section
  function FeatureCard({ title, description, features }: { title: string; description: string; features: string[] }) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    )
  }

  // Authors Section
  function AuthorsSection() {
    const authors = [
      { name: "Shamim Bhuyan", role: "Enterprise Architect", bio: "With 22 years of experience, Shamim specializes in Middleware solutions, Big Data, and Data Science.", image: "/placeholder.svg" },
      { name: "Timur Isachenko", role: "Technical Lead & Solution Architect", bio: "With 14 years of experience, Timur is known for his expertise in backend development and microservices architecture.", image: "/timur_isachenko.webp" }
    ];

    return (
      <section id="authors" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet the Authors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {authors.map((author, index) => (
              <AuthorCard key={index} author={author} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Author Card component used in Authors Section
  function AuthorCard({ author }: { author: { name: string, role: string, bio: string, image: string } }) {
    return (
      <Card className="flex flex-col md:flex-row overflow-hidden">
        <Image src={author.image} alt={author.name} width={200} height={200} className="object-cover md:w-1/3" />
        <CardContent className="p-6 md:w-2/3">
          <CardTitle className="text-2xl font-bold mb-2">{author.name}</CardTitle>
          <CardDescription className="mb-4">{author.role}</CardDescription>
          <p className="mb-4">{author.bio}</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Users className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Footer Component
  function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <FooterColumn title="Quick Links" links={[
              { name: "Features", href: "#features" },
              { name: "Authors", href: "#authors" },
              { name: "Articles", href: "#articles" }
            ]} />
            <FooterColumn title="Connect" links={[
              { name: "Twitter", href: "#" },
              { name: "LinkedIn", href: "#" },
              { name: "GitHub", href: "#" }
            ]} />
            <FooterColumn title="Legal" links={[
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" }
            ]} />
            <div>
              <h4 className="font-bold text-lg mb-4">Join our Mailing List</h4>
              <form className="flex flex-col space-y-2">
                <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            &copy; 2024 Shamim Bhuyan and Timur Isachenko. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }

  // Footer Column used in Footer Component
  function FooterColumn({ title, links }: { title: string; links: { name: string; href: string }[] }) {
    return (
      <div>
        <h4 className="font-bold text-lg mb-4">{title}</h4>
        <ul className="space-y-2">
          {links.map((link: { name: string, href: string }, index: number) => (
            <li key={index}><a href={link.href} className="hover:text-blue-400">{link.name}</a></li>
          ))}
        </ul>
      </div>
    )
  }

  // Contact Form Dialog
  function ContactFormDialog() {
    return (
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Authors</DialogTitle>
            <DialogDescription>
              Send a message to Shamim Bhuyan and Timur Isachenko. We&apos;ll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" placeholder="Your message" rows={4} />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    )
  }

  // Main landing page component rendering all sections
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AuthorsSection />
      </main>
      <Footer />
      {showContactForm && <ContactFormDialog />}
    </div>
  )
}