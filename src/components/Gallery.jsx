import React from 'react';
import { motion } from 'framer-motion';
import { ZoomParallax } from "./ui/zoom-parallax";

const parallaxImages = [
    { src: '/images/gallery1.png', alt: 'Luxury Ambience' },
    { src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1280&q=80', alt: 'Bridal Makeovers' },
    { src: '/images/gallery3.png', alt: 'Expert Styling' },
    { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1280&q=80', alt: 'Premium Products' },
    { src: '/images/gallery2.png', alt: 'Flawless Beauty' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1280&q=80', alt: 'Detailed Artistry' },
    { src: '/images/gallery4.png', alt: 'Luxury Treatments' }
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-[#0A0A0A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
                <motion.h4 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4"
                >
                    Portfolio
                </motion.h4>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter"
                >
                    VISUAL <span className="gradient-text italic font-serif">Excellence</span>
                </motion.h2>
            </div>
            
            <ZoomParallax images={parallaxImages} />
        </section>
    );
};

export default Gallery;

