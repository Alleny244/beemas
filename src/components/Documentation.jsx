import React from 'react';

const Documentation = () => {
    return (
        <div className="bg-[#0A0A0A] text-white p-12 font-sans leading-relaxed">
            <h1 className="text-5xl font-black text-primary mb-8 border-b border-primary/20 pb-4 uppercase tracking-tighter">
                Beemas 3D Design System <span className="text-white opacity-20 font-serif italic text-3xl ml-4">v1.0</span>
            </h1>

            <section className="mb-16">
                <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-widest border-l-4 border-primary pl-4">Overview</h2>
                <p className="text-text-muted text-lg max-w-3xl">
                    The Beemas Makeover Studio web application features a custom-built 3D interaction system. 
                    All components are implemented locally to ensure maximum performance and stability on GitHub Pages, 
                    bypassing traditional remote module resolution errors.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* 3D Magazine Effect */}
                <section className="bg-black/40 p-8 rounded-[40px] border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">3D Magazine Effect</h3>
                    <p className="text-text-muted mb-4">A high-end WebGL/Three.js component that simulates a physical magazine with realistic page-turning physics.</p>
                    <ul className="text-sm space-y-2 text-white/60">
                        <li>• <span className="text-primary font-bold">File:</span> <code className="bg-black p-1 rounded">magazine-effect.jsx</code></li>
                        <li>• <span className="text-primary font-bold">Tech:</span> React Three Fiber + Drei</li>
                        <li>• <span className="text-primary font-bold">Usage:</span> Featured Packages section</li>
                    </ul>
                </section>

                {/* 3D Gallery Stack */}
                <section className="bg-black/40 p-8 rounded-[40px] border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">3D Gallery Stack</h3>
                    <p className="text-text-muted mb-4">An interactive "deck" of cards that fans out in 3D space on hover, revealing signature collections.</p>
                    <ul className="text-sm space-y-2 text-white/60">
                        <li>• <span className="text-primary font-bold">File:</span> <code className="bg-black p-1 rounded">three-d-gallery-card.jsx</code></li>
                        <li>• <span className="text-primary font-bold">Tech:</span> Framer Motion + 3D Transforms</li>
                        <li>• <span className="text-primary font-bold">Usage:</span> Portfolio & Legacy sections</li>
                    </ul>
                </section>

                {/* Text Glow Filter */}
                <section className="bg-black/40 p-8 rounded-[40px] border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">SVG Text Glow</h3>
                    <p className="text-text-muted mb-4">An Apple-style multi-layered Gaussian blur filter that gives headers a vibrant "radiance" effect.</p>
                    <ul className="text-sm space-y-2 text-white/60">
                        <li>• <span className="text-primary font-bold">File:</span> <code className="bg-black p-1 rounded">text-glow.jsx</code></li>
                        <li>• <span className="text-primary font-bold">Tech:</span> SVG Filters + feColorMatrix</li>
                        <li>• <span className="text-primary font-bold">Usage:</span> Experience Metrics (10k+, 4.9)</li>
                    </ul>
                </section>

                {/* 3D Interactive Tilt */}
                <section className="bg-black/40 p-8 rounded-[40px] border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">3D Interactive Tilt</h3>
                    <p className="text-text-muted mb-4">A tactile hover interaction that tilts elements based on mouse position with dynamic depth layering.</p>
                    <ul className="text-sm space-y-2 text-white/60">
                        <li>• <span className="text-primary font-bold">File:</span> <code className="bg-black p-1 rounded">three-d-interactive-card.jsx</code></li>
                        <li>• <span className="text-primary font-bold">Tech:</span> Framer Motion Hooks</li>
                        <li>• <span className="text-primary font-bold">Usage:</span> Individual Portfolio Cards</li>
                    </ul>
                </section>
            </div>

            <section className="mt-16 pt-16 border-t border-white/10">
                <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-widest">Deployment Architecture</h2>
                <div className="bg-black/60 p-8 rounded-[30px] border border-primary/20">
                    <p className="text-text-muted mb-6">
                        The application is optimized for <span className="text-white font-bold">GitHub Pages</span> deployment using the following configuration:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div className="space-y-4">
                            <h4 className="text-white font-bold uppercase tracking-widest">Routing</h4>
                            <p className="text-white/50 italic">Uses HashRouter to prevent 404 errors on page refresh in static environments.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-bold uppercase tracking-widest">Asset Management</h4>
                            <p className="text-white/50 italic">Vite base path set to '/beemas/' to ensure absolute path resolution for 3D assets.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Documentation;
