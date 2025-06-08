import { Github, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ModalDetailApp1 } from '../ModalDetailApp1'
import { ModalDetailApp2 } from '../ModalDetailApp2'
import { ModalProjects } from '../ModalProjects'
import { Button } from '../ui/button'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Apple~V1",
            date: "Agt 2023 - Dec 2023",
            description: `Apple stand for Aplikasi Perencanaan Lembaga is a web-based planning app designed to help organizations manage, organize, and monitor their programs and activities in one centralized platform. It streamlines planning processes, monitoring progress and evaluting the programs.`,
            techStack: ["Next.js", "JavaScript", "TailwindCSS", "NextUI", "MSSQL", "NodeJS", "Sequelize", "Express"],
            image: "/apple1.png",
            website: "Website",
        },
        {
            id: 2,
            title: "Apple~V2",
            date: "Jan 2024 - Jul 2024",
            description: `Apple V2 is a Monolithic web-based planning application designed to help organizations not only manage and monitor their programs and activities, but also input and track budget data for each work plan. `,
            techStack: ["Next.js", "TypeScript", "MSSQL", "Prisma", "TailwindCSS", "NextUI"],
            image: "/apple2.png",
            website: "Website",
        },
        {
            id: 3,
            title: "Adzkaraya",
            date: "Sept 2024",
            description: `A mobile app designed for Muslims to easily practice morning and evening dhikr (remembrance of Allah). It provides a complete set of authentic daily supplications based on the Sunnah, with clear Arabic text and translations.`,
            techStack: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn"],
            image: "/adzkar.png",
            website: "Website",
            source: "Source",
            linkWebsite: "https://adzkarraya.vercel.app/",
            linkSource: "https://github.com/aswinabbas/adzkar_raya",
        },
        {
            id: 4,
            title: "Masarki",
            date: "Nov 2024",
            description: `Masarki is a simple and practical shopping list app that helps users record shopping items, mark purchased items, input prices, and automatically calculate the total spending. Designed for everyday use, Masarki makes managing your shopping easier.`,
            techStack: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn"],
            image: "/masarki.png",
            website: "Website",
            source: "Source",
            linkWebsite: "https://masarki.vercel.app/",
            linkSource: "https://github.com/aswinabbas/masar",
        },
    ]

    return (
        <section className="mb-20">
            <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-lime-400 to-lime-500 text-black rounded-full text-sm font-medium mb-8 transition-all duration-200">
                    My Projects
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    Check out my latest work
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
                    I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of
                    my favorites.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Project list */}
                {projects.map((project) => (
                    <div key={project.id} className="group border dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video relative">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-2xl mb-1 text-gray-900 dark:text-white group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 dark:text-gray-300 text-sm mb-4 font-light">{project.date}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed font-light">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {[
                                    ...project.techStack
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-lime-100 dark:bg-lime-950/30 text-lime-700 dark:text-lime-300 border border-lime-200 dark:border-lime-800 rounded-full text-xs font-light"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {!project.linkWebsite && project.id == 1 && (
                                <ModalDetailApp1 />
                            )}
                            {!project.linkWebsite && project.id == 2 && (
                                <ModalDetailApp2 />
                            )}

                            <div className="flex gap-3">
                                {project.linkWebsite && (
                                    <Button className="bg-lime-400 hover:bg-lime-500 text-black rounded-full px-4 py-2 flex items-center gap-2 font-medium transition-all duration-200">
                                        <Globe className="w-4 h-4" />
                                        <Link href={project.linkWebsite} target="_blank" rel="noopener noreferrer">
                                            {project.website}
                                        </Link>

                                    </Button>
                                )}
                                {
                                    project.source &&

                                    <Button
                                        variant="outline"
                                        className="border-lime-400/30 hover:border-lime-400 hover:bg-lime-50 dark:hover:bg-lime-950/20 rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-200 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                                    >
                                        <Github className="w-4 h-4" />
                                        <Link href={project.linkSource} target="_blank" rel="noopener noreferrer">
                                            {project.source}
                                        </Link>
                                    </Button>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-center">
                <ModalProjects />
            </div>
        </section>
    )
}

export default Projects
