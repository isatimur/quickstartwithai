'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronRight, BookOpen, Users, Zap, Mail, BookMarked, Brain } from 'lucide-react'

export function EnhancedLandingPageComponent() {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-800">
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
          <Button
            variant="outline"
            onClick={() => setShowContactForm(true)}
          >
            Contact Authors
          </Button>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-800">Unlock the Power of <span className="text-blue-600">Generative AI</span></h2>
                <p className="text-xl mb-8 text-gray-600">
                  Dive into the world of AI-driven content creation and problem-solving with expert guidance from Shamim Bhuyan and Timur Isachenko.
                </p>
                <div className="flex space-x-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Pre-order Now <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" variant="outline">
                        Preview Chapter
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      {/* Dialog Content */}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  alt="Book Cover"
                  width={400}
                  height={500}
                  className="mx-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                  <BookOpen className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

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
                <Card>
                  <CardHeader>
                    <CardTitle>Master the Core Concepts</CardTitle>
                    <CardDescription>Dive deep into the foundations of generative AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Neural networks and deep learning architectures</li>
                      <li>Training methodologies and optimization techniques</li>
                      <li>Data preprocessing and feature engineering</li>
                      <li>Model evaluation and performance metrics</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="applications">
                <Card>
                  <CardHeader>
                    <CardTitle>Real-world Use Cases</CardTitle>
                    <CardDescription>Learn how to apply generative AI to solve complex problems</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Natural language processing and text generation</li>
                      <li>Image and video synthesis</li>
                      <li>Anomaly detection and predictive maintenance</li>
                      <li>Personalized content creation and recommendation systems</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="trends">
                <Card>
                  <CardHeader>
                    <CardTitle>Stay Ahead of the Curve</CardTitle>
                    <CardDescription>Explore emerging technologies and methodologies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Advancements in transformer architectures</li>
                      <li>Ethical AI and responsible development practices</li>
                      <li>Integration of generative AI with IoT and edge computing</li>
                      <li>The role of AI in shaping the future of work</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Why You Need This Book</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: BookMarked, title: "Comprehensive Coverage", description: "From basics to advanced topics, get a complete understanding of generative AI." },
                { icon: Zap, title: "Practical Insights", description: "Learn from real-world examples and case studies to apply AI in your projects." },
                { icon: Users, title: "Expert Guidance", description: "Benefit from the combined expertise of two seasoned AI professionals." }
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <item.icon className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="authors" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Meet the Authors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Shamim Bhuyan", role: "Enterprise Architect", bio: "Dr. Shamim Bhuyan is an Enterprise Architect with over 22 years of experience in IT. He specializes in Middleware solutions, Big Data, and Data Science.", image: "/placeholder.svg" },
                { name: "Timur Isachenko", role: "Technical Lead & Solution Architect", bio: "Timur Isachenko is a Technical Lead and Solution Architect with 14 years of experience in the IT industry. He's known for his expertise in backend development and microservices architecture.", image: "/placeholder.svg" }
              ].map((author, index) => (
                <Card key={index} className="flex flex-col md:flex-row overflow-hidden">
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
              ))}
            </div>
          </div>
        </section>

        <section id="articles" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "The Future of Generative AI", excerpt: "Explore the upcoming trends and innovations in the world of generative AI.", image: "/placeholder.svg" },
                { title: "Practical Applications of AI in Business", excerpt: "Discover how businesses are leveraging AI to drive growth and innovation.", image: "/placeholder.svg" },
                { title: "Getting Started with Machine Learning", excerpt: "A beginner's guide to understanding and implementing machine learning algorithms.", image: "/placeholder.svg" }
              ].map((article, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image src={article.image} alt={article.title} width={400} height={200} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Button variant="outline">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your AI Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don&apos;t miss out on this comprehensive guide to mastering generative AI. Pre-order now and be among the first to unlock the potential of this groundbreaking technology.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Pre-order Now <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-blue-400">Features</a></li>
                <li><a href="#authors" className="hover:text-blue-400">Authors</a></li>
                <li><a href="#articles" className="hover:text-blue-400">Articles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>
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

      {showContactForm && (
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
      )}

      <Dialog>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Preview Chapter</DialogTitle>
            <DialogDescription>
              Get a sneak peek into the book with this sample chapter on AI Fundamentals.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[300px] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-2">Chapter 1: Introduction to Generative AI</h3>
            <p className="mb-4">
              Generative AI represents a paradigm shift in artificial intelligence, focusing on creating new, original content rather than simply analyzing existing data. This chapter introduces the core concepts, historical context, and potential applications of generative AI.
            </p>
            <h4 className="text-md font-semibold mb-2">1.1 What is Generative AI?</h4>
            <p className="mb-4">
              Generative AI refers to artificial intelligence systems that can produce various types of content, including text, imagery, audio, and synthetic data. Unlike traditional AI models that are designed for tasks such as classification or prediction, generative models learn to create new instances that resemble their training data.
            </p>
            <p className="mb-4">
              The key distinction of generative AI lies in its ability to create rather than just analyze. This creative capacity opens up a wide range of applications, from assisting in content creation to solving complex problems through the generation of novel solutions.
            </p>
            {/* More content would go here */}
          </div>
          <Button className="w-full mt-4">Download Full Chapter</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}