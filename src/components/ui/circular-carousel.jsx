import React, { useRef, useEffect, useState } from "react";

export function CircularCarousel({
    items,
    radius = 320,
    itemWidth = 260,
    itemHeight = 360,
    perspective = 1200,
    rotationSpeed = 0.18,
    tiltAngle = -18,
    style
}) {
    const [rotation, setRotation] = useState(0);
    const dragging = useRef(false);
    const lastX = useRef(0);
    const velocity = useRef(0);
    const raf = useRef(null);

    // -------- POINTER DRAG SYSTEM --------
    useEffect(() => {
        function onPointerDown(e) {
            dragging.current = true;
            lastX.current = e.clientX;
            e.target.setPointerCapture?.(e.pointerId);
        }
        function onPointerMove(e) {
            if (!dragging.current) return;
            const dx = e.clientX - lastX.current;
            lastX.current = e.clientX;
            velocity.current = dx * 0.5;
            setRotation(r => r + dx * 0.5);
        }
        function onPointerUp() {
            dragging.current = false;
        }

        window.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);

        return () => {
            window.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
        };
    }, []);

    // -------- INERTIA AND AUTO ROTATE LOOP --------
    useEffect(() => {
        function animate() {
            if (!dragging.current) {
                if (Math.abs(velocity.current) > 0.01) {
                    setRotation(r => r + velocity.current);
                    velocity.current *= 0.94; // friction
                } else {
                    setRotation(r => r + rotationSpeed);
                }
            }
            raf.current = requestAnimationFrame(animate);
        }
        raf.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf.current);
    }, [rotationSpeed]);

    const N = items.length;
    const angleStep = 360 / N;

    return (
        <div style={{ ...style, width: "100%", height: "100%", perspective, overflow: "visible", position: "relative", cursor: dragging.current ? "grabbing" : "grab", userSelect: "none", touchAction: "none" }}>
            <div style={{ width: "100%", height: "100%", position: "absolute", transformStyle: "preserve-3d", willChange: "transform", transform: `rotateY(${rotation}deg)` }}>
                {items.map((item, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: itemWidth,
                                height: itemHeight,
                                marginLeft: -itemWidth / 2,
                                marginTop: -itemHeight / 2,
                                transform: `rotateY(${angleStep * i}deg) translateZ(${radius}px) rotateX(${tiltAngle}deg)`,
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
