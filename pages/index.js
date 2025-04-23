import React from "react";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to FitZone 💪</h1>
        <p className="text-xl md:text-2xl max-w-2xl">Your personal fitness journey starts here. Train hard, stay consistent, and transform your life.</p>
        <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-xl font-semibold transition">Get Started</button>
      </section>

      {/* About */}
      <section className="py-16 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl">I'm a certified fitness coach passionate about helping people achieve their health goals. Whether you're trying to build muscle, lose weight, or improve your overall lifestyle — I'm here to guide you every step of the way.</p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-800">
        <h2 className="text-3xl font-bold mb-10">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">1-on-1 Coaching</h3>
            <p>Custom plans, weekly check-ins, and full support to help you hit your goals.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Meal Planning</h3>
            <p>Personalized nutrition guidance that fuels your training and lifestyle.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Workout Programs</h3>
            <p>Targeted training routines built for fat loss, strength, or muscle growth.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-bold mb-10">Transformations</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-800 p-6 rounded-xl">
            <p>"In just 3 months, I lost 20lbs and feel stronger than ever. Truly life-changing!"</p>
            <p className="mt-4 font-semibold">– Sarah M.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <p>"I never thought I could build this much confidence. The coaching was elite."</p>
            <p className="mt-4 font-semibold">– James T.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center bg-black border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} FitZone. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Connect on IG: @fitzone_coach</p>
      </footer>
    </div>
  );
}
