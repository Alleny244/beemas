import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <motion.header 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="md:hidden fixed top-0 left-0 right-0 z-[100] px-6 py-6 flex justify-between items-center bg-gradient-to-b from-[#0A0A0A] to-transparent"
            >
                <Link to="/" className="text-primary font-black tracking-[0.3em] uppercase text-base z-[101]">
                    BEEMAS
                </Link>
                
                <div className="flex items-center gap-4 z-[101]">
                    <a 
                        href="https://wa.me/917034431946"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-primary/10 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-md"
                    >
                        Reserve
                    </a>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-10 h-10 flex items-center justify-center text-primary bg-white/5 rounded-full border border-white/10"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
                    </button>
                </div>
            </motion.header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[99] bg-[#0A0A0A]/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-12">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link 
                                        to={item.href} 
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-bold tracking-tighter hover:text-primary transition-colors uppercase"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-16 flex flex-col items-center gap-4"
                        >
                            <p className="text-[10px] uppercase tracking-[0.4em] text-text-muted font-bold">Connect with Artistry</p>
                            <div className="text-primary font-bold">+91 70344 31946</div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileHeader;
