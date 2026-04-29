import React from 'react';
import { motion } from 'framer-motion';
import { ZoomParallax } from "./ui/zoom-parallax";
import ThreeDGalleryCard from './ui/three-d-gallery-card';

const parallaxImages = [
    { src: `${import.meta.env.BASE_URL}images/gallery1.png`, alt: 'Luxury Ambience' },
    { src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1280&q=80', alt: 'Bridal Makeovers' },
    { src: `${import.meta.env.BASE_URL}images/gallery3.png`, alt: 'Expert Styling' },
    { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1280&q=80', alt: 'Premium Products' },
    { src: `${import.meta.env.BASE_URL}images/gallery2.png`, alt: 'Flawless Beauty' },
    { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1280&q=80', alt: 'Detailed Artistry' },
    { src: `${import.meta.env.BASE_URL}images/gallery4.png`, alt: 'Luxury Treatments' }
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-[#0A0A0A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between mb-20 relative z-20 gap-12">
                <div className="text-left max-w-xl">
                    <motion.h4 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4"
                    >
                        Portfolio
                    </motion.h4>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none"
                    >
                        VISUAL <br/> <span className="gradient-text italic font-serif">Excellence</span>
                    </motion.h2>
                    <p className="text-text-muted text-lg font-light leading-relaxed">
                        A curation of our most transformative artistry. Hover over the collection to explore our signature looks.
                    </p>
                </div>

                <div className="flex justify-center items-center h-[500px]">
                    <ThreeDGalleryCard images={parallaxImages} />
                </div>
            </div>
            
            <ZoomParallax images={parallaxImages} />
        </section>
    );
};

export default Gallery;

