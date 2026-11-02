
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-600">
          ConneXn<span className="text-gray-900">.</span>
        </h1>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="px-5 py-2 text-gray-700 font-medium hover:text-indigo-600"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-5 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <span className="mb-6 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
          Your world. Your connections.
        </span>

        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
          Connect faster.
          <span className="block text-indigo-600">
            Connect smoother.
          </span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl">
          Welcome to ConneXn, where meaningful connections begin.
          Share your moments, discover new people, and stay connected
          with the people who matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/register"
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
          >
            Get Started →
          </Link>

          <Link
            href="/login"
            className="px-8 py-4 border border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition"
          >
            Login to ConneXn
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: "💬",
            title: "Stay Connected",
            description:
              "Chat, share, and keep in touch with friends wherever you are.",
          },
          {
            icon: "🌍",
            title: "Discover People",
            description:
              "Meet new people, explore communities, and build meaningful connections.",
          },
          {
            icon: "✨",
            title: "Share Your World",
            description:
              "Share your thoughts, experiences, and everyday moments.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-gray-50 hover:bg-indigo-50 transition"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
      <footer className="border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
        {/* © {new Date().getFullYear()} ConneXn. All rights reserved. */}
      </footer>
    </main>
  );
}
