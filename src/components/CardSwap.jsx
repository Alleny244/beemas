import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CardSwap = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwap = () => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto h-[400px] flex items-center justify-center cursor-pointer perspective-[1000px]" onClick={handleSwap}>
            <AnimatePresence mode="popLayout">
                {cards.map((card, i) => {
                    const isFront = i === currentIndex;
                    const isSecond = i === (currentIndex + 1) % cards.length;
                    const isThird = i === (currentIndex + 2) % cards.length;
                    
                    if (!isFront && !isSecond && !isThird) return null;

                    let yOffset = 0;
                    let scale = 1;
                    let zIndex = 0;
                    let opacity = 1;

                    if (isFront) {
                        yOffset = 0;
                        scale = 1;
                        zIndex = 30;
                    } else if (isSecond) {
                        yOffset = 30;
                        scale = 0.95;
                        zIndex = 20;
                        opacity = 0.8;
                    } else if (isThird) {
                        yOffset = 60;
                        scale = 0.9;
                        zIndex = 10;
                        opacity = 0.5;
                    }

                    return (
                        <motion.div
                            key={`card-${card.id || i}-${i}`}
                            initial={{ opacity: 0, y: -50, scale: 0.8 }}
                            animate={{ opacity, y: yOffset, scale, zIndex }}
                            exit={{ opacity: 0, x: -200, scale: 0.5, transition: { duration: 0.3 } }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                            className="absolute w-full"
                        >
                            {card.content}
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default CardSwap;
