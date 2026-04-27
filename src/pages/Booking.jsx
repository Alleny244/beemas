import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Sparkles, CheckCircle, ChevronRight, ChevronLeft, Phone } from 'lucide-react';

const steps = [
    { id: 1, title: 'Service', icon: <Sparkles className="w-5 h-5" /> },
    { id: 2, title: 'Schedule', icon: <Calendar className="w-5 h-5" /> },
    { id: 3, title: 'Details', icon: <User className="w-5 h-5" /> }
];

const Booking = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        email: ''
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleServiceSelect = (service) => {
        setFormData({ ...formData, service });
        nextStep();
    };

    return (
        <div className="pt-40 pb-32 min-h-screen bg-[#0A0A0A] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-rose/5 blur-[150px] -z-10 rounded-full"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h4 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4"
                    >
                        Reservation
                    </motion.h4>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter"
                    >
                        SECURE YOUR <span className="gradient-text">MOMENT</span>
                    </motion.h1>
                </div>

                {/* Progress Bar */}
                <div className="flex justify-center mb-16">
                    <div className="flex items-center gap-4 bg-white/5 p-2 rounded-full border border-white/10">
                        {steps.map((s, i) => (
                            <React.Fragment key={s.id}>
                                <div className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 ${step === s.id ? 'bg-primary text-black' : 'text-text-muted'}`}>
                                    {s.icon}
                                    <span className="text-[10px] uppercase tracking-widest font-bold hidden md:block">{s.title}</span>
                                </div>
                                {i < steps.length - 1 && <div className="w-8 h-[1px] bg-white/10"></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="glass-card p-10 md:p-20 min-h-[500px] flex flex-col">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div 
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-bold mb-10 tracking-tight">Select a Treatment</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['Bridal Couture', 'Haute Hair Design', 'Radiance Skin Ritual', 'Luxe Nail Art', 'Gentleman Grooming', 'Cinematic Makeup'].map((s) => (
                                        <button 
                                            key={s}
                                            onClick={() => handleServiceSelect(s)}
                                            className="text-left p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all group flex justify-between items-center"
                                        >
                                            <span className="font-medium">{s}</span>
                                            <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div 
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-10"
                            >
                                <h3 className="text-3xl font-bold mb-10 tracking-tight">Choose Your Time</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-xs uppercase tracking-widest text-text-muted font-bold">Preferred Date</label>
                                        <input 
                                            type="date" 
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 outline-none focus:border-primary transition-all text-white"
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs uppercase tracking-widest text-text-muted font-bold">Preferred Time</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'].map((t) => (
                                                <button 
                                                    key={t}
                                                    onClick={() => setFormData({ ...formData, time: t })}
                                                    className={`py-3 rounded-lg border text-xs font-bold ${formData.time === t ? 'border-primary bg-primary text-black' : 'border-white/5 bg-white/5 hover:border-white/30'}`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-12">
                                    <button onClick={prevStep} className="flex items-center gap-2 text-text-muted hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">
                                        <ChevronLeft className="w-4 h-4" /> Back
                                    </button>
                                    <button onClick={nextStep} disabled={!formData.date || !formData.time} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                                        Next Step <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div 
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <h3 className="text-3xl font-bold mb-10 tracking-tight">Personal Details</h3>
                                <div className="space-y-6">
                                    <input 
                                        type="text" 
                                        placeholder="Full Name" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 outline-none focus:border-primary transition-all text-white"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <input 
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 outline-none focus:border-primary transition-all text-white"
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                    <textarea 
                                        placeholder="Any special requests?" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 outline-none focus:border-primary transition-all text-white h-32"
                                    ></textarea>
                                </div>
                                <div className="flex justify-between mt-12">
                                    <button onClick={prevStep} className="flex items-center gap-2 text-text-muted hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">
                                        <ChevronLeft className="w-4 h-4" /> Back
                                    </button>
                                    <button onClick={nextStep} className="btn-primary">
                                        Complete Booking
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div 
                                key="step4"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20 flex flex-col items-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-8 border border-primary/30">
                                    <CheckCircle className="w-12 h-12" />
                                </div>
                                <h3 className="text-4xl font-bold mb-4">Request Received</h3>
                                <p className="text-text-muted max-w-md mx-auto mb-12">
                                    Your reservation for <span className="text-white font-bold">{formData.service}</span> is being processed. We will confirm your slot shortly via WhatsApp.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <a 
                                        href={`https://wa.me/917034431946?text=Hello, I would like to book ${formData.service} on ${formData.date} at ${formData.time}. My name is ${formData.name}.`} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-black font-bold uppercase text-[0.7rem] tracking-[0.2em] hover:scale-105 transition-all shadow-[0_20px_50px_rgba(37,211,102,0.2)]"
                                    >
                                        <Phone className="w-4 h-4 fill-black" /> Instant WhatsApp Confirm
                                    </a>
                                    <button onClick={() => setStep(1)} className="px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-all text-[0.7rem] tracking-[0.2em] font-bold uppercase">
                                        New Booking
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Booking;
