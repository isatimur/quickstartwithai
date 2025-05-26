import React from 'react';
import { NavBar } from '@/components/NavBar';

const ContactPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto max-w-4xl px-4 py-10 sm:py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            Let's Build Together
          </h1>
        </header>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6 text-center sm:text-left">
            Your Expert Partners
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center sm:text-left">
            Partner with seasoned software engineers specializing in cutting-edge 
            Software Development, robust Architecture Design, and innovative AI 
            Applications. We're dedicated to transforming your business vision 
            into reality through technology.
          </p>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6 text-center sm:text-left">
            Consultation Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5 text-center sm:text-left">
            Unlock your project's potential with our tailored consultation services:
          </p>
          <ul className="list-disc pl-5 text-lg text-muted-foreground space-y-2 leading-relaxed max-w-2xl mx-auto sm:mx-0">
            <li>Software architecture design and review</li>
            <li>AI application development and integration</li>
            <li>Custom software development</li>
            <li>Technical feasibility studies</li>
            <li>Code reviews and optimization</li>
          </ul>
        </section>

        <section className="my-16 sm:my-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
            Schedule Your Consultation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Ready to discuss your project? Book a complimentary consultation 
            call directly through Calendly:
          </p>
          <div className="aspect-[4/3] sm:aspect-video min-h-[550px] sm:min-h-[650px] rounded-xl overflow-hidden shadow-2xl mx-auto max-w-3xl border border-border/50">
            <iframe
              src="https://calendly.com/isatimur-it/consulting-121"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduler"
              className="block" // Ensure iframe is block to prevent extra space
            ></iframe>
          </div>
        </section>

        <footer className="text-center mt-16 pt-10 border-t border-border">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-3">
            Have questions or prefer email? Reach out to us directly:
          </p>
          <div className="space-y-1">
            <p className="text-lg">
              <a href="mailto:author1@example.com" className="text-primary hover:text-primary/80 transition-colors duration-300">
                author1@example.com
              </a>
            </p>
            <p className="text-lg">
              <a href="mailto:author2@example.com" className="text-primary hover:text-primary/80 transition-colors duration-300">
                author2@example.com
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
