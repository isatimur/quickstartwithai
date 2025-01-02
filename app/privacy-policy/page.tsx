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
            <main className="container mx-auto px-4 py-8">
                <article className="prose prose-lg max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                    <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                        <p>We collect information that you provide directly to us when you:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Purchase our book through Leanpub</li>
                            <li>Subscribe to our newsletter for updates</li>
                            <li>Contact us through our website</li>
                            <li>Leave comments or feedback</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Process your book purchase and provide access to updates</li>
                            <li>Send you important notifications about the book</li>
                            <li>Respond to your inquiries and support requests</li>
                            <li>Send newsletters with valuable content (if subscribed)</li>
                            <li>Improve our content and services</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
                        <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Secure SSL encryption for all data transmission</li>
                            <li>Regular security assessments and updates</li>
                            <li>Limited access to personal information</li>
                            <li>Compliance with data protection regulations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Withdraw consent for newsletter subscriptions</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                        <p>Email: contact@quickstartgenai.com</p>
                    </section>
                </article>
            </main>
        </div>
    );
} 