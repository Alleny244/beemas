import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const InfiniteMenu = ({ items }) => {
  const containerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const scrollY = useMotionValue(0);

  // Triple the items to ensure seamless infinite scroll
  const allItems = [...items, ...items, ...items];

  useEffect(() => {
    if (containerRef.current) {
      setContentHeight(containerRef.current.scrollHeight / 3);
    }
  }, [items]);

  useEffect(() => {
    let animationFrameId;
    const scrollSpeed = 0.5; // Adjust speed as needed

    const animate = () => {
      const currentScroll = scrollY.get();
      let nextScroll = currentScroll + scrollSpeed;

      if (nextScroll >= contentHeight) {
        nextScroll = 0;
      }

      scrollY.set(nextScroll);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [contentHeight, scrollY]);

  const y = useTransform(scrollY, (v) => -v);

  return (
    <div className="relative h-[750px] lg:h-[850px] overflow-hidden mask-fade-vertical">
      <motion.div
        ref={containerRef}
        style={{ y }}
        className="flex flex-col gap-6"
      >
        {allItems.map((item, index) => (
          <div key={index} className="w-full">
            {item.content}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMenu;
