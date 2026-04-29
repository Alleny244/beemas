import React, { useEffect, useRef } from 'react';

const SplashCursor = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth < 768) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles = [];
        let mouse = { x: width / 2, y: height / 2 };
        let lastMouse = { x: width / 2, y: height / 2 };

        // Luxury Gold Palette
        const colors = ['#D4AF37', '#FFF', '#E5C07B', '#8A6A24']; 

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);

        const onMouseMove = (e) => {
            lastMouse.x = mouse.x;
            lastMouse.y = mouse.y;
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Splash intensity based on mouse movement speed
            const dx = mouse.x - lastMouse.x;
            const dy = mouse.y - lastMouse.y;
            const speed = Math.sqrt(dx * dx + dy * dy);
            
            const count = Math.min(Math.floor(speed * 0.4), 12) + 2;

            for (let i = 0; i < count; i++) {
                particles.push({
                    x: mouse.x,
                    y: mouse.y,
                    vx: (Math.random() - 0.5) * 4 + dx * 0.05,
                    vy: (Math.random() - 0.5) * 4 + dy * 0.05,
                    life: 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 15 + 5
                });
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        // Also capture touch for mobile
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                onMouseMove(e.touches[0]);
            }
        });

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.globalCompositeOperation = 'screen';

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                const rgb = hexToRgb(p.color);
                gradient.addColorStop(0, `rgba(${rgb}, ${p.life})`);
                gradient.addColorStop(1, `rgba(${rgb}, 0)`);
                
                ctx.fillStyle = gradient;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.92; // fluid friction
                p.vy *= 0.92; // fluid friction
                p.vy += 0.1; // slight gravity for liquid feel
                p.life -= 0.03;
                p.size *= 0.96;

                if (p.life <= 0 || p.size <= 0.1) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            requestAnimationFrame(render);
        };

        const hexToRgb = (hex) => {
            if (hex === '#FFF') return '255,255,255';
            if (hex === '#D4AF37') return '212,175,55';
            if (hex === '#E5C07B') return '229,192,123';
            if (hex === '#8A6A24') return '138,106,36';
            return '212,175,55';
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
        />
    );
};

export default SplashCursor;
