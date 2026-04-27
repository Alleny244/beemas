import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const BubbleMenuItem = ({ children, mouseX }) => {
    const itemRef = useRef(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = itemRef.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    // MacOS dock-style scaling based on cursor distance
    const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]);
    const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={itemRef}
            style={{ scale }}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-primary/10 hover:border-primary text-white hover:text-primary cursor-pointer origin-bottom transition-colors font-bold text-xs uppercase tracking-widest"
        >
            {children}
        </motion.div>
    );
};

const BubbleMenu = ({ items }) => {
    const mouseX = useMotionValue(Infinity);

    return (
        <div 
            className="flex items-end gap-4 relative z-50 h-16"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
        >
            {items.map((item, i) => (
                <a key={i} href={item.href || '#'} className="block">
                    <BubbleMenuItem mouseX={mouseX}>
                        {item.label}
                    </BubbleMenuItem>
                </a>
            ))}
        </div>
    );
};

export default BubbleMenu;
