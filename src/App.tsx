import React, { useEffect, useRef, useState } from "react";

// ─── Sponsor logos (text-based representations) ───────────────────────────────
const OFFICIAL_SPONSORS = [
  { name: "EridanCity", type: "eridan" },
  { name: "Johnvents", type: "johnvents" },
  { name: "Rokswood", type: "rokswood" },
  { name: "MTN", type: "mtn" },
  { name: "airtel", type: "airtel" },
  { name: "Domino's Pizza", type: "dominos" },
];

const ALL_SPONSORS = [
  { name: "Kolomoni", type: "kolomoni" },
  { name: "Johnvents", type: "johnvents" },
  { name: "Rokswood Group", type: "rokswood" },
  { name: "MTN", type: "mtn" },
  { name: "airtel", type: "airtel" },
  { name: "Domino's Pizza", type: "dominos" },
  { name: "Orijin", type: "orijin" },
  { name: "Gala Chinchin", type: "gala" },
  { name: "Game House", type: "gamehouse" },
  { name: "Mr Virgin Shot It", type: "mrvirgin" },
  { name: "EridanCity", type: "eridan" },
  { name: "Johnvents Foods", type: "johnventsfoods" },
];

// ─── Sponsor Logo Component ────────────────────────────────────────────────────
const SponsorLogo: React.FC<{ type: string; name: string; size?: "sm" | "md" | "lg" }> = ({
  type,
  name,
  size = "md",
}) => {
  const sizeClass = size === "sm" ? "h-8 px-2" : size === "lg" ? "h-16 px-4" : "h-12 px-3";

  const logos: Record<string, JSX.Element> = {
    eridan: (
      <div className={`flex items-center gap-1.5 ${sizeClass}`}>
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
          <circle cx="10" cy="10" r="9" stroke="#e91e8c" strokeWidth="2" />
          <path d="M6 10 C6 6 14 6 14 10 C14 14 6 14 6 10Z" fill="#e91e8c" opacity="0.4" />
          <circle cx="10" cy="10" r="3" fill="#e91e8c" />
        </svg>
        <span className="font-bold text-gray-800" style={{ fontFamily: "Georgia, serif", fontSize: size === "lg" ? "1rem" : "0.85rem" }}>
          EridanCity
        </span>
      </div>
    ),
    johnvents: (
      <div className={`flex items-center ${sizeClass}`}>
        <div
          className="rounded-full flex items-center justify-center px-3 py-1"
          style={{ background: "#5c2d0a" }}
        >
          <span className="text-white font-bold" style={{ fontSize: size === "lg" ? "0.9rem" : "0.75rem", fontFamily: "Georgia, serif" }}>
            Johnvents
          </span>
        </div>
      </div>
    ),
    johnventsfoods: (
      <div className={`flex items-center ${sizeClass}`}>
        <div className="rounded-full flex items-center justify-center px-3 py-1" style={{ background: "#5c2d0a" }}>
          <div>
            <div className="text-white font-bold" style={{ fontSize: "0.75rem", fontFamily: "Georgia, serif" }}>Johnvents</div>
            <div className="text-yellow-400" style={{ fontSize: "0.5rem", letterSpacing: "0.1em" }}>JOHNVENTS FOODS</div>
          </div>
        </div>
      </div>
    ),
    rokswood: (
      <div className={`flex items-center gap-1.5 ${sizeClass}`}>
        <svg viewBox="0 0 20 30" className="h-8 w-5" fill="none">
          <path d="M10 2 L10 28 M6 8 L10 5 L14 8 M4 14 L10 10 L16 14 M6 20 L10 16 L14 20" stroke="#3d2b1a" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div>
          <div className="font-bold text-gray-800 leading-none" style={{ fontSize: "0.8rem", letterSpacing: "0.15em", fontFamily: "Georgia, serif" }}>ROKSWOOD</div>
          <div className="text-gray-500 leading-none" style={{ fontSize: "0.55rem", letterSpacing: "0.1em" }}>GROUP</div>
          <div className="text-gray-400 leading-none italic" style={{ fontSize: "0.45rem" }}>...we think aloud</div>
        </div>
      </div>
    ),
    mtn: (
      <div className={`flex items-center ${sizeClass}`}>
        <div className="rounded-full border-2 border-black px-4 py-1 flex items-center justify-center">
          <span className="font-black text-black" style={{ fontSize: size === "lg" ? "1.1rem" : "0.85rem", letterSpacing: "0.05em" }}>MTN</span>
        </div>
      </div>
    ),
    airtel: (
      <div className={`flex items-center gap-1 ${sizeClass}`}>
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path d="M2 18 Q10 2 18 10 Q14 6 10 10 Q6 14 10 18" fill="#e01f26" />
        </svg>
        <span className="font-bold text-red-600" style={{ fontSize: size === "lg" ? "1rem" : "0.85rem" }}>airtel</span>
      </div>
    ),
    dominos: (
      <div className={`flex items-center gap-1.5 ${sizeClass}`}>
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <rect x="2" y="2" width="9" height="9" rx="1" fill="#e31837" />
          <rect x="13" y="2" width="9" height="9" rx="1" fill="#006ab1" />
          <rect x="2" y="13" width="9" height="9" rx="1" fill="#006ab1" />
          <rect x="13" y="13" width="9" height="9" rx="1" fill="#e31837" />
          <circle cx="6.5" cy="6.5" r="1.5" fill="white" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
          <circle cx="6.5" cy="17.5" r="1.5" fill="white" />
          <circle cx="17.5" cy="17.5" r="1.5" fill="white" />
          <circle cx="20.5" cy="17.5" r="1.5" fill="white" />
        </svg>
        <div>
          <div className="font-bold text-blue-700 leading-none" style={{ fontSize: "0.75rem" }}>Domino's</div>
          <div className="font-bold text-blue-700 leading-none" style={{ fontSize: "0.75rem" }}>Pizza</div>
        </div>
      </div>
    ),
    orijin: (
      <div className={`flex items-center ${sizeClass}`}>
        <div className="rounded-full w-12 h-12 flex items-center justify-center" style={{ background: "radial-gradient(circle, #1a4a1a, #0a2a0a)" }}>
          <span className="text-green-400 font-bold" style={{ fontSize: "0.6rem", letterSpacing: "0.05em" }}>ORIJIN</span>
        </div>
      </div>
    ),
    gala: (
      <div className={`flex flex-col items-center ${sizeClass}`}>
        <div className="border-2 border-red-600 rounded-full px-2 py-0.5">
          <span className="text-red-600 font-bold" style={{ fontSize: "0.8rem", fontFamily: "Georgia, serif" }}>Gala</span>
        </div>
        <span className="font-black" style={{ fontSize: "0.9rem", color: "#f5a623" }}>chinchin</span>
        <span className="text-gray-500 italic" style={{ fontSize: "0.4rem" }}>Delicious, Crunchy, & Yummy</span>
      </div>
    ),
    gamehouse: (
      <div className={`flex items-center ${sizeClass}`}>
        <div className="rounded-full w-12 h-12 flex items-center justify-center" style={{ background: "radial-gradient(circle, #1a0a3a, #0a0520)" }}>
          <div className="text-center">
            <svg viewBox="0 0 16 14" className="h-4 w-4 mx-auto" fill="none">
              <rect x="1" y="4" width="14" height="9" rx="2" stroke="#a855f7" strokeWidth="1.2" />
              <path d="M5 8H7M6 7V9M10 8H11M9.5 8H10.5" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" />
              <path d="M5 1 L8 4 L11 1" stroke="#a855f7" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <div className="text-purple-400 leading-none" style={{ fontSize: "0.35rem", letterSpacing: "0.05em" }}>GAME HOUSE</div>
          </div>
        </div>
      </div>
    ),
    mrvirgin: (
      <div className={`flex items-center ${sizeClass}`}>
        <div className="bg-black w-12 h-12 flex items-center justify-center">
          <span className="text-white" style={{ fontSize: "0.4rem", textAlign: "center", lineHeight: 1.3 }}>MR VIRGIN<br />SHOT IT</span>
        </div>
      </div>
    ),
    kolomoni: (
      <div className={`flex items-center gap-1.5 ${sizeClass}`}>
        <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "#1a56db" }}>
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
            <rect x="1" y="1" width="6" height="6" rx="1" fill="white" />
            <rect x="9" y="1" width="6" height="6" rx="1" fill="white" />
            <rect x="1" y="9" width="6" height="6" rx="1" fill="white" />
            <rect x="9" y="9" width="6" height="6" rx="1" fill="white" />
          </svg>
        </div>
        <span className="font-bold text-blue-700" style={{ fontSize: "0.85rem" }}>Kolomoni</span>
      </div>
    ),
  };

  return logos[type] || (
    <div className={`flex items-center ${sizeClass}`}>
      <span className="font-semibold text-gray-700" style={{ fontSize: "0.8rem" }}>{name}</span>
    </div>
  );
};

// ─── Scrolling Sponsor Bar ─────────────────────────────────────────────────────
const SponsorBar: React.FC = () => {
  const items = [...OFFICIAL_SPONSORS, ...OFFICIAL_SPONSORS, ...OFFICIAL_SPONSORS];
  return (
    <div className="bg-white border-b border-gray-100 overflow-hidden relative" style={{ height: "56px" }}>
      <div className="flex items-center gap-1 absolute top-0 left-0 h-full" style={{ whiteSpace: "nowrap", animation: "marquee 30s linear infinite" }}>
        <div className="flex items-center gap-2 pr-4 border-r border-gray-200 h-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase whitespace-nowrap">Official Sponsors</span>
        </div>
        {items.map((s, i) => (
          <div key={i} className="flex-shrink-0">
            <SponsorLogo type={s.type} name={s.name} size="sm" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

// ─── Navbar ────────────────────────────────────────────────────────────────────
const Navbar: React.FC = () => (
  <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-black shadow-lg shadow-black/50">
    <span
      className="text-white font-bold text-2xl"
      style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
    >
      Nightflix
    </span>
    <a
      href="#tickets"
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
      background: "radial-gradient(ellipse at center, #1a0a2e 0%, #0d0514 50%, #000 100%)",
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
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }} />

    {/* Badge */}
    <div className="relative mb-6">
      <span
        className="inline-block text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-red-800/60"
        style={{ background: "rgba(139,0,30,0.35)", color: "#f87171", letterSpacing: "0.25em" }}
      >
        The Biggest Open-Air Cinema
      </span>
    </div>

    {/* Headline */}
    <h1 className="relative z-10 text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight max-w-4xl">
      Nightflix is{" "}
      <span className="text-red-500 italic relative">
        NOT
        <span className="absolute bottom-1 left-0 w-full h-0.5 bg-red-500"></span>
      </span>{" "}
      Netflix.
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
      Join over <strong className="text-white">1,000 people</strong> for the biggest open-air cinema
      experience in Ibadan. Fresh air, fun games, great music, and a movie under the stars.
    </p>

    {/* Event details card */}
    <div
      className="relative z-10 mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20 rounded-xl px-6 py-4 text-sm md:text-base text-white"
      style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}
    >
      <div className="flex items-center gap-2 sm:pr-6">
        <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Palms Mall, Ringroad, Ibadan</span>
      </div>
      <div className="flex items-center gap-2 sm:px-6">
        <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} strokeLinecap="round" />
          <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} strokeLinecap="round" />
          <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} strokeLinecap="round" />
        </svg>
        <span>Saturday, June 13, 2026.</span>
      </div>
      <div className="flex items-center gap-2 sm:pl-6">
        <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <polyline points="12 6 12 12 16 14" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>5:00 PM</span>
      </div>
    </div>

    {/* CTA */}
    <div id="tickets" className="relative z-10 mt-10">
      <a
        href="#"
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

// ─── Sponsors Section ──────────────────────────────────────────────────────────
const SponsorsSection: React.FC = () => (
  <section className="bg-white py-16 px-4">
    <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-12">
      Proudly Sponsored and Supported By
    </p>
    <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
      {ALL_SPONSORS.map((s, i) => (
        <div
          key={i}
          className="flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
        >
          <SponsorLogo type={s.type} name={s.name} size="lg" />
        </div>
      ))}
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
        <SponsorBar />
        <Navbar />
      </header>
      <Hero />
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default App;
