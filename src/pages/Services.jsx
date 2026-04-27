import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';

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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="max-w-5xl mx-auto px-6 mt-10">
                <div className="glass-card p-10">
                    <h3 className="text-3xl font-bold mb-8 text-center">Featured Packages</h3>
                    <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-glass-border pb-4">
                            <div>
                                <h4 className="text-xl font-medium">Signature Bridal Couture</h4>
                                <p className="text-sm text-text-muted">Full styling, HD makeup, draping</p>
                            </div>
                            <div className="text-primary font-bold">Custom</div>
                        </div>
                        <div className="flex justify-between items-center border-b border-glass-border pb-4">
                            <div>
                                <h4 className="text-xl font-medium">Luminous Skin Treatment</h4>
                                <p className="text-sm text-text-muted">Premium facials and glowing rituals</p>
                            </div>
                            <div className="text-primary font-bold">From ₹1,999</div>
                        </div>
                        <div className="flex justify-between items-center border-b border-glass-border pb-4">
                            <div>
                                <h4 className="text-xl font-medium">Berina Black Transformation</h4>
                                <p className="text-sm text-text-muted">Luxury hair coloring and spa</p>
                            </div>
                            <div className="text-primary font-bold">From ₹2,499</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Services;
