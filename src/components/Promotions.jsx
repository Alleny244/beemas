import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BookEffect } from './ui/book-effect';

const Promotions = () => {
    return (
        <section className="py-32 bg-[#121212] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] p-10 md:p-20 relative overflow-hidden border-primary/20"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-[10px] uppercase tracking-widest font-bold mb-6">
                                Limited Time Offer
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                                THE BRIDAL <br /><span className="gradient-text italic font-serif">Signature</span>
                            </h2>
                            <p className="text-text-muted mb-10 leading-relaxed font-light">
                                Secure our comprehensive premium bridal package this month and receive a complimentary pre-wedding radiance ritual worth ₹4,999.
                            </p>
                            <a href="https://wa.me/917034431946" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                Claim Offer <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                        
                        <div className="relative w-full flex justify-center items-center">
                            <BookEffect>
                                <img src={`${import.meta.env.BASE_URL}images/gallery4.png`} alt="Bridal Promotion" className="w-full h-full object-cover rounded-r-lg" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-2xl tracking-tighter mb-1">BRIDAL SIGNATURE</h3>
                                    <p className="text-white/80 text-sm">Limited Time Offer</p>
                                </div>
                                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 z-20 shadow-xl">
                                    <span className="text-primary font-bold tracking-widest uppercase text-[10px]">Save ₹4,999</span>
                                </div>
                            </BookEffect>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Promotions;
