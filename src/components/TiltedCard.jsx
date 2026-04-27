import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltedCard = ({ children, className = "" }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Add spring physics for smooth return
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 });

    // Maps the relative mouse position to a rotation angle (-15deg to 15deg)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
    
    // Add dynamic glare effect
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareOpacity = useTransform(
        // Opacity peaks when mouse is furthest from center
        () => Math.max(Math.abs(x.get()), Math.abs(y.get())) * 1.5
    );

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Normalize between -0.5 and 0.5
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative perspective-[1200px] w-full h-full ${className}`}
        >
            <div 
                className="w-full h-full relative"
                style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
            >
                {/* Glare effect overlay */}
                <motion.div 
                    className="absolute inset-0 z-50 pointer-events-none rounded-[2rem] overflow-hidden"
                    style={{ opacity: glareOpacity }}
                >
                    <motion.div 
                        className="absolute w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent blur-xl"
                        style={{
                            left: useTransform(glareX, v => `calc(${v} - 100%)`),
                            top: useTransform(glareY, v => `calc(${v} - 100%)`)
                        }}
                    />
                </motion.div>

                {children}
            </div>
        </motion.div>
    );
};

export default TiltedCard;
