'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronRight, Users, Mail, Brain, CalendarIcon, ClockIcon, TagIcon } from 'lucide-react'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import createImageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import { format } from 'date-fns';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Cover } from '@/components/ui/cover';


interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { _ref: string } };
  excerpt: string;
  authorName: string;
  authorImage: { asset: { _ref: string } };
  publishedAt: string;
  estimatedReadingTime: number;
  categories: string[];
}

export function EnhancedLandingPageComponent() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts from Sanity CMS
  useEffect(() => {
    async function fetchPosts() {

      const data: Post[] = await client.fetch(groq`
        *[_type == "post"]{
          _id,
          title,
          slug,
          mainImage,
          excerpt,
          "authorName": author->name,
          "authorImage": author->image,
          publishedAt,
          "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200),
          "categories": categories[]->title
        } | order(publishedAt desc)
      `);
      setPosts(data);
    }

    fetchPosts();
  }, []);

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

  // Articles Section to fetch posts
  function ArticlesSection({ posts }: { posts: Post[] }) {
    return (
      <section id="articles" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post._id} className="overflow-hidden">
                <Image
                  alt={post.title}
                  className="object-cover w-full h-48"
                  height={200}
                  src={createImageUrlBuilder(client).image(post.mainImage).height(200).width(400).url()}
                  width={400}
                />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <div className="flex items-center mt-4 space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>{format(new Date(post.publishedAt), 'MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span>{post.estimatedReadingTime} min read</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-2">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="inline-flex items-center px-2 py-1 mr-2 mt-2 text-xs font-medium text-blue-800 bg-blue-100 rounded"
                      >
                        <TagIcon className="w-3 h-3 mr-1" />
                        {category}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/blog/${post.slug.current}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Hero section (main introduction)
  function HeroSection() {
    return (
      
      <section>
          <AuroraBackground>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-800">
                Unlock the Power of <Cover className="text-blue-600">Generative AI</Cover>
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
            </AuroraBackground>
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
                  <Image src={'/book-cover.svg'} alt='Getting started with Generative AI' width={300} height={450} />
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
          <h2 className="text-4xl font-bold mb-12 text-center">What&apos;s Inside the Guide</h2>
          <Tabs defaultValue="local-llm" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="local-llm">Local LLM Setup</TabsTrigger>
              <TabsTrigger value="agents">AI Agents</TabsTrigger>
              <TabsTrigger value="rag">Advanced Techniques</TabsTrigger>
            </TabsList>
            <TabsContent value="local-llm">
              <FeatureCard
                title="Set Up and Run Local LLMs"
                description="Learn how to set up and use Local LLMs efficiently for AI development."
                features={[
                  "Install and configure local models using tools like Ollama",
                  "Run LLMs on local hardware with minimal setup",
                  "Fine-tune models for specific use cases",
                  "Efficiently use tools like Python and Hugging Face to work with LLMs",
                ]}
              />
            </TabsContent>
            <TabsContent value="agents">
              <FeatureCard
                title="Build and Deploy AI Agents"
                description="Discover how AI agents can automate tasks and enhance your productivity."
                features={[
                  "Develop AI agents to handle repetitive tasks",
                  "Integrate agents with real-world applications",
                  "Use AI agents for content creation and business operations",
                  "Architect multi-agent systems for complex scenarios",
                ]}
              />
            </TabsContent>
            <TabsContent value="rag">
              <FeatureCard
                title="Master Advanced Techniques"
                description="Explore advanced AI techniques, including Retrieval-Augmented Generation (RAG) and more."
                features={[
                  "Enrich LLMs with private datasets for better accuracy",
                  "Apply RAG techniques to enhance model outputs",
                  "Integrate LLMs with SQL databases for Text-to-SQL queries",
                  "Use fine-tuning methods like LoRA and QLoRA for efficiency",
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    );
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
      { name: "Shamim Bhuiyan", role: "Enterprise Architect", bio: "With 23 years of experience, Shamim specializes in Middleware solutions, Big Data, and Data Science.", image: "/shamim.webp" },
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

  // Call to Action Section with Leanpub Link (New Section)
  function CallToActionSection() {
    return (
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Accelerate Your AI Learning Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our step-by-step guide is packed with actionable insights on building AI applications with local models. Explore the full book and get started on mastering generative AI.
          </p>
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <a href="https://leanpub.com/quickstartwithai" target="_blank" rel="noopener noreferrer">
              Learn More on Leanpub <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    );
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
        <ArticlesSection posts={posts} />
        <CallToActionSection /> {/* New Call to Action Section */}
      </main>
      <Footer />
      {showContactForm && <ContactFormDialog />}
    </div>
  )
}