import React, { useMemo, useState } from 'react';
import CourseCard from '../components/CourseCard';
import { useNavigate } from 'react-router-dom';


export default function CoursesPage() {

    const navigate = useNavigate();
    // Mock Courses Data for Exploration Page
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

    const CATEGORIES = ['All Categories', 'Full Stack', 'Algorithms', 'Design', 'Cloud & DevOps', 'Mobile Dev'];
    const LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
    const DURATIONS = ['Any Duration', '0-10 Hours', '10-30 Hours', '30+ Hours'];
    const [selectedFilterCategories, setSelectedFilterCategories] = useState(["All Categories"])
    const [difficultyLevel, setDifficultyLevel] = useState("All Levels");
    const [courseDuration, setCourseDuration] = useState(["Any Duration"]);
    const [searchValue, setSearchValue] = useState("");


    const [sortBy, setSortBy] = useState("all");


    const handleSort = (value) => {
        setSortBy(value)
    }

    const sortedCategories = useMemo(() => {
        let sorted = [...ALL_COURSES];

        if (sortBy === "rating") {
            sorted = [...ALL_COURSES].sort((a, b) => b.rating - a.rating);
        }
        else if (sortBy === "newest") {
            sorted = [...ALL_COURSES].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        }
        else if (sortBy === "price-asc") {
            sorted = [...ALL_COURSES].sort((a, b) => a.price - b.price);
        }
        else if (sortBy === "price-desc") {
            sorted = [...ALL_COURSES].sort((a, b) => b.price - a.price);
        }
        if (searchValue !== "") {
            return sorted.filter((cat) => {
                const value = searchValue.toLowerCase();
                return (
                    cat.title.toLowerCase().includes(value) ||
                    cat.instructor.toLowerCase().includes(value) ||
                    cat.category.toLowerCase().includes(value) ||
                    cat.description.toLowerCase().includes(value) ||
                    cat.level.toLowerCase().includes(value)
                )
            })

        }
        return sorted
    }, [ALL_COURSES, sortBy, searchValue])

    const handleCheck = (e) => {
        if (e.target.checked) {
            setSelectedFilterCategories((state) => [...state, e.target.value])
        }
        else {
            setSelectedFilterCategories((state) => state.filter((cat) => cat !== e.target.value))
        }
    }

    const handleDuration = (e) => {
        if (e.target.checked) {
            setCourseDuration((state) => [...state, e.target.value])
        }
        else {
            setCourseDuration((state) => state.filter((dur) => dur !== e.target.value))
        }
    }

    const handleDifficultyLevel = (e) => {
        setDifficultyLevel(e.target.value)
    }


    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">

            {/* 1. HEADER SECTION */}
            <section className="border-b border-blue-900/30 bg-gradient-to-b from-blue-950/30 to-slate-950 py-10 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-800/40">
                            Course Catalog
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Explore Engineering Courses</h1>
                        <p className="text-sm text-slate-400 max-w-2xl">
                            Discover industry-ready courses designed for developers, software engineers, and system designers.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. MAIN LAYOUT: FILTERS + COURSE LISTING */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT SIDEBAR: FILTERS */}
                    <aside className="lg:col-span-3 space-y-6">
                        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-6">

                            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                                <h3 className="font-bold text-white text-base">Filter Courses</h3>
                                <span className="text-xs text-blue-400 hover:underline cursor-pointer font-medium">Reset All</span>
                            </div>

                            {/* Search Filter Input */}
                            <div className="space-y-2 flex flex-col gap-1">
                                <label className="text-xs font-semibold text-slate-300">Keywords</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search titles, skills..."
                                        className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                                        onChange={(e) => { setSearchValue(e.target.value) }}
                                        value={searchValue}
                                    />
                                    <svg className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>


                            {/* Category Filter */}
                            <div className="space-y-2 flex flex-col gap-2">
                                <label className="text-xs font-semibold text-slate-300">Category</label>
                                <div className="space-y-1">
                                    {CATEGORIES.map((cat, idx) => (
                                        <label key={idx} className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white cursor-pointer py-1">
                                            <input
                                                type="checkbox"
                                                className="rounded border-slate-800 bg-slate-950 text-blue-600 focus:ring-0"
                                                value={cat}
                                                checked={selectedFilterCategories.includes(cat)}
                                                onChange={handleCheck}
                                            />
                                            <span>{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Level Filter */}
                            <div className="space-y-2 border-t border-slate-800/60 pt-4 flex flex-col gap-2">
                                <label className="text-xs font-semibold text-slate-300">Difficulty Level</label>
                                <div className="space-y-1">

                                    {LEVELS.map((lvl, idx) => (
                                        <label key={idx} className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white cursor-pointer py-1">
                                            <input
                                                type="radio"
                                                name="level"
                                                className="border-slate-800 bg-slate-950 text-blue-600 focus:ring-0"
                                                value={lvl}
                                                checked={difficultyLevel === lvl}
                                                onChange={handleDifficultyLevel}
                                            />
                                            <span>{lvl}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Duration Filter */}
                            <div className="space-y-2 border-t border-slate-800/60 pt-4 flex flex-col gap-2">
                                <label className="text-xs font-semibold text-slate-300">Course Duration</label>
                                <div className="space-y-1">
                                    {DURATIONS.map((dur, idx) => (
                                        <label key={idx} className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white cursor-pointer py-1">
                                            <input
                                                type="checkbox"
                                                className="rounded border-slate-800 bg-slate-950 text-blue-600 focus:ring-0"
                                                checked={courseDuration.includes(dur)}
                                                onChange={handleDuration}
                                                value={dur}
                                            />
                                            <span>{dur}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </aside>

                    {/* RIGHT CONTENT: TOOLBAR & COURSES GRID */}
                    <main className="lg:col-span-9 space-y-6">

                        {/* Toolbar (Result count, Sort Dropdown, View Controls) */}
                        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="text-xs text-slate-400">
                                Showing <span className="font-bold text-white">6</span> of <span className="font-bold text-white">24</span> courses
                            </div>

                            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                                {/* Sort dropdown */}
                                <div className="flex items-center gap-2 ">
                                    <span className="text-xs text-slate-400 shrink-0">Sort by:</span>
                                    <select className="bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-blue-500" onChange={(e) => { setSortBy(e.target.value) }}>
                                        <option value={"all"} >All</option>
                                        <option value={"rating"} >Highest Rated</option>
                                        <option value={"newest"} >Newest First</option>
                                        <option value={"price-asc"} >Price: Low to High</option>
                                        <option value={"price-desc"} >Price: High to Low</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        {/* Courses Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedCategories.map((course) => {

                                // const DURATIONS = ['Any Duration', '0-10 Hours', '10-30 Hours', '30+ Hours'];
                                const duration = course.duration.split(" ")[0];
                                let newDuration = course.duration;
                                if (duration >= 0 && duration < 10) newDuration = "0-10 Hours";
                                else if (duration >= 10 && duration < 30) newDuration = "10-30 Hours";
                                else if (duration >= 30) newDuration = "30+ Hours";

                                return ((selectedFilterCategories.includes(course.category) || selectedFilterCategories.includes("All Categories")) && (difficultyLevel === "All Levels" || course.level === difficultyLevel) && (courseDuration.includes("Any Duration") || courseDuration.includes(newDuration))) ? <CourseCard key={course.id} onClick={() => { navigate(`/courses/${course.id}`) }} course={course} /> : ""

                            })}
                        </div>





                        {/* Pagination Controls */}
                        <div className="pt-6 flex justify-center items-center gap-2">
                            <button className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-medium">
                                Previous
                            </button>
                            <button className="px-3.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold">
                                1
                            </button>
                            <button className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-medium">
                                2
                            </button>
                            <button className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-medium">
                                3
                            </button>
                            <button className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-medium">
                                Next
                            </button>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    );
}