'use client'

import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from "@/lib/utils"

const testimonials = [
    {
        content: "In contrast to my book AI Driven, which targets CxOs, Timur's book offers practical insights for architects and developers. I had the privilege of reading a pre-release version, and as an engineer at heart, I found it easy to follow from chapter to chapter. Highly recommended!",
        author: "Victor Shilo",
        role: "Author of the book \"AI Driven\"",
        image: "/images/testimonials/victor-shilo.webp",
        rating: 5
    },
    {
        content: "I really appreciated the effort to explain key concepts and break down the symbolism behind them. Including a code base was a huge plus—it made everything feel solid and practical. The examples were clear and easy to follow, making the learning experience enjoyable and effective.",
        author: "Lucy Tai",
        role: "Data Scientist at Growth Engine AI",
        image: "/images/testimonials/lucy-tai.jpeg",
        rating: 4
    },
    // {
    //     content: "Finally, a book that doesn't just scratch the surface! The RAG implementation chapter transformed how we handle document processing at our startup.",
    //     author: "Michael Rodriguez",
    //     role: "CTO at AI Innovations",
    //     image: "/images/testimonials/michael-rodriguez.jpg",
    //     rating: 5
    // },
];

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, activeIndex]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setActiveIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
            <div className="absolute inset-0 bg-grid-gray-200/50 bg-grid-pattern" />

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Reader Testimonials
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        See what developers, architects, and tech leaders are saying about our practical approach to AI development
                    </p>
                </motion.div>

                {/* Featured Testimonial with enhanced styling */}
                <div className="relative max-w-4xl mx-auto mb-16">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="relative"
                            onHoverStart={() => setIsAutoPlaying(false)}
                            onHoverEnd={() => setIsAutoPlaying(true)}
                        >
                            <Card className="p-8 bg-white shadow-xl rounded-2xl relative overflow-hidden">
                                {/* Large decorative quote mark */}
                                <Quote className="absolute top-4 right-4 h-24 w-24 text-blue-50 transform rotate-12" />

                                <div className="flex flex-col md:flex-row gap-8 items-center relative">
                                    <div className="w-full md:w-1/3">
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <Avatar className="w-24 h-24 mx-auto ring-4 ring-blue-100">
                                                <AvatarImage
                                                    src={testimonials[activeIndex].image}
                                                    alt={testimonials[activeIndex].author}
                                                    className="object-cover"
                                                />
                                                <AvatarFallback className="text-2xl bg-blue-600 text-white">
                                                    {testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                        </motion.div>
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <p className="text-xl italic mb-6 text-gray-700 leading-relaxed">
                                                &quot;{testimonials[activeIndex].content}&quot;
                                            </p>
                                            <div>
                                                <p className="font-bold text-lg text-gray-900">{testimonials[activeIndex].author}</p>
                                                <p className="text-blue-600">{testimonials[activeIndex].role}</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    {/* Enhanced navigation controls */}
                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={cn(
                                "p-3 rounded-full bg-white shadow-lg pointer-events-auto transition-all duration-200",
                                "hover:bg-blue-50 hover:text-blue-600 -ml-6",
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            )}
                            onClick={() => paginate(-1)}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={cn(
                                "p-3 rounded-full bg-white shadow-lg pointer-events-auto transition-all duration-200",
                                "hover:bg-blue-50 hover:text-blue-600 -mr-6",
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            )}
                            onClick={() => paginate(1)}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>

                {/* Testimonial Grid with enhanced animations */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                "cursor-pointer transform transition-all duration-300",
                                activeIndex === index ? 'ring-2 ring-blue-500 rounded-xl' : ''
                            )}
                            onClick={() => setActiveIndex(index)}
                        >
                            <Card className="p-6 h-full bg-white/50 backdrop-blur-sm hover:shadow-xl">
                                <div className="flex flex-col h-full">
                                    <div className="flex-grow">
                                        <p className="text-gray-600 italic mb-6 line-clamp-4">
                                            &quot;{testimonial.content}&quot;
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                                        <Avatar className="h-12 w-12 ring-2 ring-blue-50">
                                            <AvatarImage src={testimonial.image} alt={testimonial.author} />
                                            <AvatarFallback className="bg-blue-600 text-white">
                                                {testimonial.author.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="ml-4">
                                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                            <p className="text-sm text-blue-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
