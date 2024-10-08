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
import { Cover } from '@/components/ui/cover'

const content = {
  "header": {
    "title": "Getting started with ",
    "subtitle": "Generative AI", // Ensure this exists if you're using it
    "navLinks": {
      "features": "Features",
      "authors": "Authors",
      "articles": "Articles"
    },
    "contactButton": "Contact Authors"
  },
  "heroSection": {
    "title": "Unlock the Power of",
    "subtitle": "Generative AI",
    "description": "Dive into the world of AI-driven content creation and problem-solving with expert guidance from Shamim Bhuyan and Timur Isachenko.",
    "preOrderButton": "Pre-order Now",
    "previewDialog": {
      "triggerButton": "Download the Free Sample",
      "title": "Download the Free Sample",
      "description": "Get a sneak peek into the book with this sample chapter on AI Fundamentals.",
      "chapterTitle": "Chapter 1: Introduction to Generative AI",
      "chapterDescription": "This chapter covers how to set up a local LLM, configure a Python environment, and begin your hands-on journey with AI.",
      "downloadButton": "Download Full Chapter"
    }
  },
  "featuresSection": {
    "title": "What's Inside the Guide",
    "tabs": {
      "localLLM": "Local LLM Setup",
      "aiAgents": "AI Agents",
      "advancedTechniques": "Advanced Techniques"
    },
    "featureCards": [
      {
        "title": "Set Up and Run Local LLMs",
        "description": "Learn how to set up and use Local LLMs efficiently for AI development.",
        "features": [
          "Install and configure local models using tools like Ollama",
          "Run LLMs on local hardware with minimal setup",
          "Fine-tune models for specific use cases",
          "Efficiently use tools like Python and Hugging Face to work with LLMs"
        ]
      },
      {
        "title": "Build and Deploy AI Agents",
        "description": "Discover how AI agents can automate tasks and enhance your productivity.",
        "features": [
          "Develop AI agents to handle repetitive tasks",
          "Integrate agents with real-world applications",
          "Use AI agents for content creation and business operations",
          "Architect multi-agent systems for complex scenarios"
        ]
      },
      {
        "title": "Master Advanced Techniques",
        "description": "Explore advanced AI techniques, including Retrieval-Augmented Generation (RAG) and more.",
        "features": [
          "Enrich LLMs with private datasets for better accuracy",
          "Apply RAG techniques to enhance model outputs",
          "Integrate LLMs with SQL databases for Text-to-SQL queries",
          "Use fine-tuning methods like LoRA and QLoRA for efficiency"
        ]
      }
    ]
  },
  "authorsSection": {
    "title": "Meet the Authors",
    "authors": [
      {
        "name": "Shamim Bhuiyan",
        "role": "Enterprise Architect",
        "bio": "With 23 years of experience, Shamim specializes in designing high-load and highly scalable IT systems.",
        "image": "/shamim.webp"
      },
      {
        "name": "Timur Isachenko",
        "role": "Technical Lead & Solution Architect",
        "bio": "With 14 years of experience, Timur is known for his expertise in backend development and microservices architecture.",
        "image": "/timur_isachenko.webp"
      }
    ]
  },
  "callToActionSection": {
    "title": "Accelerate your AI learning journey",
    "description": "Learn how to build your own AI application step-by-step. A hands-on guide to AI development with local LLM.",
    "learnMoreButton": "Learn More on Leanpub"
  },
  "footer": {
    "quickLinks": {
      "title": "Quick Links",
      "links": [
        { "name": "Features", "href": "#features" },
        { "name": "Authors", "href": "#authors" },
        { "name": "Articles", "href": "#articles" }
      ]
    },
    "connect": {
      "title": "Connect",
      "links": [
        { "name": "Twitter", "href": "#" },
        { "name": "LinkedIn", "href": "#" },
        { "name": "GitHub", "href": "#" }
      ]
    },
    "legal": {
      "title": "Legal",
      "links": [
        { "name": "Privacy Policy", "href": "#" },
        { "name": "Terms of Service", "href": "#" }
      ]
    },
    "mailingList": {
      "title": "Join our Mailing List",
      "subscribeButton": "Subscribe"
    },
    "copyright": "© 2024 Shamim Bhuiyan & Timur Isachenko. All rights reserved."
  },
  "contactFormDialog": {
    "title": "Contact Authors",
    "description": "Send a message to Shamim Bhuiyan and Timur Isachenko. We'll get back to you as soon as possible.",
    "form": {
      "nameLabel": "Name",
      "emailLabel": "Email",
      "messageLabel": "Message",
      "sendButton": "Send Message"
    }
  }
}

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

  useEffect(() => {
    console.log('Content:', content); // Log the content to verify it's loaded
  }, []);

  function Header() {
    return (
      <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold">{content.header.title} <span className="inline-block text-blue-600">{content.header.subtitle}</span></h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            {Object.entries(content.header.navLinks).map(([key, value]) => (
              <a key={key} href={`#${key}`} className="text-gray-600 hover:text-blue-600">{value}</a>
            ))}
          </nav>
          <Button variant="outline" onClick={() => setShowContactForm(true)}>
            {content.header.contactButton}
          </Button>
        </div>
      </header>
    );
  }

  function HeroSection() {
    return (
      <section>
        <AuroraBackground>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-800">
                  {content.heroSection.title} <Cover className="inline-block text-blue-600">{content.heroSection.subtitle}</Cover>
                </h2>
                <p className="text-xl mb-8 text-gray-600">
                  {content.heroSection.description}
                </p>
                <div className="flex space-x-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white z-10"
                    onClick={() => window.open("https://leanpub.com/quickstartwithai", "_blank", "noopener,noreferrer")}
                  >
                    {content.heroSection.preOrderButton} <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <PreviewChapterDialog />
                </div>
              </div>
              <BookCover />
            </div>
          </div>
        </AuroraBackground>
      </section>
    );
  }

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
    );
  }

  function PreviewChapterDialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" variant="outline" className="z-10">
            {content.heroSection.previewDialog.triggerButton}
          </Button>
        </DialogTrigger>
        <DialogContent className="z-50"> {/* Ensure this is higher than the header and shadow */}
          <DialogHeader>
            <DialogTitle>{content.heroSection.previewDialog.title}</DialogTitle>
            <DialogDescription>
              {content.heroSection.previewDialog.description}
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[300px] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-2">{content.heroSection.previewDialog.chapterTitle}</h3>
            <p className="mb-4">
              {content.heroSection.previewDialog.chapterDescription}
            </p>
            <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://leanpub.com/quickstartwithai" target="_blank" rel="noopener noreferrer">
                {content.heroSection.previewDialog.downloadButton}
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  function FeaturesSection() {

    return (
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">{content.featuresSection.title}</h2>
          <Tabs defaultValue="localLLM" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {Object.entries(content.featuresSection.tabs).map(([key, value]) => (
                <TabsTrigger key={key} value={key}>{value}</TabsTrigger>
              ))}
            </TabsList>
            {content.featuresSection.featureCards.map((card, index) => (
              <TabsContent key={index} value={Object.keys(content.featuresSection.tabs)[index]}>
                <FeatureCard
                  title={card.title}
                  description={card.description}
                  features={card.features}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    );
  }

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
    );
  }

  function AuthorsSection() {
    return (
      <section id="authors" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">{content.authorsSection.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.authorsSection.authors.map((author, index) => (
              <AuthorCard key={index} author={author} />
            ))}
          </div>
        </div>
      </section>
    );
  }

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
    );
  }

  function CallToActionSection() {
    return (
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">{content.callToActionSection.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {content.callToActionSection.description}
          </p>
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <a href="https://leanpub.com/quickstartwithai" target="_blank" rel="noopener noreferrer">
              {content.callToActionSection.learnMoreButton} <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    );
  }

  function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <FooterColumn title={content.footer.quickLinks.title} links={content.footer.quickLinks.links} />
            <FooterColumn title={content.footer.connect.title} links={content.footer.connect.links} />
            <FooterColumn title={content.footer.legal.title} links={content.footer.legal.links} />
            <div>
              <h4 className="font-bold text-lg mb-4">{content.footer.mailingList.title}</h4>
              <form className="flex flex-col space-y-2">
                <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {content.footer.mailingList.subscribeButton}
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            {content.footer.copyright}
          </div>
        </div>
      </footer>
    );
  }

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
    );
  }

  function ContactFormDialog() {
    return (
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{content.contactFormDialog.title}</DialogTitle>
            <DialogDescription>
              {content.contactFormDialog.description}
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">{content.contactFormDialog.form.nameLabel}</label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{content.contactFormDialog.form.emailLabel}</label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">{content.contactFormDialog.form.messageLabel}</label>
              <Textarea id="message" placeholder="Your message" rows={4} />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              {content.contactFormDialog.form.sendButton}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

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

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AuthorsSection />
        <ArticlesSection posts={posts} />
        <CallToActionSection />
      </main>
      <Footer />
      {showContactForm && <ContactFormDialog />}
    </div>
  );
}