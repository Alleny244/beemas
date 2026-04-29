import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ThreeDGalleryCard Component
 * Recreates the 3D staggered card animation from the Framer module.
 * Features a fan-out effect on hover and detailed card view.
 */
export default function ThreeDGalleryCard({ images = [], title = "Portfolio", description = "Luxury Makeover Studio", isGrid = false }) {
    const [isHovered, setIsHovered] = useState(false);
    
    // Using the first 3 images for grid stack to save space
    const displayImages = images.slice(0, 3);
    
    return (
        <div 
            className={`relative w-full ${isGrid ? 'h-[400px]' : 'h-[500px]'} flex items-center justify-center group`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative ${isGrid ? 'w-[200px] h-[280px]' : 'w-[280px] h-[380px]'}`}>
            <AnimatePresence>
                {displayImages.map((img, index) => {
                    // Staggered positions for the "fanned out" effect
                    const xOffset = isHovered ? (index - 1) * (isGrid ? 140 : 220) : index * -15;
                    const yOffset = isHovered ? -20 : index * -5;
                    const rotate = isHovered ? (index - 1) * (isGrid ? 12 : 8) : -15;
                    const zIndex = isHovered ? (index === 0 ? 10 : 5) : (displayImages.length - index);
                    
                    return (
                        <motion.div
                            key={index}
                            className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl"
                            initial={false}
                            animate={{
                                x: xOffset,
                                y: yOffset,
                                rotate: rotate,
                                scale: isHovered ? 1.1 : 1,
                                zIndex: zIndex,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                                mass: 1
                            }}
                            style={{
                                transformPerspective: 1200,
                            }}
                        >
                            <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="w-full h-full object-cover transition-all duration-700"
                                style={{
                                    filter: isHovered ? "brightness(1)" : `brightness(${1 - index * 0.15})`
                                }}
                            />
                            
                            {/* Card Content Overlay (Only visible on hover) */}
                            {isHovered && (
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <h4 className="text-white text-lg font-bold mb-1">{title}</h4>
                                    <p className="text-primary text-[10px] uppercase tracking-widest font-bold">{img.alt || description}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </AnimatePresence>
            </div>
        </div>
    );
}
