import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import Promotions from '../components/Promotions';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import SpotlightCard from '../components/SpotlightCard';
import { InteractiveProductCard } from '../components/ui/card-7';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

const Home = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-0 bg-[#121212]"
        >
            <Hero />
            
            {/* Brand Intro Section */}
            <section className="py-32 md:py-48 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                    <motion.div 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, margin: "-100px" }} 
                        variants={fadeUpVariant}
                        className="h-full"
                    >
                        <SpotlightCard className="p-10 md:p-16 h-full flex flex-col justify-center border-primary/10">
                            <h4 className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6">The Philosophy</h4>
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] md:leading-[1.1]">
                                ARTISTRY IN <br className="hidden md:block" />EVERY <span className="gradient-text italic font-serif">Detail</span>
                            </h2>
                            <p className="text-text-muted text-base md:text-xl font-light leading-relaxed mb-10">
                                We don't just provide beauty services; we craft experiences. From the moment you step into Beemas, you are treated to a world of luxury, precision, and unparalleled artistry.
                            </p>
                            <div className="flex gap-12">
                                <div>
                                    <div className="text-4xl font-bold mb-2 text-primary">15+</div>
                                    <div className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold mb-2 text-primary">5k+</div>
                                    <div className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Bridal Stories</div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full"
                    >
                        <InteractiveProductCard 
                            className="min-h-[500px]"
                            imageUrl={`${import.meta.env.BASE_URL}images/hero_bg.png`}
                            quote="Beauty begins the moment you decide to be yourself."
                        />
                    </motion.div>
                </div>
            </section>

            <ServicesSection />
            <Promotions />
            
            <Testimonials />

            <InstagramFeed />
        </motion.div>
    );
};


export default Home;
