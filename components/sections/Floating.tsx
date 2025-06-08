import { Github, Home, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import Link from 'next/link'
import { toast } from "sonner"
import { Button } from '../ui/button'

const Floating = () => {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }
    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-lime-400/20 rounded-full px-4 py-1">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-lime-50 hover:border hover:border-lime-400 dark:hover:border-none dark:hover:bg-lime-950/20 hover:text-lime-700 dark:hover:text-lime-400 transition-all duration-200 text-gray-700 dark:text-gray-300 group"
                    asChild
                >
                    <Link href="/">
                        <Home className="w-5 h-5" />
                    </Link>
                </Button>
                <div className="w-px h-6 bg-lime-200 dark:bg-lime-800 mx-1" />
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-lime-50 hover:border hover:border-lime-400 dark:hover:border-none dark:hover:bg-lime-950/20 hover:text-lime-700 dark:hover:text-lime-400 transition-all duration-200 text-gray-700 dark:text-gray-300"
                    asChild
                >
                    <Link href="https://github.com/aswinabbas" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                    </Link>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-lime-50 hover:border hover:border-lime-400 dark:hover:border-none dark:hover:bg-lime-950/20 hover:text-lime-700 dark:hover:text-lime-400 transition-all duration-200 text-gray-700 dark:text-gray-300"
                    onClick={() => {
                        navigator.clipboard.writeText("aswien.sabba@gmail.com").then(() => {
                            toast("Email address copied to clipboard!", {
                                description: "aswien.sabba@gmail.com",
                            });
                        });
                    }}
                >
                    <Mail className="w-5 h-5" />
                </Button>
                <div className="w-px h-6 bg-lime-200 dark:bg-lime-800 mx-1" />
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-lime-50 hover:border hover:border-lime-400 dark:hover:border-none dark:hover:bg-lime-950/20 hover:text-lime-700 dark:hover:text-lime-400 transition-all duration-200 text-gray-700 dark:text-gray-300"
                    onClick={toggleTheme}
                >
                    {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
            </div>
        </div>
    )
}

export default Floating