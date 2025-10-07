import { NavBar } from '@/components/NavBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Getting Started with Generative AI',
    description: 'Our privacy policy explains how we collect, use, and protect your personal information when you use our services.',
    openGraph: {
        title: 'Privacy Policy | Getting Started with Generative AI',
        description: 'Our privacy policy explains how we collect, use, and protect your personal information.',
        type: 'website',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white">
            <NavBar />
            <main className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Information We Collect</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">We collect information that you provide directly to us when you:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                                <li>Purchase our book through Leanpub</li>
                                <li>Subscribe to our newsletter for updates</li>
                                <li>Contact us through our website</li>
                                <li>Leave comments or feedback</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. How We Use Your Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                                <li>Process your book purchase and provide access to updates</li>
                                <li>Send you important notifications about the book</li>
                                <li>Respond to your inquiries and support requests</li>
                                <li>Send newsletters with valuable content (if subscribed)</li>
                                <li>Improve our content and services</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Data Protection</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">We implement appropriate technical and organizational measures to protect your personal information:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                                <li>Secure SSL encryption for all data transmission</li>
                                <li>Regular security assessments and updates</li>
                                <li>Limited access to personal information</li>
                                <li>Compliance with data protection regulations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Your Rights</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Withdraw consent for newsletter subscriptions</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">If you have any questions about this Privacy Policy, please contact us at:</p>
                            <p className="text-gray-600">Email: contact@quickstartgenai.com</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
} 