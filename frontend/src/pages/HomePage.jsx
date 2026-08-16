import React, { useState } from 'react';

// Mock Course Data
const MOCK_COURSES = [

   {
    id: '1',
    title: 'Complete MERN Stack Web Development',
    instructor: 'Alex Rivera',
    category: 'Full Stack',
    duration: '42 hrs',
    rating: 4.9,
    reviews: 1280,
    price: '$89.99',
    level: 'Intermediate',
    enrolled: 4520,
    imageGradient: 'from-blue-600 to-indigo-900',
    description:
      'Master MongoDB, Express.js, React, and Node.js by building production-ready scalable real-time applications.',
  },
  {
    id: '2',
    title: 'Data Structures & Algorithms Masterclass',
    instructor: 'Sarah Chen',
    category: 'Algorithms',
    duration: '38 hrs',
    rating: 4.8,
    reviews: 2150,
    price: '$79.99',
    level: 'Intermediate',
    enrolled: 6830,
    imageGradient: 'from-purple-600 to-pink-800',
    description:
      'Master arrays, linked lists, trees, graphs, dynamic programming, and advanced problem-solving techniques.',
  },
  {
    id: '3',
    title: 'UI/UX Design from Zero to Pro',
    instructor: 'Maya Thompson',
    category: 'Design',
    duration: '28 hrs',
    rating: 4.9,
    reviews: 940,
    price: '$69.99',
    level: 'Beginner',
    enrolled: 3210,
    imageGradient: 'from-pink-500 to-rose-800',
    description:
      'Learn user research, wireframing, prototyping, visual design, and modern UI/UX principles using Figma.',
  },
  {
    id: '4',
    title: 'AWS Cloud Engineering Bootcamp',
    instructor: 'Daniel Brooks',
    category: 'Cloud & DevOps',
    duration: '35 hrs',
    rating: 4.7,
    reviews: 760,
    price: '$99.99',
    level: 'Intermediate',
    enrolled: 2840,
    imageGradient: 'from-orange-500 to-red-800',
    description:
      'Build, deploy, and manage scalable applications on AWS using EC2, S3, Lambda, RDS, and CloudFormation.',
  },
  {
    id: '5',
    title: 'Next.js Full Stack Development',
    instructor: 'Ryan Mitchell',
    category: 'Full Stack',
    duration: '31 hrs',
    rating: 4.8,
    reviews: 1120,
    price: '$84.99',
    level: 'Advanced',
    enrolled: 3970,
    imageGradient: 'from-slate-600 to-slate-950',
    description:
      'Build modern full-stack applications with Next.js, TypeScript, PostgreSQL, authentication, and server actions.',
  },
  {
    id: '6',
    title: 'Competitive Programming & Problem Solving',
    instructor: 'Arjun Mehta',
    category: 'Algorithms',
    duration: '45 hrs',
    rating: 4.9,
    reviews: 1870,
    price: '$74.99',
    level: 'Advanced',
    enrolled: 5120,
    imageGradient: 'from-emerald-500 to-teal-900',
    description:
      'Develop competitive programming skills with advanced algorithms, graph theory, greedy techniques, and DP.',
  },
  {
    id: '7',
    title: 'Figma & Modern Interface Design',
    instructor: 'Emma Wilson',
    category: 'Design',
    duration: '19 hrs',
    rating: 4.6,
    reviews: 620,
    price: '$49.99',
    level: 'Beginner',
    enrolled: 1980,
    imageGradient: 'from-violet-500 to-purple-900',
    description:
      'Create beautiful responsive interfaces and interactive prototypes while mastering Figma design workflows.',
  },
  {
    id: '8',
    title: 'Docker & Kubernetes: DevOps Complete Guide',
    instructor: 'Michael Carter',
    category: 'Cloud & DevOps',
    duration: '26 hrs',
    rating: 4.8,
    reviews: 890,
    price: '$89.99',
    level: 'Advanced',
    enrolled: 3460,
    imageGradient: 'from-cyan-500 to-blue-900',
    description:
      'Learn containerization, Docker, Kubernetes, CI/CD pipelines, deployments, scaling, and production monitoring.',
  },
  {
    id: '9',
    title: 'Python Django Full Stack Developer',
    instructor: 'Olivia Parker',
    category: 'Full Stack',
    duration: '36 hrs',
    rating: 4.7,
    reviews: 1030,
    price: '$79.99',
    level: 'Intermediate',
    enrolled: 3750,
    imageGradient: 'from-green-500 to-emerald-900',
    description:
      'Build complete web applications using Python, Django, PostgreSQL, REST APIs, authentication, and deployment.',
  },
  {
    id: '10',
    title: 'System Design & Scalable Architecture',
    instructor: 'David Kim',
    category: 'Algorithms',
    duration: '24 hrs',
    rating: 4.9,
    reviews: 1340,
    price: '$94.99',
    level: 'Advanced',
    enrolled: 4210,
    imageGradient: 'from-amber-500 to-orange-900',
    description:
      'Learn how to design scalable distributed systems with caching, databases, load balancing, queues, and microservices.',
  },
];

const ENROLLED_COURSES = [
  { id: '1', title: 'Complete MERN Stack Web Development', progress: 68, lastModule: 'Module 8: Socket.io Real-time Setup' },
  { id: '2', title: 'Data Structures & Algorithms in C++', progress: 34, lastModule: 'Module 4: Dynamic Programming' },
];

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Algorithms', 'Design', 'Cloud & DevOps'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-blue-900/30 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                Night Owl Engineering Edition
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Master Code in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Quiet Hours</span>
              </h1>
              
              <p className="text-lg text-slate-400 max-w-2xl">
                Explore developer-focused courses built for software engineers, full-stack creators, and algorithm enthusiasts.
              </p>

              {/* Search Bar Widget */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <div className="relative w-full sm:w-96">
                  <input
                    type="text"
                    placeholder="Search courses, stacks, topics..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-blue-900/60 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                  />
                  <svg className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-600/25">
                  Search
                </button>
              </div>
            </div>

            {/* Hero Right: Learning Progress Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-blue-900/40 backdrop-blur-sm shadow-xl space-y-5">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-white text-base">Student Learning Dashboard</h3>
                  <span className="text-xs text-blue-400 font-semibold bg-blue-950 px-2.5 py-1 rounded-md border border-blue-800/50">2 Active Enrolled</span>
                </div>

                <div className="space-y-4">
                  {ENROLLED_COURSES.map((course) => (
                    <div key={course.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-slate-200 line-clamp-1">{course.title}</span>
                        <span className="text-blue-400 font-bold">{course.progress}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full`}
                          style={{width:`${course.progress}%`}}
                          
                        />
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">{course.lastModule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MAIN CATALOG SECTION */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Category Filters Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Explore Courses</h2>
            <p className="text-xs text-slate-400 mt-1">Filtered by modern tech stacks and engineering disciplines</p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {MOCK_COURSES.map((course) => (

            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className={`group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 overflow-hidden flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-blue-950/50 ${activeCategory===course.category || activeCategory==="All"?"flex":"hidden"} `}
            >
              <div>
                {/* Card Banner */}
                <div className={`h-36 w-full bg-gradient-to-tr ${course.imageGradient} p-4 flex flex-col justify-between relative overflow-hidden`}>
                  <span className="self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/80 text-blue-300 border border-blue-500/30">
                    {course.category}
                  </span>
                  <div className="text-white font-semibold text-sm drop-shadow-md">
                    {course.level}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-slate-100 text-base line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400">By <span className="text-slate-300">{course.instructor}</span></p>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-400 font-medium">
                      ★ {course.rating} <span className="text-slate-500">({course.reviews})</span>
                    </span>
                  </div>
                </div>

                
              </div>

              {/* Card Footer */}
              <div className="p-3 flex items-center justify-between border-t border-slate-800/50 mt-4">
              
                <span className="text-lg font-bold text-white flex ">{course.price}</span>
                <span className="text-xs font-semibold text-blue-400 group-hover:underline ">View Details →</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 3. COURSE DETAILS DRAWER / MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-blue-900/60 rounded-2xl max-w-2xl w-full p-6 space-y-6 relative shadow-2xl shadow-black">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                {selectedCourse.category} • {selectedCourse.level}
              </span>
              <h2 className="text-2xl font-bold text-white">{selectedCourse.title}</h2>
              <p className="text-xs text-slate-400">Taught by <span className="text-slate-200 font-medium">{selectedCourse.instructor}</span></p>
            </div>

            {/* Course Summary Metadata */}
            <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs">
              <div>
                <p className="text-slate-500">Duration</p>
                <p className="font-semibold text-slate-200 mt-0.5">{selectedCourse.duration}</p>
              </div>
              <div>
                <p className="text-slate-500">Rating</p>
                <p className="font-semibold text-amber-400 mt-0.5">★ {selectedCourse.rating}</p>
              </div>
              <div>
                <p className="text-slate-500">Students</p>
                <p className="font-semibold text-slate-200 mt-0.5">{selectedCourse.enrolled}</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-300">About this course</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{selectedCourse.description}</p>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div>
                <span className="text-xs text-slate-500 block">Total Price</span>
                <span className="text-2xl font-bold text-white">{selectedCourse.price}</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
                >
                  Close
                </button>
                <button className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}