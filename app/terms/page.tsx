import { NavBar } from '@/components/NavBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Getting Started with Generative AI',
    description: 'Our terms of service outline the rules and guidelines for using our book and services.',
    openGraph: {
        title: 'Terms of Service | Getting Started with Generative AI',
        description: 'Our terms of service outline the rules and guidelines for using our book and services.',
        type: 'website',
    },
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <NavBar />
            <main className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-gray-600">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 leading-relaxed">By accessing and using this website or purchasing our book, you accept and agree to be bound by these terms and conditions.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Book License</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">When you purchase our book:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                                <li>You receive a non-exclusive, non-transferable license to access and read the book content</li>
                                <li>The book and its contents are protected by copyright laws</li>
                                <li>You may not reproduce, distribute, or create derivative works</li>
                                <li>You get lifetime access to book updates</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Refund Policy</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">We offer a comprehensive refund policy:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                                <li>60-day money-back guarantee, no questions asked</li>
                                <li>Full refund if you&apos;re not satisfied with the content</li>
                                <li>Contact us through Leanpub for refund processing</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Content Usage</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">The code examples and content in the book:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                                <li>Can be used in your personal and commercial projects</li>
                                <li>Should not be redistributed as part of another book or course</li>
                                <li>Come with no warranty or guarantee of fitness for any purpose</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Updates and Changes</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">We reserve the right to:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                                <li>Update the book content and examples</li>
                                <li>Modify these terms of service</li>
                                <li>Change the book&apos;s price</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Contact</h2>
                            <p className="text-gray-600 leading-relaxed">For any questions about these terms, please contact us at:</p>
                            <p className="text-gray-600">Email: contact@quickstartgenai.com</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}