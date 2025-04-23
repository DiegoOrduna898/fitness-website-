import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-black text-white min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>FitZone | Personal Fitness</title>
        <meta name="description" content="Your personal fitness website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center p-10 space-y-6">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
          Welcome to FitZone 💪
        </h1>
        <p className="text-xl">Your personal fitness site — ready to grow and evolve!</p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="text-center p-12 space-y-6">
        <h2 className="text-3xl font-semibold text-pink-400">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Workouts</h3>
            <p>Customized workout plans for every level.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Nutrition</h3>
            <p>Track your meals and stay on top of your nutrition.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Progress Tracker</h3>
            <p>Track your fitness goals and see your progress over time.</p>
          </div>
        </div>
      </section>

    // Import necessary libraries if required
// Example: import React from "react";

function Index() {
  return (
    <div>
      <h1>Welcome to My Fitness Website</h1>
      <p>This is your go-to platform for all things fitness!</p>
      {/* Add additional components or content as needed */}
    </div>
  );
}

export default Index;
