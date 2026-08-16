import React, { useMemo, useState } from 'react';



// <option value={"rating"} >Highest Rated</option>
// <option value={"newest"} >Newest First</option>
// <option value={"price-asc"} >Price: Low to High</option>
// <option value={"price-desc"} >Price: High to Low</option>




export default function CoursesPage() {


    // Mock Courses Data for Exploration Page
    const ALL_COURSES = [
        {
            id: '1',
            title: 'Complete MERN Stack Web Development',
            instructor: 'Alex Rivera',
            category: 'Full Stack',
            duration: '42 hrs',
            rating: 4.9,
            reviews: 1280,
            price: 89.99,
            level: 'Intermediate',
            enrolled: '4.5k students',
            badge: 'Bestseller',
            publishedAt: '2026-06-15',
            gradient: 'from-blue-600 to-indigo-900',
            description: 'Master MongoDB, Express.js, React, and Node.js by building production-ready real-time web applications.',
        },
        {
            id: '2',
            title: 'Data Structures & Algorithms in C++',
            instructor: 'Dr. Sarah Chen',
            category: 'Algorithms',
            duration: '55 hrs',
            rating: 4.8,
            reviews: 2150,
            price: 74.99,
            level: 'Beginner',
            enrolled: '8.9k students',
            badge: 'Popular',
            publishedAt: '2026-04-22',
            gradient: 'from-indigo-600 to-slate-900',
            description: 'Deep dive into memory management, tree traversals, dynamic programming, and graph algorithms.',
        },
        {
            id: '3',
            title: 'Next.js 15 & Socket.io Real-Time Apps',
            instructor: 'Marcus Vance',
            category: 'Full Stack',
            duration: '28 hrs',
            rating: 4.95,
            reviews: 840,
            price: 94.99,
            level: 'Advanced',
            enrolled: '1.8k students',
            badge: 'Hot & New',
            publishedAt: '2026-08-10',
            gradient: 'from-blue-500 to-cyan-900',
            description: 'Build modern server-rendered applications integrated with WebSockets for instant data synchronization.',
        },
        {
            id: '4',
            title: 'UI/UX Design Systems with Tailwind CSS',
            instructor: 'Elena Rostova',
            category: 'Design',
            duration: '18 hrs',
            rating: 4.7,
            reviews: 620,
            price: 49.99,
            level: 'Beginner',
            enrolled: '3.1k students',
            badge: null,
            publishedAt: '2026-03-18',
            gradient: 'from-indigo-700 to-blue-900',
            description: 'Craft responsive, dark-mode friendly, accessible, and scalable design component systems.',
        },
        {
            id: '5',
            title: 'Docker, Kubernetes & AWS for Developers',
            instructor: 'David Miller',
            category: 'Cloud & DevOps',
            duration: '36 hrs',
            rating: 4.85,
            reviews: 1100,
            price: 84.99,
            level: 'Intermediate',
            enrolled: '2.9k students',
            badge: 'Featured',
            publishedAt: '2026-05-07',
            gradient: 'from-blue-700 to-slate-900',
            description: 'Containerize, deploy, and scale microservices architecture on modern cloud infrastructure.',
        },
        {
            id: '6',
            title: 'Advanced JavaScript & Async Patterns',
            instructor: 'Alex Rivera',
            category: 'Full Stack',
            duration: '22 hrs',
            rating: 4.9,
            reviews: 950,
            price: 59.99,
            level: 'Advanced',
            enrolled: '5.2k students',
            badge: null,
            publishedAt: '2026-07-28',
            gradient: 'from-cyan-600 to-blue-900',
            description: 'Master event loops, promises, generators, custom reactive systems, and memory profiling.',
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
                                                defaultChecked={idx === 0}
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
                                                defaultChecked={idx === 0}
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
                                                defaultChecked={idx === 0}
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

                                return ((selectedFilterCategories.includes(course.category) || selectedFilterCategories.includes("All Categories")) && (difficultyLevel === "All Levels" || course.level === difficultyLevel) && (courseDuration.includes("Any Duration") || courseDuration.includes(newDuration))) ?
                                    <div
                                        key={course.id}
                                        className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-blue-950/40"
                                    >
                                        <div>
                                            {/* Card Cover */}
                                            <div className={`h-36 w-full bg-gradient-to-tr ${course.gradient} p-4 flex flex-col justify-between relative overflow-hidden`}>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/80 text-blue-300 border border-blue-500/30">
                                                        {course.category}
                                                    </span>
                                                    {course.badge && (
                                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/90 text-slate-950">
                                                            {course.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-white font-semibold text-xs drop-shadow">
                                                    {course.level} • {course.enrolled}
                                                </div>
                                            </div>

                                            {/* Card Content */}
                                            <div className="p-4 space-y-2.5">
                                                <h3 className="font-bold text-slate-100 text-base line-clamp-2 group-hover:text-blue-400 transition-colors">
                                                    {course.title}
                                                </h3>

                                                <p className="text-xs text-slate-400 line-clamp-2">{course.description}</p>

                                                <p className="text-xs text-slate-400">By <span className="text-slate-300">{course.instructor}</span></p>

                                                <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
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

                                        {/* Card Bottom CTA */}
                                        <div className="p-4 flex items-center justify-between border-t border-slate-800/50 mt-4">
                                            <span className="text-lg font-bold text-white">$ {course.price}</span>
                                            <button className="px-3.5 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 text-xs font-semibold transition-all">
                                                Enroll Course
                                            </button>
                                        </div>
                                    </div> : ""

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