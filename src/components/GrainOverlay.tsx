/**
 * Pure-CSS grain overlay.
 * No JS, no React re-renders, no SVG filter recalculation.
 * Uses a static inline SVG data-URI as a repeating noise texture
 * combined with a CSS animation that shifts its position.
 */
export default function GrainOverlay() {
  return (
    <div className="grain-css" aria-hidden="true" />
  );
}
