import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import InfiniteMenu from './InfiniteMenu';

const testimonials = [
    {
        name: "Fathima S.",
        role: "Bridal Makeup",
        text: "I did my bridal makeup here and it was exactly what I wanted. The staff is very professional and the ambiance is so welcoming. Highly recommend for any bride-to-be!",
        rating: 5
    },
    {
        name: "Reshma R.",
        role: "Hair & Skin Care",
        text: "Best salon in Meeyannur! The service is top-notch. I went in for a haircut and facial, and the quality of products they use is amazing. Will definitely be a regular.",
        rating: 5
    },
    {
        name: "Amina K.",
        role: "Makeover Services",
        text: "Beemas Makeover Studio exceeded my expectations. The staff is extremely polite and skilled. The salon is clean, luxurious, and the results are consistently perfect.",
        rating: 5
    },
    {
        name: "Kavya T.",
        role: "Premium Grooming",
        text: "Such a convenient location with premium services. They listen to exactly what you need. My hair coloring turned out beautifully. 5 stars all the way!",
        rating: 5
    }
];

const ReviewCard = ({ testimonial }) => (
    <div className="glass-card p-8 border-white/5 relative group hover:border-primary/50 transition-all duration-700 w-full bg-[#0A0A0A] shadow-xl overflow-hidden rounded-2xl">
        <Quote className="absolute top-4 right-4 w-12 h-12 text-primary opacity-5 transition-all duration-700 pointer-events-none" />
        
        <div className="flex text-primary mb-4 gap-1 relative z-10">
            {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-primary" />
            ))}
        </div>
        
        <p className="text-text-muted text-sm leading-relaxed font-light mb-6 italic relative z-10">
            "{testimonial.text}"
        </p>
        
        <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center text-primary text-sm font-bold border border-primary/30">
                {testimonial.name.charAt(0)}
            </div>
            <div>
                <div className="font-bold text-white tracking-widest uppercase text-[10px]">{testimonial.name}</div>
                <div className="text-[8px] uppercase tracking-widest text-primary">{testimonial.role}</div>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const items = testimonials.map((t, i) => ({
        id: `review-${i}`,
        content: <ReviewCard testimonial={t} />
    }));

    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-[#121212] border-t border-white/5">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-rose/5 rounded-full blur-[150px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-left relative z-10">
                    <motion.h4 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6 flex items-center gap-3"
                    >
                        <span className="w-8 h-[1px] bg-primary"></span> Client Experiences
                    </motion.h4>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] md:leading-[1.1] mb-8"
                    >
                        WORDS OF <br className="hidden md:block" /><span className="gradient-text italic font-serif">Praise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-text-muted leading-relaxed max-w-sm mb-8"
                    >
                        Our legacy is built upon the satisfaction of our clientele. Watch the continuous flow of stories from those who have stepped into our sanctuary.
                    </motion.p>
                </div>

                <div className="relative z-10">
                    <InfiniteMenu items={items} />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
