import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <Suspense fallback={<div className="w-full h-full bg-[#121212]" />}>
        {/* Working public abstract 3D scene */}
        <Spline 
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
          className="w-full h-full scale-125 md:scale-100"
        />
      </Suspense>
      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#121212] opacity-60"></div>
    </div>
  );
};

export default SplineScene;
