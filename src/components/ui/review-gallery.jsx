"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function ReviewGallery({
  items = [],
  className = "",
  maxHeight = 120,
  spacing = "-space-x-48 md:-space-x-64 lg:-space-x-72",
  pauseOnHover = true,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={`relative w-full ${className}`}>
      {/* Desktop 3D overlapping layout - hidden on mobile */}
      <div className="hidden md:block relative overflow-hidden h-[600px] -mb-[200px]">
        <div className={`flex ${spacing} pb-8 pt-32 items-end justify-center`}>
          {items.map((item, index) => {
            // Calculate stagger height - peak in middle, descending to edges
            const totalItems = items.length
            const middle = Math.floor(totalItems / 2)
            const distanceFromMiddle = Math.abs(index - middle)
            const staggerOffset = maxHeight - distanceFromMiddle * 20

            const zIndex = totalItems - index

            const isHovered = hoveredIndex === index
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index

            // When hovering: hovered card moves to consistent top position, others move to baseline
            const yOffset = isHovered ? -120 : isOtherHovered ? 0 : -staggerOffset

            return (
              <motion.div
                key={index}
                className="group cursor-pointer flex-shrink-0"
                style={{
                  zIndex: zIndex,
                }}
                initial={{
                  transform: `perspective(5000px) rotateY(-45deg) translateY(200px)`,
                  opacity: 0,
                }}
                animate={{
                  transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.2, // Much faster hover animation
                  delay: index * 0.05, // Faster entrance stagger
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div
                  className="relative aspect-square w-72 md:w-80 lg:w-96 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
                  style={{
                    boxShadow: `
                      rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                      rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                      rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                      rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                    `,
                  }}
                >
                  {item.content}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile marquee layout */}
      <div className="block md:hidden relative pb-8 mt-12 overflow-hidden w-full">
        <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              className="flex gap-4 w-max pr-4"
              whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
            >
              {[...items, ...items, ...items, ...items].map((item, i) => (
                  <div key={i} className="w-[85vw] aspect-square flex-shrink-0">
                      {item.content}
                  </div>
              ))}
            </motion.div>
        </div>
      </div>
    </div>
  )
}
