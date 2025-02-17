'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-semibold flex items-center gap-2 animate-fade-in">
            <span className="text-blue-500">⚡</span>
            create.inc
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="nav-link">APIs</a>
          <a href="#" className="nav-link">Documentation</a>
          <a href="#" className="nav-link">Examples</a>
          <a href="#" className="nav-link">Sign In</a>
          <a href="#" className="button-invite px-4 py-2 text-white text-sm font-medium">Get Started</a>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        {/* Beta Badge */}
        <div className="flex justify-center mb-8">
          <div className="banner-blue px-4 py-1.5 rounded-full inline-flex items-center animate-fade-in">
            <span className="text-sm text-blue-800">✨ Build AI-powered apps without coding knowledge</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-center mb-8 text-gray-900 animate-fade-in delay-100 max-w-4xl mx-auto">
          Unlock the power of AI<br className="hidden md:block" />in your applications.
        </h1>

        {/* Subheading */}
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in delay-200 leading-relaxed">
          Access powerful AI APIs for image generation, text creation,<br className="hidden md:block" />
          RAG tools, video processing, and custom AI model training.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-20 animate-fade-in delay-300">
          <a 
            href="#" 
            className="button-invite px-8 py-3 text-white text-lg font-medium"
          >
            Get Started
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 animate-fade-in delay-400">
          <div className="feature-card p-6 rounded-lg">
            <div className="text-blue-500 text-2xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold mb-2">AI Image Creation</h3>
            <p className="text-gray-600">Generate stunning images, art, and graphics with state-of-the-art AI models.</p>
          </div>
          <div className="feature-card p-6 rounded-lg">
            <div className="text-blue-500 text-2xl mb-4">📝</div>
            <h3 className="text-lg font-semibold mb-2">Text & Content</h3>
            <p className="text-gray-600">Create engaging content, summaries, and translations powered by advanced language models.</p>
          </div>
          <div className="feature-card p-6 rounded-lg">
            <div className="text-blue-500 text-2xl mb-4">🤖</div>
            <h3 className="text-lg font-semibold mb-2">Custom AI Models</h3>
            <p className="text-gray-600">Train and deploy your own AI models tailored to your specific needs.</p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="max-w-4xl mx-auto animate-fade-in delay-400">
          <div className="demo-card p-8 rounded-lg">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <div className="text-sm text-blue-500 font-medium mb-2">Example API Call</div>
                <p className="text-gray-800 font-mono text-sm bg-gray-50 p-4 rounded">
                  {`curl -X POST https://api.create.inc/v1/generate-image \\`}<br />
                  {`-H "Authorization: Bearer $API_KEY" \\`}<br />
                  {`-d '{"prompt": "A futuristic city with flying cars"}'`}
                </p>
              </div>
              <div className="w-48 h-48 bg-gray-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}