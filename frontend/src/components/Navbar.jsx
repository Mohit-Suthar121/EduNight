import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/40 bg-slate-950/90 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* 1. Brand Logo */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="h-9 w-9 rounded-xl bg-linear-to-tr from-blue-600 via-indigo-600 to-blue-400 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                E
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Edu<span className="text-blue-500">NIGHT</span>
              </span>
            </a>

          </div>

          {/* 4. Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="/courses" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
              Explore Courses
            </a>
            <a href="/dashboard" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
              My Learning
            </a>
          </nav>

          {/* 5. Right Action Section (Student Quick Stats & Profile) */}
          <div className="flex items-center gap-3">

            {/* Learning Progress Quick Badge */}
            <a
              href="/dashboard"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-950/60 border border-blue-800/40 rounded-xl hover:border-blue-700 transition-colors"
              title="3 Courses in Progress"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-semibold text-blue-300">My Progress</span>
            </a>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 19h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 6. Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-blue-900/40 bg-slate-950 px-4 pt-3 pb-6 space-y-4">

          <nav className="flex flex-col gap-2">
            <a href="/courses" className="px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-lg">
              Explore Courses
            </a>
            <a href="/dashboard" className="px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-lg flex justify-between items-center">
              <span>My Learning / Enrolled</span>
              <span className="text-xs bg-blue-600/30 text-blue-400 px-2 py-0.5 rounded-full">3 Active</span>
            </a>


          </nav>
        </div>
      )}
    </header>
  );
}