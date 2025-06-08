import React from 'react'

const Shiny = () => {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full text-lime-700 dark:text-lime-300 text-sm font-medium mb-6 relative overflow-hidden">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
            Available for work
            {/* Shiny effect */}
            <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent skew-x-12 animate-shimmer"></div>
        </div>
    )
}

export default Shiny