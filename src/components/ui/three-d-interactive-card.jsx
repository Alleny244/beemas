import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * ThreeDInteractiveCard Component
 * Recreates the 3D tilt/parallax effect for individual gallery cards.
 */
export default function ThreeDInteractiveCard({ children, className = "" }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

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
        <div className="w-full h-full" style={{ perspective: "1000px" }}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className={`relative w-full h-full transition-all duration-200 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${className}`}
            >
                <div
                    style={{
                        transform: "translateZ(60px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="w-full h-full"
                >
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
