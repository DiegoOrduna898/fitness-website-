import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white font-poppins min-h-screen">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613914-85f342c51b14?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20 z-0" />
        <div className="z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-400 drop-shadow mb-4">
            Welcome to FitZone 💪
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            Train like a beast. Feel like a legend.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Services I Provide
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "1-on-1 Coaching",
              desc: "Custom training plans & real accountability.",
              img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Meal Planning",
              desc: "Fuel your body with clean and effective nutrition.",
              img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Training Programs",
              desc: "Tailored programs for fat loss, strength, & growth.",
              img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-10 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} FitZone. All rights reserved.</p>
        <p className="text-sm text-gray-500 mt-1">Built by your future 7-figure self 💼</p>
      </footer>
    </div>
  );
}
updated index with new layout
