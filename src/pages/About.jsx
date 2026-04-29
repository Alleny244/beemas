import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Star, ShieldCheck, Camera } from 'lucide-react';
import TextGlow from '../components/ui/text-glow';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

const About = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-48 pb-32 bg-[#121212]"
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="text-center mb-24 md:mb-32">
                    <h4 className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4">Our Legacy</h4>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] md:leading-[1.1]">
                        CRAFTING <span className="gradient-text">TIMELESS</span> <br className="hidden md:block" /> BEAUTY
                    </h1>
                    <p className="text-text-muted text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Established with a vision to redefine luxury grooming, Beemas has become Kerala's premier sanctuary for aesthetic excellence.
                    </p>
                </motion.div>

                {/* Founder Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-48">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] rounded-[60px] overflow-hidden border border-white/5 luxury-border">
                            <img src="/images/about_owner.png" alt="Beema Najeem" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 p-6 md:p-10 glass-card bg-[#121212]/80 backdrop-blur-3xl border-primary/20 max-w-[200px] md:max-w-xs z-10">
                            <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Beema Najeem</h3>
                            <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-bold">Founder</p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true }} 
                        variants={fadeUpVariant}
                        className="space-y-8 md:space-y-10 px-2 md:px-0"
                    >
                        <h2 className="text-3xl md:text-6xl font-bold tracking-tight leading-[1.2]">The Visionary Behind the Art</h2>
                        <p className="text-text-muted text-base md:text-lg font-light leading-relaxed">
                            With over 15 years of mastery in cinematic makeup and high-end styling, Beema Najeem envisioned a studio where every client is treated as a masterpiece. Her philosophy blends traditional elegance with avant-garde techniques.
                        </p>
                        <p className="text-text-muted text-lg font-light leading-relaxed">
                            At Beemas, we believe that beauty is an intimate journey. Our studio is designed to be a haven of tranquility where transformations occur with grace and precision.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                            <div className="flex gap-4">
                                <Award className="w-10 h-10 text-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2 uppercase tracking-widest text-[10px]">Excellence</h4>
                                    <p className="text-xs text-text-muted leading-relaxed">Award-winning techniques and premium international products.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2 uppercase tracking-widest text-[10px]">Hygiene</h4>
                                    <p className="text-xs text-text-muted leading-relaxed">Surgical-grade sterilization and private grooming suites.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Team Section */}
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeUpVariant}
                    className="mb-48"
                >
                    <div className="text-center mb-20">
                        <h4 className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4">The Artisans</h4>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">OUR MASTER <span className="gradient-text">STYLISTS</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { name: 'Elena Rostova', role: 'Senior Colorist', img: '/images/gallery2.png' },
                            { name: 'Sarah Ahmed', role: 'Lead Bridal Artist', img: '/images/gallery3.png' },
                            { name: 'Mia Chen', role: 'Aesthetician', img: '/images/gallery4.png' }
                        ].map((stylist, i) => (
                            <div key={i} className="group relative">
                                <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-6 luxury-border">
                                    <img src={stylist.img} alt={stylist.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                                        <div className="flex gap-4">
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-black transition-colors"><Camera className="w-4 h-4" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-1">{stylist.name}</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">{stylist.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Highlights */}
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeUpVariant}
                    className="py-32 bg-[#0A0A0A] rounded-[80px] px-10 md:px-20 border border-white/5 overflow-hidden relative"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[120px] -z-0"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        <div>
                            <div className="text-6xl font-black text-primary mb-6">
                                <TextGlow text="4.9" />
                            </div>
                            <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-4">Google Excellence</h4>
                            <p className="text-xs text-text-muted leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest">Consistently rated as Kerala's top makeover studio.</p>
                        </div>
                        <div>
                            <div className="text-6xl font-black text-primary mb-6">
                                <TextGlow text="10k+" />
                            </div>
                            <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-4">Client Stories</h4>
                            <p className="text-xs text-text-muted leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest">A legacy of beauty transformations across a decade.</p>
                        </div>
                        <div>
                            <div className="text-6xl font-black text-primary mb-6">
                                <TextGlow text="100%" />
                            </div>
                            <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-4">Artisanship</h4>
                            <p className="text-xs text-text-muted leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest">Bespoke services tailored to your unique essence.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
