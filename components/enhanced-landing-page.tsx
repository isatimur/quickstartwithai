'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronRight, Linkedin, Globe } from 'lucide-react'
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Cover } from '@/components/ui/cover'
import { NavBar } from '@/components/NavBar'
import { useEffect, useCallback } from 'react'
import { TestimonialsSection } from '@/components/testimonials-section'

const content = {
  "header": {
    "title": "Generative AI with",
    "subtitle": "Local LLM",
    "navLinks": {
      "features": "Features",
      "authors": "Authors",
    },
    "contactButton": "Contact Authors"
  },
  "heroSection": {
    "title": "You don't need to be a machine learning expert to learn",
    "subtitle": "Generative AI",
    "description": "A comprehensive and practical roadmap to develop AI application with local LLM inference.",
    "preOrderButton": "Buy on Leanpub",
    "previewDialog": {
      "triggerButton": "Download the Free Sample",
      "title": "Download the free sample chapter of the book",
      "description": "Click the 'Read Free Sample' button on the book's landing page on Leanpub.",
      "chapterTitle": "Chapter 1: Introduction to Generative AI",
      "chapterDescription": "This chapter covers how to set up a local LLM, configure a Python environment, and begin your hands-on journey with AI.",
      "downloadButton": "Go to the Leanpub book landing page"
    }
  },
  "featuresSection": {
    "title": "What's Inside the Book",
    "tabs": [
      {
        id: 'local-llm',
        title: 'Local LLM Setup',
        description: 'Learn how to set up and use Local LLMs efficiently for AI development.',
        imageUrl: '/images/local-llm.jpg',
        features: [
          "Install and configure local models using tools like Ollama",
          "Run LLMs on local hardware with minimal setup",
          "Fine-tune models for specific use cases",
          "Efficiently use tools like Python and Hugging Face to work with LLMs",
        ],
      },
      {
        "id": 'agents',
        "title": 'AI Agents',
        "description": 'Discover how AI agents can automate tasks and enhance your productivity.',
        "imageUrl": '/images/ai-agents.jpg',
        "features": [
          "Develop AI agents to handle repetitive tasks",
          "Integrate agents with real-world applications",
          "Use AI agents for content creation and business operations",
          "Architect multi-agent systems for complex scenarios",
        ],
      },
      {
        "id": 'rag',
        "title": 'Advanced Techniques',
        "description": 'Explore advanced AI techniques, including Retrieval-Augmented Generation (RAG) and more.',
        "imageUrl": '/images/advanced-techniques.jpg',
        "features": [
          "Enrich LLMs with private datasets for better accuracy",
          "Apply RAG techniques to enhance model outputs",
          "Integrate LLMs with SQL databases for Text-to-SQL queries",
          "Use fine-tuning methods like LoRA and QLoRA for efficiency",
        ],
      }
    ],
    "featureCards": [
      {
        "title": "Set Up and Run Local LLMs",
        "description": "Learn how to set up and use Local LLMs inference for AI development.",
        "features": [
          "Install and configure local models using tools like Ollama",
          "Run LLMs on local hardware with minimal setup",
          "Hardware acceleration technics to improve the performance",
          "Configure local virtual environment for AI development"
        ]
      },
      {
        "title": "Generative AI terminology and jargon in plain English",
        "description": "Explore the fundamental concepts of Generative AI",
        "features": [
          "Natural Language Processing",
          "How LLM works internally?",
          "Training LLM",
          "Prompt engineering"
        ]
      },
      {
        "title": "Master Advanced Techniques",
        "description": "Explore advanced AI techniques, including Fine-tuning, RAG and more.",
        "features": [
          "Apply RAG techniques with private datasets for better accuracy",
          "Integrate LLMs with SQL databases for Text-to-SQL queries",
          "Practical examples of developing AI Agents",
          "Fine-tuning LLMs (LoRA and QLoRA) for efficiency"
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
        "image": "/shamim.webp",
        "website": "https://shamimbhuiyan.ru",
        "linkedin": "https://www.linkedin.com/in/shamimbhuiyan/"
      },
      {
        "name": "Timur Isachenko",
        "role": "Technical Lead & Solution Architect",
        "bio": "With 15 years of experience, Timur is known for his expertise in backend development and microservices architecture.",
        "image": "/timur_isachenko.webp",
        "website": "https://timurisa.com",
        "linkedin": "https://www.linkedin.com/in/timur-isachenko/"
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
        { "name": "Articles", "href": "/blog" }
      ]
    },
    "connect": {
      "title": "Connect",
      "links": [
        { "name": "X.com", "href": "#" },
        { "name": "LinkedIn", "href": "#" },
        { "name": "GitHub", "href": "https://github.com/srecon/Getting_started_with_AI" }
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
    "copyright": "© 2025 Shamim Bhuiyan & Timur Isachenko. All rights reserved."
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
  },
  "roadmapSection": {
    "title": "Roadmap to Generative AI",
    "description": "A step-by-step guide for mastering AI driven application with  local LLM inference?",
    "imageAlt": "Comprehensive Generative AI Development Roadmap"
  },
  "whyOutstandingSection": {
    "title": "Why This Book Is Different",
    "mainPoints": [
      {
        "title": "100% Practical Approach",
        "description": "Unlike theoretical books, we focus on hands-on development with local LLMs, making AI accessible to everyone."
      },
      {
        "title": "Lifetime Free Updates",
        "description": "Get free updates as the AI landscape evolves, ensuring your knowledge stays current with the latest developments."
      },
      {
        "title": "60-Day Money-Back Guarantee",
        "description": "Try the book risk-free. If you're not completely satisfied, get a 100% refund within 60 days."
      },
      {
        "title": "Real-World Applications",
        "description": "Build practical AI applications including RAG systems, SQL integration, and autonomous AI agents."
      }
    ],
    "callToAction": {
      "price": "Starting at $19",
      "buttonText": "Get Started Today"
    }
  },
  "testimonialsSection": {
    "title": "Reader Testimonials",
    "testimonials": [
      {
        "content": "In contrast to my book AI Driven, which targets CxOs, Timur's book offers practical insights for architects and developers. I had the privilege of reading a pre-release version, and as an engineer at heart, I found it easy to follow from chapter to chapter. Highly recommended!",
        "author": "Victor Shilo",
        "role": "Author of the book \"AI Driven\"",
        "image": "/images/testimonials/victor-shilo.jpg"
      },
      {
        "content": "In contrast to my book AI Driven, which targets CxOs, Timur's book offers practical insights for architects and developers. I had the privilege of reading a pre-release version, and as an engineer at heart, I found it easy to follow from chapter to chapter. Highly recommended!",
        "author": "Lucy Tai",
        "role": "NLP Engineer at StandupAI",
        "image": "/images/testimonials/lucy-tai.jpg"
      }
    ]
  }
}

const lettersAndSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*-_+=;:<>,';

interface AnimatedTextProps {
  text: string;
}

function RandomizedTextEffect({ text }: AnimatedTextProps) {
  const [animatedText, setAnimatedText] = useState('');

  const getRandomChar = useCallback(
    () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
    []
  );

  const animateText = useCallback(async () => {
    const duration = 50;
    const revealDuration = 80;
    const initialRandomDuration = 300;

    const generateRandomText = () =>
      text
        .split('')
        .map(() => getRandomChar())
        .join('');

    setAnimatedText(generateRandomText());

    const endTime = Date.now() + initialRandomDuration;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration));
      setAnimatedText(generateRandomText());
    }

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText(
        (prevText) =>
          text.slice(0, i + 1) +
          prevText
            .slice(i + 1)
            .split('')
            .map(() => getRandomChar())
            .join('')
      );
    }
  }, [text, getRandomChar]);

  useEffect(() => {
    animateText();
  }, [text, animateText]);

  return <div className='relative inline-block'>{animatedText}</div>;
}

function WhyOutstandingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">{content.whyOutstandingSection.title}</h2>
            <p className="text-xl text-blue-600 font-semibold">
              &quot;You don&apos;t need to be a machine learning expert to learn Generative AI&quot;
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {content.whyOutstandingSection.mainPoints.map((point, index) => (
              <Card key={index} className="transform hover:scale-105 transition-transform duration-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-600">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
            <p className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Master Generative AI?
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Join readers who are already building their own AI applications with local LLM inference.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-3xl font-bold text-blue-600">
                {content.whyOutstandingSection.callToAction.price}
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={() => window.open("https://leanpub.com/quickstartwithai", "_blank", "noopener,noreferrer")}
              >
                {content.whyOutstandingSection.callToAction.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EnhancedLandingPageComponent() {
  const [mounted, setMounted] = useState(false)

  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) return null
  function HeroSection() {
    return (
      <section className="pt-12 sm:pt-24 pb-12 sm:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-800">
                {content.heroSection.title} <Cover className="inline-block text-blue-600">{content.heroSection.subtitle}</Cover>
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-600">
                {content.heroSection.description}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
        <DialogContent className="z-50">
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
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {content.featuresSection.featureCards.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
                features={card.features}
              />
            ))}
          </div>
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
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {content.authorsSection.authors.map((author, index) => (
              <AuthorCard key={index} author={author} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  function AuthorCard({ author }: { author: { name: string, role: string, bio: string, image: string, website: string, linkedin: string } }) {
    return (
      <Card className="flex flex-col md:flex-row overflow-hidden">
        <Image src={author.image} alt={author.name} width={200} height={200} className="object-cover md:w-1/3" />
        <CardContent className="p-6 md:w-2/3">
          <CardTitle className="text-2xl font-bold mb-2">{author.name}</CardTitle>
          <CardDescription className="mb-4">{author.role}</CardDescription>
          <p className="mb-4">{author.bio}</p>
          <div className="flex space-x-4">
            <a href={author?.website || ''} className="text-blue-600 hover:text-blue-800">
              <Globe className="h-6 w-6" />
            </a>
            <a href={author?.linkedin || ''} className="text-blue-600 hover:text-blue-800">
              <Linkedin className="h-6 w-6" />
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

  function RoadmapSection() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-family: 'DiamondsBlack', sans-serif;">
              <RandomizedTextEffect text={content.roadmapSection.title} />
            </h2>
            <p className="text-xl text-gray-600">{content.roadmapSection.description}</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Image
              src="/Roadmap.webp"
              alt={content.roadmapSection.imageAlt}
              width={1200}
              height={800}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavBar />
      <main>
        <AuroraBackground>
          <div className="relative z-10">
            <HeroSection />
          </div>
        </AuroraBackground>
        <RoadmapSection />
        <WhyOutstandingSection />
        <FeaturesSection />
        <TestimonialsSection />
        <AuthorsSection />
        <CallToActionSection />
      </main>
      <Footer />
      {showContactForm && <ContactFormDialog />}
    </div>
  );
}
