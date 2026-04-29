import React, { useId } from 'react';

/**
 * TextGlow Component
 * Recreates the Apple-style SVG glow filter for text.
 */
export default function TextGlow({ text = "Titanium", className = "" }) {
    const id = useId().replace(/:/g, "");
    
    return (
        <div className={`relative inline-block ${className}`} id={id}>
            <style>{`
                #${id} .glow-text {
                    filter: url(#glow-${id});
                    color: #fffaf6;
                    transform: translateZ(0);
                    display: inline-block;
                }
                #${id} svg {
                    position: absolute;
                    width: 0;
                    height: 0;
                    pointer-events: none;
                }
            `}</style>
            
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id={`glow-${id}`} colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4, 4" result="blur4" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="19, 19" result="blur19" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="9, 9" result="blur9" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="30, 30" result="blur30" />
                        
                        <feColorMatrix in="blur4" result="color-0-blur" type="matrix" 
                            values="1 0 0 0 0 0 0.98 0 0 0 0 0 0.96 0 0 0 0 0 0.8 0" />
                        <feOffset in="color-0-blur" result="layer-0-offsetted" dx="0" dy="0" />
                        
                        <feColorMatrix in="blur19" result="color-1-blur" type="matrix" 
                            values="0.81 0 0 0 0 0 0.49 0 0 0 0 0 0.26 0 0 0 0 0 1 0" />
                        <feOffset in="color-1-blur" result="layer-1-offsetted" dx="0" dy="2" />
                        
                        <feColorMatrix in="blur9" result="color-2-blur" type="matrix" 
                            values="1 0 0 0 0 0 0.66 0 0 0 0 0 0.36 0 0 0 0 0 0.65 0" />
                        <feOffset in="color-2-blur" result="layer-2-offsetted" dx="0" dy="2" />
                        
                        <feColorMatrix in="blur30" result="color-3-blur" type="matrix" 
                            values="1 0 0 0 0 0 0.61 0 0 0 0 0 0.39 0 0 0 0 0 1 0" />
                        <feOffset in="color-3-blur" result="layer-3-offsetted" dx="0" dy="2" />

                        <feMerge>
                            <feMergeNode in="layer-0-offsetted" />
                            <feMergeNode in="layer-1-offsetted" />
                            <feMergeNode in="layer-2-offsetted" />
                            <feMergeNode in="layer-3-offsetted" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>
            
            <span className="glow-text">{text}</span>
        </div>
    );
}
