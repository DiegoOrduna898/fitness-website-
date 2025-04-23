import React from "react";
import { Button } from "@/components/ui/button";

export default function FitnessSite() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 shadow p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">FitZone</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#services" className="hover:text-green-400">Services</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Transform Your Body</h2>
        <p className="text-xl mb-8">Join our fitness coaching program to unlock your full potential</p>
        <Button className="bg-white text-black font-semibold hover:bg-gray-200 transition">Get Started</Button>
      </section>

      <section id="about" className="py-16 px-6 md:px-16">
        <h3 className="text-3xl font-bold mb-4">About FitZone</h3>
        <p className="text-lg max-w-3xl">
          FitZone is your personal fitness companion. We provide tailored coaching, nutrition plans, and workout routines
          to help you reach your goals — whether it's weight loss, muscle gain, or just staying fit.
        </p>
      </section>

      <section id="services" className="py-16 px-6 md:px-16 bg-gray-800">
        <h3 className="text-3xl font-bold mb-8">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">1-on-1 Coaching</h4>
            <p>Personalized sessions tailored to your fitness level and goals.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">Nutrition Plans</h4>
            <p>Custom meal plans to complement your training and lifestyle.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">Workout Programs</h4>
            <p>Structured programs for fat loss, muscle gain, or athletic performance.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 md:px-16">
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
        <p className="mb-4">Ready to get started? Reach out today.</p>
        <form className="space-y-4 max-w-md">
          <input className="w-full p-2 rounded bg-gray-800 text-white" type="text" placeholder="Your Name" />
          <input className="w-full p-2 rounded bg-gray-800 text-white" type="email" placeholder="Your Email" />
          <textarea className="w-full p-2 rounded bg-gray-800 text-white" placeholder="Your Message"></textarea>
          <Button className="bg-green-500 text-white hover:bg-green-600">Send</Button>
        </form>
      </section>

      <footer className="text-center py-6 bg-gray-800 text-sm">
        &copy; {new Date().getFullYear()} FitZone. All rights reserved.
      </footer>
    </div>
  );
}
