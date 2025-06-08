import React from 'react'

const Skills = () => {
    return (
        <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Postgres",
                    "Docker",
                    "Prisma",
                    "Tailwind CSS",
                    "Python",
                ].map((skill, index) => (
                    <span
                        key={skill}
                        className="px-4 py-1 bg-lime-200 text-lime-600 rounded-full text-sm font-light transition-all duration-200 hover:scale-105 hover:bg-lime-500 hover:text-lime-200 dark:bg-lime-400 dark:text-lime-700 cursor-default"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Skills