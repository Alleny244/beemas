import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileHeader = () => {
    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="md:hidden fixed top-0 left-0 right-0 z-[90] px-6 py-6 flex justify-between items-center bg-gradient-to-b from-[#0A0A0A] to-transparent"
        >
            <Link to="/" className="text-primary font-black tracking-[0.3em] uppercase text-base">
                BEEMAS
            </Link>
            
            <div className="flex items-center gap-4">
                <a 
                    href="https://wa.me/917034431946"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-primary/10 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-md"
                >
                    Reserve
                </a>
            </div>
        </motion.header>
    );
};

export default MobileHeader;
