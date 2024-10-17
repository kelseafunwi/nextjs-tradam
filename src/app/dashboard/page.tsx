"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, BarChart2, RefreshCcw, ShoppingBag, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
    const controls = useAnimation()
    const [activeSection, setActiveSection] = useState('hero')

    const sectionRefs = {
        hero: useRef(null),
        features: useRef(null),
        howItWorks: useRef(null),
        cta: useRef(null),
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                        controls.start('visible')
                    }
                })
            },
            { threshold: 0.5 }
        )

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current)
            }
        })

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current)
                }
            })
        }
    }, [controls])

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold text-purple-600">BarterBazaar</a>
                    <div className="flex space-x-4">
                        <a href="#features" className="text-gray-700 hover:text-purple-600">Features</a>
                        <a href="#how-it-works" className="text-gray-700 hover:text-purple-600">How It Works</a>
                        <Button variant="outline">Sign Up</Button>
                        <Button>Login</Button>
                    </div>
                </div>
            </nav>

            <motion.section
                id="hero"
                ref={sectionRefs.hero}
                className="container mx-auto px-6 py-16 text-center"
                initial="hidden"
                animate={activeSection === 'hero' ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                <motion.h1 className="text-5xl font-bold mb-4 text-gray-800" variants={fadeInUp}>
                    Welcome to BarterBazaar
                </motion.h1>
                <motion.p className="text-xl mb-8 text-gray-600" variants={fadeInUp}>
                    Revolutionizing e-commerce with the power of barter. Trade, sell, and discover amazing deals!
                </motion.p>
                <motion.div variants={fadeInUp}>
                    <Button size="lg" className="mr-4">
                        Start Trading <ArrowRight className="ml-2" />
                    </Button>
                    <Button size="lg" variant="outline">
                        Learn More
                    </Button>
                </motion.div>
            </motion.section>

            <motion.section
                id="features"
                ref={sectionRefs.features}
                className="container mx-auto px-6 py-16"
                initial="hidden"
                animate={activeSection === 'features' ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                <motion.h2 className="text-3xl font-bold mb-8 text-center text-gray-800" variants={fadeInUp}>
                    Why Choose BarterBazaar?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: RefreshCcw, title: "Barter System", description: "Trade items directly without cash involved." },
                        { icon: ShoppingBag, title: "Traditional Shopping", description: "Buy and sell items the conventional way." },
                        { icon: Users, title: "Community-Driven", description: "Connect with like-minded traders and shoppers." },
                        { icon: BarChart2, title: "Fair Value Estimations", description: "Get accurate item valuations for fair trades." },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md"
                            variants={fadeInUp}
                            custom={index}
                        >
                            <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                id="how-it-works"
                ref={sectionRefs.howItWorks}
                className="container mx-auto px-6 py-16 bg-white rounded-lg shadow-md"
                initial="hidden"
                animate={activeSection === 'howItWorks' ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                <motion.h2 className="text-3xl font-bold mb-8 text-center text-gray-800" variants={fadeInUp}>
                    How BarterBazaar Works
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { step: 1, title: "List Your Items", description: "Upload photos and descriptions of items you want to trade or sell." },
                        { step: 2, title: "Browse & Match", description: "Find items you like and propose trades or make purchases." },
                        { step: 3, title: "Complete the Deal", description: "Finalize the trade or transaction securely through our platform." },
                    ].map((step, index) => (
                        <motion.div key={index} className="text-center" variants={fadeInUp} custom={index}>
                            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                {step.step}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                id="cta"
                ref={sectionRefs.cta}
                className="container mx-auto px-6 py-16 text-center"
                initial="hidden"
                animate={activeSection === 'cta' ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                <motion.h2 className="text-3xl font-bold mb-4 text-gray-800" variants={fadeInUp}>
                    Ready to Start Bartering?
                </motion.h2>
                <motion.p className="text-xl mb-8 text-gray-600" variants={fadeInUp}>
                    Join BarterBazaar today and experience a new way of trading and shopping!
                </motion.p>
                <motion.div variants={fadeInUp}>
                    <Button size="lg" className="mr-4">
                        Sign Up Now <ArrowRight className="ml-2" />
                    </Button>
                    <Button size="lg" variant="outline">
                        Watch Demo
                    </Button>
                </motion.div>
            </motion.section>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">BarterBazaar</h3>
                            <p className="text-sm">Revolutionizing e-commerce with the power of barter.</p>
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                            <ul className="text-sm">
                                <li><a href="#" className="hover:text-purple-400">Home</a></li>
                                <li><a href="#features" className="hover:text-purple-400">Features</a></li>
                                <li><a href="#how-it-works" className="hover:text-purple-400">How It Works</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Contact</h3>
                            <p className="text-sm">Email: info@barterbazaar.com</p>
                            <p className="text-sm">Phone: (123) 456-7890</p>
                        </div>
                        <div className="w-full md:w-1/4">
                            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white hover:text-purple-400">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-purple-400">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-purple-400">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211  0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
                        © 2024 BarterBazaar. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}