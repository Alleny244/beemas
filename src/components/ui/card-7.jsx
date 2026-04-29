"use client"; // Required for state and event handlers

import * as React from "react";
import { cn } from "../../lib/utils";
import { Sparkles } from "lucide-react";

// --- COMPONENT DEFINITION ---
export function InteractiveProductCard({
  className,
  imageUrl,
  logoUrl,
  title,
  description,
  price,
  quote, // Added prop specifically for the Beemas quote card
  ...props
}) {
  const cardRef = React.useRef(null);
  const [style, setStyle] = React.useState({});

  // --- MOUSE MOVE HANDLER ---
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / (height / 2)) * -8; // Max rotation 8deg
    const rotateY = ((x - width / 2) / (width / 2)) * 8;   // Max rotation 8deg

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });
  };

  // --- MOUSE LEAVE HANDLER ---
  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.4s ease-in-out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={cn(
        "relative w-full h-full rounded-3xl bg-black shadow-2xl overflow-hidden group",
        "[transform-style:preserve-3d]", // Enables 3D transformations for children
        className
      )}
      {...props}
    >
      {/* Background Image - scales slightly to avoid showing edges on tilt */}
      <img
        src={imageUrl}
        alt={title || "Background"}
        className="absolute inset-0 h-full w-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
        style={{ transform: "translateZ(-20px) scale(1.1)" }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-3xl" />

      {/* Main Content with 3D effect */}
      <div
        className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none"
        style={{ transform: "translateZ(40px)" }}
      >
        {quote ? (
             <div className="glass-card border border-white/10 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-colors duration-500 pointer-events-auto">
                <Sparkles className="w-6 h-6 text-primary mb-4 opacity-70" />
                <p className="text-white italic text-xl md:text-2xl font-light leading-relaxed">"{quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-primary"></div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Beemas Philosophy</span>
                </div>
            </div>
        ) : (
            <>
                {/* Glassmorphism Header */}
                <div className="flex items-start justify-between rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md pointer-events-auto">
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-xs text-white/70">{description}</p>
                </div>
                {logoUrl && <img src={logoUrl} alt="Brand Logo" className="h-4 w-auto" />}
                </div>

                {/* Price Tag - Absolute position for pixel perfection */}
                {price && (
                <div className="absolute top-[108px] left-5 pointer-events-auto">
                    <div className="rounded-full bg-black/40 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm border border-white/10">
                    {price}
                    </div>
                </div>
                )}

                {/* Pagination Dots - Pushed to the bottom */}
                <div className="mt-auto flex w-full justify-center gap-2 pb-2">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                    key={index}
                    className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        index === 0 ? "bg-primary" : "bg-white/30"
                    )}
                    />
                ))}
                </div>
            </>
        )}
      </div>
    </div>
  );
}
