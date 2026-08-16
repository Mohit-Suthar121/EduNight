import React from 'react';

// Mock Student Dashboard Data
const STUDENT_METRICS = [
    { label: 'Enrolled Courses', value: '4', detail: '2 in progress', icon: '📚' },
    { label: 'Hours Learned', value: '48.5 hrs', detail: '+5.2 hrs this week', icon: '⏱️' },
    { label: 'Completed Modules', value: '28', detail: '84% completion rate', icon: '✅' },
    { label: 'Certificates Earned', value: '2', detail: 'Verified skills', icon: '🎓' },
];

const ENROLLED_COURSES = [
    {
        id: '1',
        title: 'Complete MERN Stack Web Development',
        instructor: 'Alex Rivera',
        category: 'Full Stack',
        progress: 68,
        completedModules: 14,
        totalModules: 20,
        lastAccessed: '2 hours ago',
        currentLesson: 'Module 8: Socket.io Real-time Setup & Architecture',
        nextTask: 'Build client-side event listeners',
        gradient: 'from-blue-600 to-indigo-900',
    },
    {
        id: '2',
        title: 'Data Structures & Algorithms in C++',
        instructor: 'Dr. Sarah Chen',
        category: 'Algorithms',
        progress: 34,
        completedModules: 8,
        totalModules: 24,
        lastAccessed: 'Yesterday',
        currentLesson: 'Module 4: Dynamic Programming & Memoization',
        nextTask: 'Solve 0/1 Knapsack practice set',
        gradient: 'from-indigo-600 to-slate-900',
    },
    {
        id: '3',
        title: 'Next.js 15 & Socket.io Architecture',
        instructor: 'Marcus Vance',
        category: 'Full Stack',
        progress: 12,
        completedModules: 2,
        totalModules: 16,
        lastAccessed: '3 days ago',
        currentLesson: 'Module 2: Server Components & Hydration',
        nextTask: 'Set up app directory routing',
        gradient: 'from-blue-500 to-cyan-900',
    },
];

const RECENT_ACTIVITY = [
    { id: '1', title: 'Completed Quiz: WebSockets vs HTTP', date: 'Today, 11:30 AM', status: 'Passed (90%)' },
    { id: '2', title: 'Submitted Project: BitTree Link Manager', date: 'Yesterday, 9:15 PM', status: 'Graded' },
    { id: '3', title: 'Finished Video: Binary Tree Traversals', date: 'Aug 14, 2026', status: 'Completed' },
];

const EARNED_BADGES = [
    {
        id: '1',
        icon: '⚡',
        title: 'Full Stack Beginner',
        issuedDate: 'July 2026',
    },
    {
        id: '2',
        icon: '🏆',
        title: 'Algorithm Ace',
        issuedDate: 'June 2026',
    },
    {
        id: '3',
        icon: '🎨',
        title: 'Design Explorer',
        issuedDate: 'June 2026',
    },
    {
        id: '4',
        icon: '☁️',
        title: 'Cloud Starter',
        issuedDate: 'May 2026',
    },
    {
        id: '5',
        icon: '🔥',
        title: '30 Day Learning Streak',
        issuedDate: 'May 2026',
    },
];


export default function StudentDashboard() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">

            {/* 1. DASHBOARD HEADER / PROFILE WELCOME BANNER */}
            <section className="border-b border-blue-900/30 bg-gradient-to-b from-blue-950/30 to-slate-950 py-10 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        {/* User Greeting */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-blue-500/20 border border-blue-400/30">
                                E
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-2xl sm:text-3xl font-bold text-white">Welcome back, Developer!</h1>
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30 uppercase tracking-wider">
                                        Night Owl
                                    </span>
                                </div>
                                <p className="text-sm text-slate-400 mt-1">
                                    Ready to continue your engineering journey? Pick up right where you left off.
                                </p>
                            </div>
                        </div>

                        {/* Quick Action Buttons */}
                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-semibold transition-all">
                                Edit Profile
                            </button>
                            <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all">
                                Browse More Courses
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 space-y-8">

                {/* 2. STATS & METRICS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {STUDENT_METRICS.map((metric, idx) => (
                        <div
                            key={idx}
                            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between"
                        >
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-slate-400">{metric.label}</p>
                                <p className="text-2xl font-bold text-white">{metric.value}</p>
                                <p className="text-[11px] text-blue-400 font-medium">{metric.detail}</p>
                            </div>
                            <div className="text-3xl p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                                {metric.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. MAIN DASHBOARD CONTENT (2 COLUMN LAYOUT) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: ENROLLED COURSES & LEARNING PROGRESS */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                            <div>
                                <h2 className="text-xl font-bold text-white">In Progress & Enrolled</h2>
                                <p className="text-xs text-slate-400 mt-0.5">Track your course progression and upcoming milestones</p>
                            </div>
                            <span className="text-xs font-semibold text-blue-400 bg-blue-950/60 px-3 py-1 rounded-lg border border-blue-800/40">
                                3 Active
                            </span>
                        </div>

                        {/* Course Cards List */}
                        <div className="space-y-4">
                            {ENROLLED_COURSES.map((course) => (
                                <div
                                    key={course.id}
                                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-all space-y-4"
                                >
                                    {/* Top Bar */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/40">
                                                    {course.category}
                                                </span>
                                                <span className="text-xs text-slate-500">Last active {course.lastAccessed}</span>
                                            </div>
                                            <h3 className="text-base font-bold text-white">{course.title}</h3>
                                        </div>

                                        <button className="self-start sm:self-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all">
                                            Continue Learning →
                                        </button>
                                    </div>

                                    {/* Progress Bar & Details */}
                                    <div className="space-y-2 pt-2 border-t border-slate-800/50">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-slate-400">
                                                Module <span className="text-slate-200 font-semibold">{course.completedModules}</span> of {course.totalModules}
                                            </span>
                                            <span className="text-blue-400 font-bold">{course.progress}% Completed</span>
                                        </div>

                                        <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                                            <div
                                                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Current Lesson Badge */}
                                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                                        <div className="truncate">
                                            <span className="text-slate-500">Current Lesson: </span>
                                            <span className="text-slate-200 font-medium">{course.currentLesson}</span>
                                        </div>
                                        <span className="text-blue-400 font-medium shrink-0">Up Next: {course.nextTask}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: RECENT ACTIVITY & CERTIFICATES */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Recent Activity Widget */}
                        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
                            <h3 className="font-bold text-white text-base border-b border-slate-800 pb-3">Recent Activity</h3>
                            <div className="space-y-3">
                                {RECENT_ACTIVITY.map((act) => (
                                    <div key={act.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800/60 space-y-1">
                                        <div className="flex justify-between items-start text-xs">
                                            <span className="font-medium text-slate-200">{act.title}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[11px] text-slate-500">
                                            <span>{act.date}</span>
                                            <span className="text-blue-400 font-medium">{act.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements & Certificates Preview Widget */}
                        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
                            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                                <h3 className="font-bold text-white text-base">Earned Badges</h3>
                                <span className="text-xs text-blue-400 hover:underline cursor-pointer">View All</span>
                            </div>

                            <div className="grid grid-cols-2 gap-3">

                                {EARNED_BADGES.map((badge) => <div key={badge.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1.5">
                                    <div className="text-2xl">{badge.icon}</div>
                                    <p className="text-xs font-semibold text-white">{badge.title}</p>
                                    <p className="text-[10px] text-slate-500">{badge.issuedDate}</p>
                                </div>)}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}