import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const GooeyNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-10 right-10 z-[100] w-16 h-16 pointer-events-auto">
            {/* SVG Filter for Gooey Liquid Merge Effect */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </svg>

            {/* Gooey Background Container - Only shapes get blurred and merged! */}
            <div className="absolute inset-0 pointer-events-none" style={{ filter: 'url(#gooey)' }}>
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: -80 }}
                                exit={{ y: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary"
                            />
                            <motion.div
                                initial={{ y: 0, x: 0 }}
                                animate={{ y: -65, x: -65 }}
                                exit={{ y: 0, x: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.05 }}
                                className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary"
                            />
                            <motion.div
                                initial={{ x: 0 }}
                                animate={{ x: -80 }}
                                exit={{ x: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
                                className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary"
                            />
                        </>
                    )}
                </AnimatePresence>
                {/* Main Center Blob */}
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-primary shadow-2xl" />
            </div>

            {/* Foreground Icons - Rendered crisp over the gooey blobs */}
            <div className="absolute inset-0">
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: -80, opacity: 1 }}
                                exit={{ y: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center text-black"
                            >
                                <Link to="/" onClick={() => setIsOpen(false)} className="hover:scale-125 transition-transform"><Home className="w-6 h-6" /></Link>
                            </motion.div>
                            <motion.div
                                initial={{ y: 0, x: 0, opacity: 0 }}
                                animate={{ y: -65, x: -65, opacity: 1 }}
                                exit={{ y: 0, x: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.05 }}
                                className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center text-black"
                            >
                                <Link to="/services" onClick={() => setIsOpen(false)} className="hover:scale-125 transition-transform"><Sparkles className="w-6 h-6" /></Link>
                            </motion.div>
                            <motion.div
                                initial={{ x: 0, opacity: 0 }}
                                animate={{ x: -80, opacity: 1 }}
                                exit={{ x: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
                                className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center text-black"
                            >
                                <Link to="/booking" onClick={() => setIsOpen(false)} className="hover:scale-125 transition-transform"><Calendar className="w-6 h-6" /></Link>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
                
                {/* Main Toggle Button Foreground */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer"
                >
                    <motion.div animate={{ rotate: isOpen ? 135 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                        <X className="w-8 h-8" style={{ display: isOpen ? 'block' : 'none' }} />
                        <Menu className="w-8 h-8" style={{ display: !isOpen ? 'block' : 'none' }} />
                    </motion.div>
                </button>
            </div>
        </div>
    );
};

export default GooeyNav;
