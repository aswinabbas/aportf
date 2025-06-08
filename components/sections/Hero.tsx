import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Shiny from '../Shiny'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <Shiny />
                    <h1 className="text-2xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        <span className="inline-block animate-none">👋</span> Hi, I'm Aswin
                    </h1>
                </div>
                <div className="ml-8 flex-shrink-0">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-transparent rounded-full blur-xl"></div>
                        <Image
                            src="/image1.png"
                            alt="Profile"
                            width={90}
                            height={90}
                            className="rounded-full relative z-10 border-4 border-white dark:border-gray-800 md:w-[120px] md:h-[120px]"
                        />
                    </div>
                </div>
            </div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-14 font-light min-w-[200px] md:max-w-[400px]">
                Full Stack Developer with a passion for building scalable, high-performance web applications. I thrive on crafting seamless user experiences and collaborating with teams to ship impactful products.
            </p>
            <div className="flex gap-3 mb-20">
                <Button
                    className="bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-full px-6 py-2 transition-all duration-200 hover:scale-105"
                    onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                >
                    Get in touch
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </>
    )
}

export default Hero