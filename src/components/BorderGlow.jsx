import React from 'react';

const BorderGlow = ({ children, className = "" }) => {
    return (
        <div className={`relative overflow-hidden rounded-[2rem] p-[1px] group ${className}`}>
            <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(212,175,55,0.8)_50%,transparent_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative h-full w-full bg-[#121212] rounded-[2rem] z-10">
                {children}
            </div>
        </div>
    );
};

export default BorderGlow;
