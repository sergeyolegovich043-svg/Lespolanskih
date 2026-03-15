"use client";

import { useEffect, useState } from "react";

export default function GrainOverlay() {
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeed((prev) => (prev + 1) % 100);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grain" aria-hidden="true">
      <svg width="100%" height="100%">
        <filter id={`grain-filter-${seed}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            seed={seed}
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter={`url(#grain-filter-${seed})`}
        />
      </svg>
    </div>
  );
}
