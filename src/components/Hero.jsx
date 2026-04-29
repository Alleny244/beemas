import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageSequence from './ImageSequence';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div ref={containerRef} id="home" className="relative w-full h-[110vh] overflow-hidden flex items-center justify-center bg-[#0A0A0A] perspective-[1000px]">
            {/* Cinematic Image Sequence Animation */}
            <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]), scale }}
                className="absolute inset-0 z-0 w-full h-full"
            >
                <ImageSequence 
                    totalFrames={184} 
                    framePrefix="ezgif-frame-" 
                    frameExtension="jpg" 
                    folderPath={`${import.meta.env.BASE_URL}background`} 
                    fps={24} 
                />
            </motion.div>
            
            {/* Anchored Seamless Blending Gradients */}
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#0A0A0A] to-transparent z-[1] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-[1] pointer-events-none"></div>
            
            <motion.div 
                style={{ y, opacity }}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center mt-32 md:mt-40"
            >
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl flex flex-col items-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex items-center gap-2 mb-6 md:mb-8 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10"
                    >
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">The Gold Standard in Beauty</span>
                    </motion.div>

                    <motion.h4 
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.4em" }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="text-primary uppercase font-semibold text-sm md:text-base mb-6 tracking-[0.2em]"
                    >
                        Beemas Makeover Studio
                    </motion.h4>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl sm:text-5xl md:text-9xl lg:text-[11rem] mb-8 md:mb-10 leading-[1.2] md:leading-[0.9] font-extrabold tracking-tight md:tracking-tighter"
                    >
                        REDEFINING <br />
                        <span className="gradient-text italic font-thin font-serif lowercase">elegance</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="text-text-muted text-lg md:text-2xl mb-14 max-w-2xl leading-relaxed font-light"
                    >
                        Step into a realm where artistry meets luxury. Kerala's most exclusive sanctuary for high-end grooming and cinematic transformations.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-8 justify-center"
                    >
                        <a href="https://wa.me/917034431946" target="_blank" rel="noopener noreferrer" className="btn-primary group">
                            Book Experience <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link to="/services" className="px-10 py-5 rounded-full border border-glass-border hover:bg-white/5 hover:border-primary/50 backdrop-blur-xl transition-all duration-500 font-bold uppercase text-[0.8rem] tracking-widest flex items-center gap-3">
                            Discover Artistry
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="text-[9px] uppercase tracking-[0.5em] font-bold opacity-70">Begin Journey</div>
                <motion.div 
                    animate={{ height: [0, 60, 0], y: [0, 30, 60] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] bg-gradient-to-b from-primary via-primary-rose to-transparent origin-top"
                ></motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
