import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Web Development',
    'Data Structures & Algorithms',
    'Full Stack Engineering',
    'UI/UX Design',
    'Cloud & DevOps',
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/40 bg-slate-950/90 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* 1. Brand Logo */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-400 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                E
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Edu<span className="text-blue-500">NIGHT</span>
              </span>
            </a>

            {/* 2. Category Dropdown (Desktop) */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
              >
                <span>Categories</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Category Dropdown Menu */}
              {isCategoryOpen && (
                <div 
                  className="absolute left-0 mt-2 w-56 rounded-xl border border-blue-900/50 bg-slate-900 p-2 shadow-xl shadow-black/50 z-50"
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  {categories.map((cat, idx) => (
                    <a
                      key={idx}
                      href={`/courses?category=${encodeURIComponent(cat)}`}
                      className="block px-3 py-2 text-sm text-slate-300 hover:bg-blue-600/20 hover:text-blue-400 rounded-lg transition-colors"
                    >
                      {cat}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 3. Global Course Search Bar (Desktop/Tablet) */}
          <div className="hidden sm:flex flex-1 max-w-md items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, skills, instructors..."
                className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
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

            {/* Profile Avatar */}
            <a href="/profile" className="relative group">
              <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 font-semibold text-sm hover:border-blue-500 transition-colors">
                JD
              </div>
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
          {/* Mobile Search Input */}
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:border-blue-500"
            />
            <svg className="h-4 w-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <nav className="flex flex-col gap-2">
            <a href="/courses" className="px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-lg">
              Explore Courses
            </a>
            <a href="/dashboard" className="px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-lg flex justify-between items-center">
              <span>My Learning / Enrolled</span>
              <span className="text-xs bg-blue-600/30 text-blue-400 px-2 py-0.5 rounded-full">3 Active</span>
            </a>
            
            <div className="pt-2 border-t border-slate-900">
              <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Categories</p>
              {categories.map((cat, idx) => (
                <a
                  key={idx}
                  href={`/courses?category=${encodeURIComponent(cat)}`}
                  className="block px-3 py-1.5 text-sm text-slate-400 hover:text-blue-400"
                >
                  {cat}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}