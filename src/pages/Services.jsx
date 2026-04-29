import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import MagazineEffect from '../components/ui/magazine-effect';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Services = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="text-center mb-8">
                <h1 className="text-5xl md:text-7xl font-bold gradient-text">Luxury Services</h1>
                <p className="text-text-muted mt-6 max-w-2xl mx-auto text-lg">Curated treatments and transformational experiences designed to elevate your natural beauty.</p>
            </motion.div>
            
            {/* We can reuse the ServicesSection component for the grid */}
            <ServicesSection />
            
            {/* Pricing Layout */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="max-w-7xl mx-auto px-6 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="glass-card p-10 h-full">
                        <h3 className="text-4xl font-bold mb-8 gradient-text">Featured Packages</h3>
                        <div className="space-y-8">
                            <div className="group cursor-pointer border-b border-white/5 pb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-xl font-medium group-hover:text-primary transition-colors">Signature Bridal Couture</h4>
                                    <div className="text-primary font-bold">Custom</div>
                                </div>
                                <p className="text-sm text-text-muted">Full styling, HD makeup, draping and pre-wedding ritual.</p>
                            </div>
                            <div className="group cursor-pointer border-b border-white/5 pb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-xl font-medium group-hover:text-primary transition-colors">Luminous Skin Treatment</h4>
                                    <div className="text-primary font-bold">₹1,999</div>
                                </div>
                                <p className="text-sm text-text-muted">Premium facials and glowing rituals using organic elixirs.</p>
                            </div>
                            <div className="group cursor-pointer border-b border-white/5 pb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-xl font-medium group-hover:text-primary transition-colors">Berina Black Transformation</h4>
                                    <div className="text-primary font-bold">₹2,499</div>
                                </div>
                                <p className="text-sm text-text-muted">Luxury hair coloring and spa treatment for ultimate health.</p>
                            </div>
                            <button className="btn-primary w-full mt-4">Download Catalog</button>
                        </div>
                    </div>
                    
                    <div className="relative h-[600px] rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/5">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <MagazineEffect 
                                frontCover="/images/gallery1.png"
                                backCover="/images/gallery2.png"
                                pages={[
                                    "/images/gallery3.png",
                                    "/images/gallery4.png",
                                    "/images/services/bridal.jpg",
                                    "/images/services/skin.jpg"
                                ]}
                            />
                        </div>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium pointer-events-none">
                            Click to turn pages
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Services;
