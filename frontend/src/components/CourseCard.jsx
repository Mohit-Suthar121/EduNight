import React from 'react'

const CourseCard = ({course,onClick}) => {
    return (
        <div
            key={course.id}
            onClick={onClick}
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

                    <p className="text-xs text-slate-400">By <span className="text-slate-300">{course.instructor.name}</span></p>

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
        </div>
    )
}

export default CourseCard