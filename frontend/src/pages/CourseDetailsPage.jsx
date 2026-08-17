import React from 'react';
import { useParams } from 'react-router-dom';

const ALL_COURSES = [
    {
        id: '1',
        title: 'Complete MERN Stack Web Development',
        instructor: {
            name: 'Alex Rivera',
            role: 'Senior Full Stack Engineer',
            bio: '10+ years building scalable cloud architectures and real-time JS applications.',
            avatar: 'AR',
        },
        category: 'Full Stack',
        duration: '42 hrs',
        rating: 4.9,
        reviews: 1280,
        price: 89.99,
        originalPrice: 129.99,
        level: 'Intermediate',
        enrolled: '4.5k students',
        badge: 'Bestseller',
        publishedAt: '2026-06-15',
        gradient: 'from-blue-600 to-indigo-900',
        description:
            'Master MongoDB, Express.js, React, and Node.js by building production-ready real-time web applications.',
        prerequisites: [
            'Basic JavaScript (ES6+)',
            'HTML5 & CSS3 fundamentals',
        ],
        features: [
            '42 hours on-demand video',
            '15 downloadable coding exercises',
            'Full source code access on GitHub',
            'Certificate of Completion',
            'Lifetime access',
        ],
        modules: [
            {
                id: 'm1',
                title: 'Module 1: Modern JavaScript & Async Fundamentals',
                duration: '4h 15m',
                lessons: [
                    'Event Loop & Call Stack',
                    'Promises & Async/Await',
                    'ES6+ Syntax Essentials',
                ],
            },
            {
                id: 'm2',
                title: 'Module 2: Building Scalable Backends with Node & Express',
                duration: '8h 30m',
                lessons: [
                    'RESTful API Design',
                    'Express Middleware Architecture',
                    'Error Handling & Logging',
                ],
            },
            {
                id: 'm3',
                title: 'Module 3: Database Design with MongoDB Atlas',
                duration: '6h 45m',
                lessons: [
                    'Schema Modeling & Indexing',
                    'Aggregation Framework',
                    'Mongoose ODM Integration',
                ],
            },
            {
                id: 'm4',
                title: 'Module 4: Real-Time Communication with Socket.io',
                duration: '7h 10m',
                lessons: [
                    'WebSocket Handshakes',
                    'Room Management & Events',
                    'Building a Real-Time Chat Engine',
                ],
            },
        ],
    },

    {
        id: '2',
        title: 'Data Structures & Algorithms in C++',
        instructor: {
            name: 'Dr. Sarah Chen',
            role: 'Algorithm Specialist & CS Professor',
            bio: 'Author of 3 DSA books and competitive programming mentor.',
            avatar: 'SC',
        },
        category: 'Algorithms',
        duration: '55 hrs',
        rating: 4.8,
        reviews: 2150,
        price: 74.99,
        originalPrice: 109.99,
        level: 'Beginner',
        enrolled: '8.9k students',
        badge: 'Popular',
        publishedAt: '2026-04-22',
        gradient: 'from-indigo-600 to-slate-900',
        description:
            'Deep dive into memory management, tree traversals, dynamic programming, and graph algorithms.',
        prerequisites: [
            'Basic C++ syntax knowledge',
            'Basic programming fundamentals',
        ],
        features: [
            '55 hours on-demand video',
            '100+ LeetCode style practice problems',
            'Certificate of Completion',
            'Lifetime access',
        ],
        modules: [
            {
                id: 'm1',
                title: 'Module 1: Pointers & Memory Allocation',
                duration: '10h',
                lessons: [
                    'Stack vs Heap',
                    'Smart Pointers',
                    'Memory Leaks Prevention',
                ],
            },
            {
                id: 'm2',
                title: 'Module 2: Trees & Graph Traversals',
                duration: '18h',
                lessons: [
                    'Binary Search Trees',
                    'DFS & BFS Algorithms',
                    'Dijkstra & Shortest Path',
                ],
            },
            {
                id: 'm3',
                title: 'Module 3: Dynamic Programming',
                duration: '14h',
                lessons: [
                    'Memoization & Tabulation',
                    'Knapsack Problems',
                    'LCS & LIS Patterns',
                ],
            },
            {
                id: 'm4',
                title: 'Module 4: Advanced Graph Algorithms',
                duration: '13h',
                lessons: [
                    'Minimum Spanning Trees',
                    'Topological Sorting',
                    'Network Flow Algorithms',
                ],
            },
        ],
    },

    {
        id: '3',
        title: 'Next.js 15 & Socket.io Real-Time Apps',
        instructor: {
            name: 'Marcus Vance',
            role: 'Senior React & Cloud Engineer',
            bio: 'Full stack engineer specializing in real-time systems and modern React architectures.',
            avatar: 'MV',
        },
        category: 'Full Stack',
        duration: '28 hrs',
        rating: 4.95,
        reviews: 840,
        price: 94.99,
        originalPrice: 139.99,
        level: 'Advanced',
        enrolled: '1.8k students',
        badge: 'Hot & New',
        publishedAt: '2026-08-10',
        gradient: 'from-blue-500 to-cyan-900',
        description:
            'Build modern server-rendered applications integrated with WebSockets for instant data synchronization.',
        prerequisites: [
            'Intermediate JavaScript knowledge',
            'Basic React knowledge',
            'Understanding of REST APIs',
        ],
        features: [
            '28 hours on-demand video',
            '12 real-world coding projects',
            'Production-ready source code',
            'Certificate of Completion',
            'Lifetime access',
        ],
        modules: [
            {
                id: 'm1',
                title: 'Module 1: Next.js 15 Fundamentals',
                duration: '6h 20m',
                lessons: [
                    'App Router Architecture',
                    'Server & Client Components',
                    'Data Fetching & Caching',
                ],
            },
            {
                id: 'm2',
                title: 'Module 2: Advanced Next.js Applications',
                duration: '7h 30m',
                lessons: [
                    'Authentication & Authorization',
                    'Server Actions',
                    'Middleware & Route Handlers',
                ],
            },
            {
                id: 'm3',
                title: 'Module 3: Socket.io Real-Time Communication',
                duration: '8h 10m',
                lessons: [
                    'Socket.io Architecture',
                    'Rooms & Namespaces',
                    'Real-Time Event Handling',
                ],
            },
            {
                id: 'm4',
                title: 'Module 4: Production Deployment',
                duration: '6h',
                lessons: [
                    'Environment Configuration',
                    'Scaling WebSocket Servers',
                    'Deploying to Vercel & Cloud Platforms',
                ],
            },
        ],
    },

    {
        id: '4',
        title: 'UI/UX Design Systems with Tailwind CSS',
        instructor: {
            name: 'Elena Rostova',
            role: 'Product Designer & Design Systems Lead',
            bio: 'Product designer focused on accessible interfaces and scalable design systems.',
            avatar: 'ER',
        },
        category: 'Design',
        duration: '18 hrs',
        rating: 4.7,
        reviews: 620,
        price: 49.99,
        originalPrice: 69.99,
        level: 'Beginner',
        enrolled: '3.1k students',
        badge: null,
        publishedAt: '2026-03-18',
        gradient: 'from-indigo-700 to-blue-900',
        description:
            'Craft responsive, dark-mode friendly, accessible, and scalable design component systems.',
        prerequisites: [
            'Basic HTML & CSS',
            'Basic understanding of responsive design',
        ],
        features: [
            '18 hours on-demand video',
            '30+ reusable UI components',
            'Figma design resources',
            'Certificate of Completion',
            'Lifetime access',
        ],
        modules: [
            {
                id: 'm1',
                title: 'Module 1: Design System Fundamentals',
                duration: '4h',
                lessons: [
                    'Design Tokens',
                    'Typography Systems',
                    'Color & Spacing Scales',
                ],
            },
            {
                id: 'm2',
                title: 'Module 2: Tailwind CSS Foundations',
                duration: '5h',
                lessons: [
                    'Utility-First CSS',
                    'Responsive Design',
                    'Dark Mode & Themes',
                ],
            },
            {
                id: 'm3',
                title: 'Module 3: Building Reusable Components',
                duration: '5h',
                lessons: [
                    'Buttons & Forms',
                    'Cards & Navigation',
                    'Modal & Dialog Systems',
                ],
            },
            {
                id: 'm4',
                title: 'Module 4: Accessibility & Production',
                duration: '4h',
                lessons: [
                    'WCAG Fundamentals',
                    'Keyboard Navigation',
                    'Design System Documentation',
                ],
            },
        ],
    },

    {
        id: '5',
        title: 'Docker, Kubernetes & AWS for Developers',
        instructor: {
            name: 'David Miller',
            role: 'Cloud Infrastructure Architect',
            bio: 'Cloud architect with extensive experience designing and scaling distributed systems on AWS.',
            avatar: 'DM',
        },
        category: 'Cloud & DevOps',
        duration: '36 hrs',
        rating: 4.85,
        reviews: 1100,
        price: 84.99,
        originalPrice: 119.99,
        level: 'Intermediate',
        enrolled: '2.9k students',
        badge: 'Featured',
        publishedAt: '2026-05-07',
        gradient: 'from-blue-700 to-slate-900',
        description:
            'Containerize, deploy, and scale microservices architecture on modern cloud infrastructure.',
        prerequisites: [
            'Basic Linux commands',
            'Basic networking concepts',
            'Understanding of REST APIs',
        ],
        features: [
            '36 hours on-demand video',
            '20 hands-on cloud labs',
            'AWS deployment projects',
            'Certificate of Completion',
            'Lifetime access',
        ],
        modules: [
            {
                id: 'm1',
                title: 'Module 1: Docker Fundamentals',
                duration: '8h',
                lessons: [
                    'Images & Containers',
                    'Dockerfiles & Docker Compose',
                    'Container Networking',
                ],
            },
            {
                id: 'm2',
                title: 'Module 2: Kubernetes Essentials',
                duration: '10h',
                lessons: [
                    'Pods & Deployments',
                    'Services & Ingress',
                    'ConfigMaps & Secrets',
                ],
            },
            {
                id: 'm3',
                title: 'Module 3: AWS Cloud Infrastructure',
                duration: '10h',
                lessons: [
                    'EC2 & VPC',
                    'S3 & CloudFront',
                    'IAM & Security Groups',
                ],
            },
            {
                id: 'm4',
                title: 'Module 4: Production Deployment & Scaling',
                duration: '8h',
                lessons: [
                    'CI/CD Pipelines',
                    'Auto Scaling',
                    'Monitoring with CloudWatch',
                ],
            },
        ],
    },

    {
        id: '6',
        title: 'Advanced JavaScript & Async Patterns',
        instructor: {
            name: 'Alex Rivera',
            role: 'Senior Full Stack Engineer',
            bio: '10+ years building scalable cloud architectures and real-time JavaScript applications.',
            avatar: 'AR',
        },
        category: 'Full Stack',
        duration: '22 hrs',
        rating: 4.9,
        reviews: 950,
        price: 59.99,
        originalPrice: 89.99,
        level: 'Advanced',
        enrolled: '5.2k students',
        badge: null,
        publishedAt: '2026-07-28',
        gradient: 'from-cyan-600 to-blue-900',
        description:
            'Master event loops, promises, generators, custom reactive systems, and memory profiling.',
        prerequisites: [
            'Strong JavaScript fundamentals',
            'ES6+ knowledge',
            'Basic Node.js experience',
        ],
        features: [
            '22 hours on-demand video',
            '25 advanced coding challenges',
            'Performance optimization projects',
            'Certificate of Completion',
            'Lifetime access',
        ],
        modules: [
            {
                id: 'm1',
                title: 'Module 1: JavaScript Runtime & Event Loop',
                duration: '5h',
                lessons: [
                    'Call Stack & Event Loop',
                    'Microtasks & Macrotasks',
                    'Browser Runtime Architecture',
                ],
            },
            {
                id: 'm2',
                title: 'Module 2: Advanced Async Programming',
                duration: '6h',
                lessons: [
                    'Promises & Async/Await',
                    'Promise Combinators',
                    'Concurrency Patterns',
                ],
            },
            {
                id: 'm3',
                title: 'Module 3: Generators & Reactive Systems',
                duration: '5h',
                lessons: [
                    'Generators & Iterators',
                    'Custom Event Emitters',
                    'Reactive Programming Concepts',
                ],
            },
            {
                id: 'm4',
                title: 'Module 4: JavaScript Performance',
                duration: '6h',
                lessons: [
                    'Memory Management',
                    'Memory Leak Detection',
                    'Performance Profiling & Optimization',
                ],
            },
        ],
    },
];


export default function CourseDetailsPage() {

    const {id}  = useParams();
    const COURSE_DATA = ALL_COURSES.find((course)=>course.id===id); 

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="border-b border-blue-900/30 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Main Details Header */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-950 text-blue-400 border border-blue-800/50">
                  Full Stack Development
                </span>
                <span className="text-xs text-slate-400">Updated {COURSE_DATA.lastUpdated}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {COURSE_DATA.title}
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
                {COURSE_DATA.subtitle}
              </p>

              {/* Rating & Stats */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                <span className="flex items-center gap-1 font-bold text-amber-400">
                  ★ {COURSE_DATA.rating} <span className="text-slate-400 font-normal">({COURSE_DATA.reviewsCount} ratings)</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-medium">{COURSE_DATA.studentsEnrolled} students enrolled</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">Created by <span className="text-blue-400 font-semibold">{COURSE_DATA.instructor.name}</span></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PAGE MAIN CONTENT LAYOUT */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: SYLLABUS, VIDEO PREVIEW, INSTRUCTOR */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Video Preview Box */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-900/50 bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
              <div className="z-20 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-600/50 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">Preview Course Introduction</p>
              </div>
            </div>

            {/* Course Curriculum Accordion Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-2xl font-bold text-white">Course Curriculum</h2>
                <span className="text-xs text-slate-400">4 Modules • 39 Lessons • 42h total length</span>
              </div>

              <div className="space-y-3">
                {COURSE_DATA.modules.map((mod, idx) => (
                  <div key={idx} className="rounded-xl bg-slate-900/60 border border-slate-800/80 overflow-hidden">
                    <div className="p-4 bg-slate-900 flex justify-between items-center cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400 text-xs font-bold">0{idx + 1}</span>
                        <h3 className="font-semibold text-white text-sm">{mod.title}</h3>
                      </div>
                      <span className="text-xs text-slate-400">{mod.lessonsCount} • {mod.duration}</span>
                    </div>

                    <div className="p-4 pt-2 border-t border-slate-800/50 space-y-2">
                      {mod.lessons.map((lesson, lIdx) => (
                        <div key={lIdx} className="flex items-center justify-between text-xs text-slate-400 py-1 hover:text-slate-200">
                          <span className="flex items-center gap-2">
                            <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {lesson}
                          </span>
                          <span className="text-blue-400/80">Preview</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Section */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <h2 className="text-xl font-bold text-white">Your Instructor</h2>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xl shrink-0">
                  {COURSE_DATA.instructor.avatar}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-white text-base">{COURSE_DATA.instructor.name}</h3>
                  <p className="text-xs text-blue-400 font-medium">{COURSE_DATA.instructor.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">{COURSE_DATA.instructor.bio}</p>
                </div>
              </div>
            </div>

          </main>

          {/* RIGHT COLUMN: STICKY ENROLLMENT / PURCHASE CARD */}
          <aside className="lg:col-span-4 sticky top-20">
            <div className="p-6 rounded-2xl bg-slate-900 border border-blue-900/60 space-y-6 shadow-2xl shadow-black">
              
              {/* Pricing Header */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">${COURSE_DATA.price}</span>
                  <span className="text-sm text-slate-500 line-through">${COURSE_DATA.originalPrice}</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                    {COURSE_DATA.discount}
                  </span>
                </div>
                <p className="text-xs text-slate-400">Full lifetime access. 30-day money-back guarantee.</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all">
                  Enroll Now
                </button>
                <button className="w-full py-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold text-sm transition-all">
                  Add to Wishlist
                </button>
              </div>

              {/* What's Included Checklist */}
              <div className="space-y-3 border-t border-slate-800 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">This Course Includes:</h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  {COURSE_DATA.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}