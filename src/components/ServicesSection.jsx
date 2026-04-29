import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, User, Heart, Camera, Brush, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltedCard from './TiltedCard';

const services = [
    {
        title: "Haute Hair Design",
        description: "Bespoke styling, artisanal coloring, and therapeutic treatments for discerning individuals.",
        icon: <Scissors className="w-6 h-6" />,
        price: "From ₹499",
        category: "Hair",
        image: `${import.meta.env.BASE_URL}images/services/hair.jpg`
    },
    {
        title: "Radiance Rituals",
        description: "Advanced dermatological facials and skin rejuvenation using elite organic elixirs.",
        icon: <Sparkles className="w-6 h-6" />,
        price: "From ₹1,499",
        category: "Skin",
        image: `${import.meta.env.BASE_URL}images/services/skin.jpg`
    },
    {
        title: "Bridal Masterpiece",
        description: "The ultimate transformation for your most significant milestone. Cinematic artistry.",
        icon: <Brush className="w-6 h-6" />,
        price: "Premium",
        category: "Makeover",
        image: `${import.meta.env.BASE_URL}images/services/bridal.jpg`
    },
    {
        title: "Gentleman's Suite",
        description: "Architectural cuts and precision grooming in a private, sophisticated atmosphere.",
        icon: <User className="w-6 h-6" />,
        price: "From ₹399",
        category: "Grooming",
        image: `${import.meta.env.BASE_URL}images/services/grooming.jpg`
    },
    {
        title: "Luxe Nail Studio",
        description: "Sculptural nail designs and restorative rituals for hands and feet.",
        icon: <Heart className="w-6 h-6" />,
        price: "From ₹299",
        category: "Nails",
        image: `${import.meta.env.BASE_URL}images/services/nails.jpg`
    },
    {
        title: "Cinematic Makeup",
        description: "Red-carpet ready aesthetics for high-profile events and editorial photography.",
        icon: <Camera className="w-6 h-6" />,
        price: "From ₹2,499",
        category: "Events",
        image: `${import.meta.env.BASE_URL}images/services/makeup.jpg`
    }
];


const ServiceCard = ({ title, description, icon, price, category, image, index }) => (
    <TiltedCard>
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative glass-card flex flex-col h-full min-h-[450px] border-white/5 hover:border-primary/40 overflow-hidden bg-[#0A0A0A]/95 shadow-2xl rounded-3xl"
        >
            {/* Service Image Header */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center text-primary border border-white/10" style={{ transform: "translateZ(50px)" }}>
                    {icon}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4" style={{ transform: "translateZ(30px)" }}>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary-rose font-bold">{category}</div>
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-2xl mb-3 font-bold tracking-tight group-hover:text-primary transition-colors" style={{ transform: "translateZ(40px)" }}>{title}</h3>
                <p className="text-text-muted mb-6 text-sm leading-relaxed font-light flex-grow" style={{ transform: "translateZ(20px)" }}>{description}</p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center" style={{ transform: "translateZ(30px)" }}>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">{price}</span>
                    <a href="https://wa.me/917034431946" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors underline underline-offset-4">Book Now</a>
                </div>
            </div>
        </motion.div>
    </TiltedCard>
);


const ServicesSection = () => {
    return (
        <section id="services" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 pointer-events-none">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl text-left pointer-events-auto">
                        <motion.h4 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4 flex items-center gap-3"
                        >
                            <span className="w-8 h-[1px] bg-primary"></span> The Collection
                        </motion.h4>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] md:leading-[1.1] mb-6"
                        >
                            EXQUISITE <br className="hidden md:block" /><span className="gradient-text italic font-serif">Artistry</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-text-muted max-w-sm leading-relaxed pointer-events-auto"
                    >
                        Explore our curated selection of high-end beauty services. Hover over our offerings to see them react dynamically to your presence.
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px] pointer-events-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
