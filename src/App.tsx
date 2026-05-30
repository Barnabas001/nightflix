import React from "react";

// ─── Navbar ────────────────────────────────────────────────────────────────────
const Navbar: React.FC = () => (
  <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-black shadow-lg shadow-black/50">
    <span
      className="text-white font-bold text-2xl"
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        letterSpacing: "-0.02em",
      }}
    >
      Nightflix
    </span>
    <a
      href="https://selar.com/o2tj3p0r38"
      target="_blank"
      className="text-white text-xs font-semibold tracking-widest uppercase border border-white/40 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-200"
    >
      Buy Tickets
    </a>
  </nav>
);

// ─── Hero Section ──────────────────────────────────────────────────────────────
const Hero: React.FC = () => (
  <section
    className="relative flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 overflow-hidden"
    style={{
      background:
        "radial-gradient(ellipse at center, #1a0a2e 0%, #0d0514 50%, #000 100%)",
      minHeight: "85vh",
    }}
  >
    {/* Background glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(180,20,60,0.25) 0%, transparent 70%)",
      }}
    />
    {/* Noise texture overlay */}
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />

    {/* Badge */}
    <div className="relative mb-6">
      <span
        className="inline-block text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-red-800/60"
        style={{
          background: "rgba(139,0,30,0.35)",
          color: "#f87171",
          letterSpacing: "0.25em",
        }}
      >
        The Biggest Open-Air Cinema
      </span>
    </div>

    {/* Headline */}
    <h1 className="relative z-10 text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight max-w-4xl">
      Ibadan's Premium{" "}
      <span className="text-red-500 italic relative">
        Open-Air
        <span className="absolute bottom-1 left-0 w-full h-0.5 bg-red-500"></span>
      </span>{" "}
      Cinema.
    </h1>

    {/* Sub-headline */}
    <h2
      className="relative z-10 mt-4 text-2xl sm:text-3xl md:text-4xl font-black text-red-500 tracking-wide"
      style={{ letterSpacing: "0.02em" }}
    >
      STEP OUT &amp; FEEL THE VIBE!
    </h2>

    {/* Description */}
    <p className="relative z-10 mt-6 text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
      Join over <strong className="text-white">1,000 people</strong> for the
      biggest open-air cinema experience in Ibadan. Fresh air, fun games, great
      music, and a movie under the stars.
    </p>

    {/* Event details card */}
    <div
      className="relative z-10 mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20 rounded-xl px-6 py-4 text-sm md:text-base text-white"
      style={{
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="flex items-center gap-2 sm:pr-6">
        <svg
          className="w-4 h-4 text-red-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>Palms Mall, Ringroad, Ibadan</span>
      </div>
      <div className="flex items-center gap-2 sm:px-6">
        <svg
          className="w-4 h-4 text-teal-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="18"
            rx="2"
            ry="2"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="16"
            y1="2"
            x2="16"
            y2="6"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <line
            x1="8"
            y1="2"
            x2="8"
            y2="6"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="10"
            x2="21"
            y2="10"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
        <span>Saturday, June 13, 2026.</span>
      </div>
      <div className="flex items-center gap-2 sm:pl-6">
        <svg
          className="w-4 h-4 text-teal-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <polyline
            points="12 6 12 12 16 14"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>5:00 PM</span>
      </div>
    </div>

    {/* CTA */}
    <div id="tickets" className="relative z-10 mt-10">
      <a
        href="https://selar.com/o2tj3p0r38"
        target="_blank"
        className="inline-block font-black text-white text-sm md:text-base tracking-widest uppercase px-12 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #e8192c 0%, #c0112a 100%)",
          boxShadow: "0 0 30px rgba(220,38,38,0.4), 0 4px 15px rgba(0,0,0,0.4)",
          letterSpacing: "0.12em",
        }}
      >
        Get Your Ticket Now
      </a>
    </div>
  </section>
);

// ─── Footer ────────────────────────────────────────────────────────────────────
const Footer: React.FC = () => (
  <footer className="bg-black text-gray-500 text-center py-6 text-xs tracking-widest">
    © 2026 Nightflix · All Rights Reserved
  </footer>
);

// ─── App ───────────────────────────────────────────────────────────────────────
const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
