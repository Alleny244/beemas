import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { CircularCarousel } from './ui/circular-carousel';

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
    },
    {
        name: "Nikhila M.",
        role: "Nail Artistry",
        text: "The nail art services are incredible. They have such an eye for detail and the gel extensions lasted flawlessly for weeks. A truly luxurious experience from start to finish.",
        rating: 5
    },
    {
        name: "Deepa J.",
        role: "Skin Rituals",
        text: "I opted for the signature HydraFacial before an event, and my skin has never glowed this much. The estheticians are extremely knowledgeable and the studio vibe is so relaxing.",
        rating: 5
    },
    {
        name: "Sara V.",
        role: "Hair Styling",
        text: "Finally found a stylist who understands curly hair! They completely transformed my look without damaging my natural texture. The premium products they use make a huge difference.",
        rating: 5
    },
    {
        name: "Meenakshi P.",
        role: "Bridal Makeover",
        text: "Booking Beemas for my wedding was the best decision. They made me feel like an absolute queen. The makeup was flawless, cinematic, and lasted through tears and dancing!",
        rating: 5
    },
    {
        name: "Anjali S.",
        role: "Keratin Treatment",
        text: "I was hesitant about getting a keratin treatment, but the team here explained everything perfectly. The results are stunning—my hair is silky smooth and manageable.",
        rating: 5
    },
    {
        name: "Lekshmi B.",
        role: "Luxury Spa",
        text: "Every visit feels like a mini-vacation. The attention to detail, from the consultation to the final finishing touches, sets them apart from any other salon in Kollam.",
        rating: 5
    }
];

const ReviewCard = ({ testimonial }) => (
    <motion.div 
        whileHover={window.innerWidth >= 768 ? { scale: 1.04, y: -4 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative h-full p-[1px] rounded-3xl overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.5)] cursor-pointer"
    >
        {/* Animated Gold Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-primary/40 opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Card Body */}
        <div className="relative h-full bg-[#0A0A0A] p-5 md:p-6 rounded-3xl overflow-hidden z-10 flex flex-col">
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-32 h-32 bg-primary/20 blur-[50px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
            
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />
            
            <div>
                <div className="flex text-primary mb-4 gap-1 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    ))}
                </div>
                
                <p className="text-white/90 text-xs md:text-sm leading-snug font-light mb-4 italic relative z-10 tracking-wide line-clamp-5">
                    "{testimonial.text}"
                </p>
            </div>
            
            <div className="flex items-center gap-3 relative z-10 mt-auto pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex-shrink-0 flex items-center justify-center text-black text-base font-black shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    {testimonial.name.charAt(0)}
                </div>
                <div className="overflow-hidden">
                    <div className="font-black text-white tracking-[0.2em] uppercase text-[10px] mb-1 truncate">{testimonial.name}</div>
                    <div className="text-[8px] uppercase tracking-[0.3em] text-primary font-bold truncate">{testimonial.role}</div>
                </div>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const [dimensions, setDimensions] = React.useState({
        radius: 400,
        itemWidth: 240,
        itemHeight: 320,
        count: 10
    });

    React.useEffect(() => {
        const updateDimensions = () => {
            if (window.innerWidth < 768) {
                setDimensions({
                    radius: 260,
                    itemWidth: 140,
                    itemHeight: 200,
                    count: 4
                });
            } else if (window.innerWidth < 1024) {
                setDimensions({
                    radius: 300,
                    itemWidth: 220,
                    itemHeight: 300,
                    count: 8
                });
            } else {
                setDimensions({
                    radius: 400,
                    itemWidth: 240,
                    itemHeight: 320,
                    count: 10
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const items = testimonials.slice(0, dimensions.count).map((t, i) => ({
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

                <div className="relative z-10 w-full h-[400px] md:h-[500px] lg:h-[600px]">
                    <CircularCarousel 
                        items={items.map(i => i.content)} 
                        radius={dimensions.radius} 
                        itemWidth={dimensions.itemWidth} 
                        itemHeight={dimensions.itemHeight} 
                        tiltAngle={window.innerWidth < 768 ? -5 : -10} 
                        rotationSpeed={0.2} 
                        perspective={2000}
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
