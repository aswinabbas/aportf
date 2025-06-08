import React from 'react'

const Touch = () => {
    return (
        <>
            {/* Get in Touch Section */}
            <section id="contact" className="mb-20 scroll-mt-24">
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-lime-400 to-lime-500 text-black rounded-full text-sm font-medium mb-8 transition-all duration-200">
                        Contact
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Get in touch</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
                        I'm always open to new opportunities and collaborations. Feel free to reach out through any of the social
                        media platforms in the navigation bar below, or send me an email directly. I'd love to hear from you!
                    </p>
                </div>
            </section>
        </>
    )
}

export default Touch