import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 max-w-7xl mx-auto px-6">
            <div className="glass-card p-12 lg:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h4 className="text-primary uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
                        <h2 className="text-5xl mb-8">Book Your <br /><span className="gradient-text italic">Transformation</span></h2>
                        <p className="text-text-muted mb-12 max-w-sm">Ready to elevate your look? Schedule an appointment or reach out with any questions.</p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-center">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted uppercase tracking-widest mb-1">Call Us</div>
                                    <div className="text-lg font-semibold">+91 70344 31946</div>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted uppercase tracking-widest mb-1">Location</div>
                                    <div className="text-lg font-semibold">Meeyannur, Kollam, Kerala 691537</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-glass-border rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors" />
                            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-glass-border rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors" />
                        </div>
                        <select className="w-full bg-white/5 border border-glass-border rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors appearance-none">
                            <option className="bg-bg-dark">Select Service</option>
                            <option className="bg-bg-dark">Bridal Makeup</option>
                            <option className="bg-bg-dark">Unisex Haircut</option>
                            <option className="bg-bg-dark">Berina Black Hair Color</option>
                            <option className="bg-bg-dark">Skin & Beauty Treatment</option>
                        </select>
                        <textarea rows="4" placeholder="Your Message" className="w-full bg-white/5 border border-glass-border rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors"></textarea>
                        <button type="submit" className="btn-primary w-full justify-center">
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
