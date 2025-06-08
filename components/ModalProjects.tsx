import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Globe } from "lucide-react"

export function ModalProjects() {
    const projects = [
        {
            id: 1,
            title: "Fingerspot",
            subtitle: "Attendance Recorder",
            description: `Automates employee check-ins, calculates daily work hours, and aggregates monthly totals using fingerprint data.`,
            techStack: ["Node.js", "Express", "Sequelize", "MSSQL"],
        },
        {
            id: 2,
            title: "Umaya",
            subtitle: "Landing Page Listings",
            description: `A platform showcasing categorized landing pages for sale.`,
            techStack: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn"],
            url: "https://umaya.vercel.app/",
            website: "Website",
        },
        {
            id: 3,
            title: "Bot Presensi",
            subtitle: "WhatsApp Attendance Bot",
            description: `Integrates with fingerprint scanners for seamless attendance tracking via WhatsApp.`,
            techStack: ["Node.js", "Express", "Sequelize", "Baileys"],
        },
    ]
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="text-lime-600 hover:bg-white hover:text-lime-600 hover:underline">More...</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle>More Projects</DialogTitle>
                </DialogHeader>

                <div className="grid md:grid-cols-3 gap-4">
                    {/* Project list */}
                    {projects.map((project) => (
                        <div key={project.id} className="group border dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:-translate-y-1">
                            <div className="p-6">
                                <h3 className="font-bold text-2xl mb-1 text-gray-900 dark:text-white group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 dark:text-gray-300 text-sm mb-4 font-light">{project.subtitle}</p>
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
                                {project.url && (
                                    <Button className="bg-lime-400 hover:bg-lime-500 text-black rounded-full px-4 py-2 flex items-center gap-2 font-medium transition-all duration-200">
                                        <Globe className="w-4 h-4" />
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                            {project.website}
                                        </a>

                                    </Button>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
