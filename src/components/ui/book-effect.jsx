import React from 'react';
import { motion } from 'framer-motion';

export const BookEffect = ({ children }) => {
  return (
    <div className="group relative w-full aspect-[3/4] max-w-sm mx-auto cursor-pointer" style={{ perspective: '1500px' }}>
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        initial={{ rotateY: -5, rotateX: 2 }}
        whileHover={{ rotateY: -35, rotateX: 5, x: 20, z: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Book Shadow */}
        <div 
          className="absolute -bottom-4 left-4 right-0 h-10 bg-black/50 blur-xl rounded-full transition-opacity group-hover:opacity-100"
          style={{ transform: "translateZ(-50px)" }}
        />

        {/* Book Spine */}
        <div 
          className="absolute top-0 left-0 h-full w-[40px] bg-gradient-to-r from-[#8a6d29] via-[#c5a059] to-[#8a6d29] origin-left border-y border-l border-white/20 rounded-l-md shadow-inner flex items-center justify-center overflow-hidden"
          style={{ transform: "rotateY(-90deg) translateX(-40px)" }}
        >
            <div className="w-full h-full absolute inset-0 bg-black/10 mix-blend-overlay"></div>
            <span className="text-black/60 uppercase tracking-[0.4em] text-[10px] font-black -rotate-90 whitespace-nowrap">Beemas Signature</span>
        </div>

        {/* Book Pages (Right Edge) */}
        <div 
          className="absolute top-[1%] right-0 h-[98%] w-[38px] bg-[#f0f0f0] origin-right"
          style={{ 
            transform: "rotateY(90deg) translateX(38px)",
            backgroundImage: "linear-gradient(to right, #ddd 0%, #fff 10%, #fff 90%, #ddd 100%)",
            backgroundSize: "100% 4px",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)"
          }}
        >
            {/* Page lines texture */}
            <div className="w-full h-full opacity-30" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #ccc 2px, #ccc 3px)" }}></div>
        </div>

        {/* Top Edge */}
        <div 
          className="absolute top-0 left-0 w-full h-[38px] bg-[#e0e0e0] origin-top"
          style={{ transform: "rotateX(90deg) translateY(-38px)" }}
        />
        
        {/* Bottom Edge */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[38px] bg-[#c0c0c0] origin-bottom"
          style={{ transform: "rotateX(-90deg) translateY(38px)" }}
        />

        {/* Front Cover */}
        <div 
          className="absolute inset-0 bg-[#0A0A0A] rounded-r-lg overflow-hidden shadow-[inset_4px_0_10px_rgba(255,255,255,0.2)] border border-white/10 z-10"
          style={{ transform: "translateZ(1px)" }}
        >
          {/* Subtle lighting reflection on cover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-20 pointer-events-none mix-blend-overlay"></div>
          
          <div className="absolute inset-0 shadow-[inset_15px_0_30px_rgba(0,0,0,0.5)] z-20 pointer-events-none"></div>

          {children}
        </div>
      </motion.div>
    </div>
  );
};
