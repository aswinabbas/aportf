import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="flex items-start justify-between mb-20">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full text-lime-700 dark:text-lime-300 text-sm font-medium mb-6 relative overflow-hidden">
                        <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                        Available for work
                        {/* Shiny effect */}
                        <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent skew-x-12 animate-shimmer"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        <span className="inline-block animate-none">👋</span> Hi, I'm Aswin
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-light">
                        Full Stack Developer with a passion for building scalable, high-performance web applications. I thrive on crafting seamless user experiences and collaborating with teams to ship impactful products.
                    </p>
                    <div className="flex gap-3">
                        <Button
                            className="bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-full px-6 py-2 transition-all duration-200 hover:scale-105"
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            Get in touch
                            <ArrowUpRight className="w-4 h-4 ml-2" />
                        </Button>
                        {/* <Button
                            variant="outline"
                            className="border-lime-400/30 hover:border-lime-400 hover:bg-lime-50 dark:hover:bg-lime-950/20 rounded-full px-6 py-2 transition-all duration-200 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                        >
                            View resume
                        </Button> */}
                    </div>
                </div>
                <div className="ml-8 flex-shrink-0">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-transparent rounded-full blur-xl"></div>
                        <Image
                            src="/image1.png"
                            alt="Profile"
                            width={120}
                            height={120}
                            className="rounded-full relative z-10 border-4 border-white dark:border-gray-800"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero