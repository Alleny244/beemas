import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4 bg-[#0A0A0A]/90 backdrop-blur-2xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="group flex items-center gap-3">
                    <motion.div 
                        whileHover={{ rotate: 180 }}
                        className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary font-bold text-sm bg-primary/5"
                    >
                        B
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-[0.2em] uppercase leading-none text-white group-hover:text-primary transition-colors">Beemas</span>
                        <span className="text-[8px] tracking-[0.5em] uppercase text-primary-rose font-bold">Studio & Salon</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group ${location.pathname === item.path ? 'text-primary' : 'text-text-muted hover:text-white'}`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-2 left-0 h-[1px] bg-primary transition-all duration-500 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                    ))}
                    <a href="https://wa.me/917034431946" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '0.7rem' }}>
                        Reserve
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
