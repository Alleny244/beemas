import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Camera, Star } from 'lucide-react';
import BorderGlow from '../components/BorderGlow';
import { AdvancedMap } from '../components/ui/interactive-map';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Contact = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-48 pb-32 bg-[#121212]"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Contact Info - Centered for a cleaner look */}
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        variants={fadeUpVariant}
                        className="space-y-16 lg:col-span-2 flex flex-col items-center text-center"
                    >
                        <div className="flex flex-col items-center">
                            <h4 className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6">Connect</h4>
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] md:leading-[1.1]">GET IN <br /><span className="gradient-text">TOUCH</span></h1>
                            <p className="text-text-muted text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
                                Whether you're planning your dream wedding or seeking a premium grooming session, our concierge is ready to assist.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-5xl">
                            <div className="flex flex-col items-center gap-6">
                                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-3">Private Line</h4>
                                    <p className="text-2xl font-bold hover:text-primary transition-colors">+91 70344 31946</p>
                                </div>
                            </div>
                            
                            <div 
                                className="flex flex-col items-center gap-6 cursor-pointer group/loc"
                                onClick={() => {
                                    window.scrollTo({ top: document.getElementById('map-section').offsetTop - 100, behavior: 'smooth' });
                                }}
                            >
                                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover/loc:border-primary/50 transition-all duration-500">
                                    <MapPin className="w-8 h-8 group-hover/loc:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-3">Sanctuary Location</h4>
                                    <p className="text-lg font-medium leading-relaxed max-w-xs mx-auto group-hover:text-white transition-colors">
                                        Near Meeyannoor Ration Shop, Meeyannur, Kollam, Kerala 691537
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-6">
                                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-3">Atelier Hours</h4>
                                    <p className="text-lg font-medium">Monday — Sunday</p>
                                    <p className="text-text-muted text-[10px] uppercase tracking-widest mt-2">09:30 AM — 08:30 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-8 pt-10">
                            {[Camera, Star, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-all duration-500 hover:scale-110 bg-white/5">
                                    <Icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Map Section - Integrated AdvancedMap */}
                <motion.div 
                    id="map-section"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-48"
                >
                    <AdvancedMap 
                        center={[8.897272, 76.7418157]}
                        zoom={16}
                        markers={[
                            {
                                id: 1,
                                position: [8.897272, 76.7418157],
                                color: 'gold',
                                popup: {
                                    title: 'Beemas Makeover Studio',
                                    content: 'Kerala\'s premier sanctuary for cinematic beauty.',
                                    image: '/images/services/bridal.jpg',
                                    googleMapsUrl: 'https://www.google.com/maps/dir//BEEMAS+MAKEOVER+STUDIO+AND+UNISEX+SALON,+MEEYANNOOR,+MEEYANNOOR+KUMMALLUR,+MEEYANNUR+KUMMALLOOR+ROAD,+MEEYANNOOR+KUMMALLOOR+ROAD,+KOLLAM,+Kerala+691537/@18.5073664,73.9213312,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b05e1bcca12b71b:0xb6e3ae51d0f664c9!2m2!1d76.7418157!2d8.897272?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D'
                                }
                            }
                        ]}
                        style={{ height: '600px', width: '100%' }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
