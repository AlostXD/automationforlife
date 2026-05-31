"use client";

import type { ReactNode } from "react";
import { useState } from "react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, isActive: boolean, isHovered?: boolean) => ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
}

export default function Carousel<T>({ items, renderItem, keyExtractor }: CarouselProps<T>) {
  const len = items.length;
  const [index, setIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (len === 0) return null;

  const getOffset = (itemIndex: number) => {
    let offset = itemIndex - index;

    if (offset > len / 2) offset -= len;
    if (offset < -len / 2) offset += len;

    return offset;
  };

  const getMotionScale = (offset: number) => {
    const distance = Math.abs(offset);
    return Math.max(0.88, 1 - distance * 0.04);
  };

  return (
    <div className="relative w-full py-6 sm:py-8">
      <div className="relative mx-auto min-h-88 w-full max-w-6xl px-14 sm:px-20">
        {items.map((item, itemIndex) => {
          const offset = getOffset(itemIndex);
          const distance = Math.abs(offset);
          const isCenter = offset === 0;
          const isHovered = hoveredIndex === itemIndex;
          const scale = getMotionScale(offset);
          const opacity = Math.max(0.28, 1 - distance * 0.24);
          const xShift = offset * 10;
          const yShift = isCenter ? -14 : 34 + distance * 10;
          const zIndex = 30 - distance;

          return (
            <div
              key={keyExtractor ? keyExtractor(item, itemIndex) : itemIndex}
              className="absolute bottom-0 left-1/2 w-[72vw] max-w-72 sm:w-72 md:w-80 cursor-pointer transition-[transform,opacity,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(calc(-50% + ${xShift}rem)) translateY(${yShift}px) scale(${scale})`,
                opacity,
                zIndex,
                boxShadow: isCenter || isHovered
                  ? "0 18px 40px rgba(0, 0, 0, 0.22)"
                  : "0 10px 24px rgba(0, 0, 0, 0.16)",
              }}
              onMouseEnter={() => setHoveredIndex(itemIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(itemIndex)}
              onTouchEnd={() => setHoveredIndex(null)}
            >
              {renderItem(item, isCenter || isHovered, isHovered)}
            </div>
          );
        })}
      </div>

      <button
        aria-label="Anterior"
        onClick={() => setIndex((s) => (s - 1 + len) % len)}
        className="absolute left-0 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/10 bg-zinc-900/90 p-2 text-white shadow-lg transition cursor-pointer hover:bg-zinc-800 hover:scale-110 hover:shadow-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        aria-label="Próximo"
        onClick={() => setIndex((s) => (s + 1) % len)}
        className="absolute right-0 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/10 bg-zinc-900/90 p-2 text-white shadow-lg transition cursor-pointer hover:bg-zinc-800 hover:scale-110 hover:shadow-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
