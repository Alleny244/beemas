import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ChromaGrid = () => {
    const [grid, setGrid] = useState({ columns: 0, rows: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const calculateGrid = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const size = 60; // Pixel size of each cell
            const columns = Math.ceil(rect.width / size);
            const rows = Math.ceil(rect.height / size); 
            setGrid({ columns, rows });
        };
        
        // Slight delay to ensure DOM is fully rendered for height calculation
        setTimeout(calculateGrid, 100);
        window.addEventListener('resize', calculateGrid);
        return () => window.removeEventListener('resize', calculateGrid);
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="absolute inset-0 z-0 overflow-hidden" 
            style={{ maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 90%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 90%)' }}
        >
            <div 
                className="w-full h-full"
                style={{ 
                    display: 'grid', 
                    gridTemplateColumns: `repeat(${grid.columns}, minmax(0, 1fr))` 
                }}
            >
                {Array.from({ length: grid.columns * grid.rows }).map((_, i) => (
                    <Cell key={i} />
                ))}
            </div>
        </div>
    );
};

const Cell = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.div
            className="border-[0.5px] border-primary/[0.03] w-full aspect-square"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ backgroundColor: "rgba(212, 175, 55, 0)" }}
            animate={{ 
                backgroundColor: isHovered ? "rgba(212, 175, 55, 0.5)" : "rgba(212, 175, 55, 0)",
            }}
            transition={{ duration: isHovered ? 0 : 2, ease: "easeOut" }}
        />
    );
};

export default ChromaGrid;
