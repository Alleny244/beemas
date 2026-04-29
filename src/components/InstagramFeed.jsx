import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, ArrowUpRight } from 'lucide-react';

const InstagramFeed = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-[#060606] relative border-t border-white/5 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center flex flex-col items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                >
                    <Camera className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">@beemas_makeover_studio</span>
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[1]"
                >
                    JOIN THE <br className="hidden md:block" /><span className="gradient-text italic font-serif font-light">Aesthetic</span>
                </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 h-[60vh] md:h-[80vh] overflow-hidden rounded-[30px] md:rounded-[50px] border border-white/5 bg-[#121212]/30 backdrop-blur-xl p-4 md:p-6 relative">
                    
                    {/* Column 1 */}
                    <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8">
                        <div className="aspect-[3/4] w-full rounded-[20px] md:rounded-[30px] overflow-hidden relative group">
                            <img src={`${import.meta.env.BASE_URL}images/gallery1.png`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="aspect-square w-full rounded-[20px] md:rounded-[30px] overflow-hidden relative group">
                            <img src={`${import.meta.env.BASE_URL}images/gallery3.png`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        </div>
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8">
                        <div className="aspect-square w-full rounded-[20px] md:rounded-[30px] overflow-hidden relative group">
                            <img src={`${import.meta.env.BASE_URL}images/gallery2.png`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        </div>
                        <div className="aspect-[3/4] w-full rounded-[20px] md:rounded-[30px] overflow-hidden relative group">
                            <img src={`${import.meta.env.BASE_URL}images/gallery4.png`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        </div>
                        <div className="aspect-square w-full rounded-[20px] md:rounded-[30px] overflow-hidden relative group hidden md:block">
                            <img src={`${import.meta.env.BASE_URL}images/gallery1.png`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        </div>
                    </motion.div>

                    {/* Column 3 (Hidden on very small screens, visible on md+) */}
                    <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8 hidden md:flex">
                        <div className="aspect-[4/5] w-full rounded-[20px] md:rounded-[30px] overflow-hidden relative group">
                            <img src={`${import.meta.env.BASE_URL}images/gallery3.png`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        </div>
                        <div className="aspect-square w-full rounded-[20px] md:rounded-[30px] overflow-hidden relative group">
                            <img src={`${import.meta.env.BASE_URL}images/gallery2.png`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        </div>
                    </motion.div>

                    {/* Center Overlay Button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <a href="/gallery" className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-4 md:py-5 rounded-full bg-white text-black font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-primary hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.15)] whitespace-nowrap">
                            Explore Gallery <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                    
                    {/* Gradient Fades for Seamless Container Look */}
                    <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none rounded-t-[30px] md:rounded-t-[50px]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none rounded-b-[30px] md:rounded-b-[50px]"></div>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
