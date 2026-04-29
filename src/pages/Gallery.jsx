import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ArrowRightLeft } from 'lucide-react';
import ThreeDGalleryCard from '../components/ui/three-d-gallery-card';
import ThreeDInteractiveCard from '../components/ui/three-d-interactive-card';

const categories = ['All', 'Bridal', 'Hair', 'Makeup', 'Editorial'];

const galleryItems = [
    { id: 1, category: 'Bridal', title: 'Traditional Elegance', image: '/images/gallery1.png' },
    { id: 2, category: 'Makeup', title: 'HD Cinematic Glow', image: '/images/gallery2.png' },
    { id: 3, category: 'Hair', title: 'Architectural Waves', image: '/images/gallery3.png' },
    { id: 4, category: 'Bridal', title: 'Modern Reception', image: '/images/gallery4.png' },
    { id: 5, category: 'Editorial', title: 'Vogue Inspired', image: '/images/gallery1.png' },
    { id: 6, category: 'Hair', title: 'Platinum Precision', image: '/images/gallery2.png' },
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems = activeCategory === 'All' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-48 pb-32 bg-[#121212] min-h-screen"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.h4 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6"
                    >
                        The Portfolio
                    </motion.h4>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-none"
                    >
                        VISUAL <span className="gradient-text">LEGACY</span>
                    </motion.h1>
                    
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mt-16">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all duration-500 ${activeCategory === cat ? 'bg-primary border-primary text-black' : 'border-white/10 text-text-muted hover:border-white/30'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-48">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold tracking-tight flex items-center justify-center gap-4">
                            <ArrowRightLeft className="w-6 h-6 text-primary" /> THE TRANSFORMATION
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="relative group rounded-[40px] overflow-hidden luxury-border aspect-square md:aspect-video">
                            <div className="absolute top-6 left-6 z-20 px-6 py-2 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 text-[10px] uppercase tracking-widest font-bold">Initial State</div>
                            <img src="/images/hero_bg.png" className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0" />
                        </div>
                        <div className="relative group rounded-[40px] overflow-hidden luxury-border aspect-square md:aspect-video">
                            <div className="absolute top-6 left-6 z-20 px-6 py-2 bg-primary/80 backdrop-blur-xl rounded-full border border-primary/20 text-black text-[10px] uppercase tracking-widest font-bold">The Artistry</div>
                            <img src="/images/gallery1.png" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>

                {/* Main Grid: Reduced to 3 interactive stacks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: 'Bridal Heritage', items: [galleryItems[0], galleryItems[3]] },
                        { title: 'Cinematic Glow', items: [galleryItems[1], galleryItems[4]] },
                        { title: 'Styling Mastery', items: [galleryItems[2], galleryItems[5]] }
                    ].map((group, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <ThreeDGalleryCard 
                                images={group.items.map(item => ({ src: item.image, alt: item.title }))} 
                                title={group.title}
                                description="Signature Collection"
                                isGrid={false}
                            />
                            <div className="mt-8 text-center">
                                <h3 className="text-xl font-bold tracking-tight text-white mb-2">{group.title}</h3>
                                <p className="text-primary text-[10px] uppercase tracking-widest font-bold">Explore Collection</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-20"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-10 right-10 text-white hover:text-primary transition-colors">
                            <X className="w-10 h-10" />
                        </button>
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="max-w-6xl w-full h-full relative"
                        >
                            <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-contain" />
                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center">
                                <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4">{selectedImage.category}</p>
                                <h3 className="text-4xl font-bold tracking-tighter uppercase">{selectedImage.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Gallery;
