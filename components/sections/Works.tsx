import Image from 'next/image'
import React from 'react'

const Works = () => {
    const workExperience = [
        {
            company: "STIBA Makassar",
            role: "Full Stack Developer",
            period: "Mar 2022 - Jul 2024",
            logo: "/stiba.png",
            aq: "border border-gray-300 bg-white",
        },
        {
            company: "CAD-IT Consultants",
            role: "UI/UX-Frontend of ThingWorx",
            period: "Feb 2020 - Feb 2022",
            logo: "/cadit.png",
            color: "bg-gradient-to-br from-lime-400 to-lime-500",
            aq: "border border-gray-300 bg-white",
        },
        {
            company: "Hamdalah Therapy & Herbal",
            role: "Graphic Designer",
            period: "Dec 2015 - Jul 2016",
            logo: "/hamdalah.png",
            color: "bg-gradient-to-br from-lime-400 to-lime-500",
            aq: "border border-gray-300 bg-white",
        },
    ]
    return (
        <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Work Experience</h2>
            <div className="space-y-3">
                {workExperience.map((job, index) => (
                    <div
                        key={index}
                        className="group flex items-center justify-between p-4 rounded-xl hover:bg-lime-100/50 dark:hover:bg-lime-950/20 transition-all duration-200 hover:scale-[1.02]"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full ${job.aq} flex items-center justify-center`}>
                                <Image
                                    src={job.logo}
                                    alt={`${job.company} logo`}
                                    width={30}
                                    height={30}
                                    className={`rounded-md p-1`}
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                                    {job.company}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm font-light">{job.role}</p>
                                {window.innerWidth < 768 && (
                                    <div className="text-gray-400 dark:text-gray-300 text-xs md:text-sm font-light mt-2">
                                        {job.period}
                                    </div>
                                )}
                            </div>

                        </div>
                        {window.innerWidth >= 768 && (
                            <div className="text-gray-400 dark:text-gray-300 text-xs md:text-sm font-light">
                                {job.period}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Works