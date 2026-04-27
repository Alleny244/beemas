import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Stack = ({ cards }) => {
    const [cardList, setCardList] = useState(cards);

    const handleDragEnd = (event, info) => {
        // If swiped far enough left or right, cycle the card
        if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
            setCardList(prev => {
                const newCards = [...prev];
                const swipedCard = newCards.shift();
                newCards.push(swipedCard);
                return newCards;
            });
        }
    };

    return (
        <div className="relative w-full max-w-lg mx-auto h-[450px] flex items-center justify-center perspective-[1000px]">
            {cardList.map((card, index) => {
                const isTop = index === 0;
                
                return (
                    <motion.div
                        key={card.id}
                        layout
                        initial={{ scale: 0.8, opacity: 0, y: -50 }}
                        animate={{ 
                            scale: 1 - index * 0.05, 
                            opacity: index < 3 ? 1 - index * 0.2 : 0, 
                            y: index * 20,
                            zIndex: cardList.length - index,
                            rotate: isTop ? 0 : (index % 2 === 0 ? -2 : 2)
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            mass: 0.8
                        }}
                        drag={isTop ? true : false}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.8}
                        onDragEnd={isTop ? handleDragEnd : undefined}
                        whileDrag={{ scale: 1.05, rotate: 5, cursor: "grabbing" }}
                        className={`absolute w-full ${isTop ? 'cursor-grab touch-none' : 'pointer-events-none'}`}
                    >
                        {card.content}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default Stack;
