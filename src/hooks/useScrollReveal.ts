import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scroll-triggered reveal: fades + translates every `[data-reveal]`
 * descendant upward, staggered in DOM order. Elements are visible by
 * default, so reduced-motion users (and any JS hiccup) still see content.
 */
export function useSectionReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const targets = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!targets.length) return;

    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: isMobile ? 14 : 30 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.5 : 0.85,
        ease: "power3.out",
        stagger: isMobile ? 0.05 : 0.09,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/** Subtle vertical parallax (a handful of px, not a dramatic slide). */
export function useParallax<T extends HTMLElement = HTMLElement>(distance = 60) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -distance / 2 },
        {
          y: distance / 2,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [distance]);

  return ref;
}
