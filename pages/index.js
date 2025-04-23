import React from "react";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613914-85f342c51b14?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-xl shadow-lg max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pink-500">Welcome to FitZone 💪</h1>
          <p className="text-xl">Your fitness journey begins here. Train hard. Live better.</p>
          <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-xl font-semibold transition">
            Start Training
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">What I Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "1-on-1 Coaching",
              desc: "Custom training plans & accountability.",
              img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Meal Planning",
              desc: "Eat right, feel amazing. Personalized nutrition.",
              img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Workout Programs",
              desc: "Programs built for fat loss, strength, and growth.",
              img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-pink-400">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-10 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} FitZone. All rights reserved.</p>
        <p className="text-sm text-gray-500 mt-1">Connect with me on IG: @fitzone_coach</p>
      </footer>
    </div>
  );
}
