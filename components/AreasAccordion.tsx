"use client";

import { useEffect, useRef, useState } from "react";

export type Area = {
  title: string;
  text: string;
  details: string;
};

export default function AreasAccordion({ areas }: { areas: Area[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean[]>(() => areas.map(() => false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index === -1) return;
          setVisible((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="areas-grid">
      {areas.map((area, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={area.title}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`area-card reveal ${visible[index] ? "reveal-visible" : ""} ${isOpen ? "area-card-open" : ""}`}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onClick={() => toggle(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(index);
              }
            }}
          >
            <div className="area-card-head">
              <h3>{area.title}</h3>
              <span className="area-card-toggle" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </div>
            <p>{area.text}</p>
            {isOpen && <p className="area-card-details">{area.details}</p>}
          </div>
        );
      })}
    </div>
  );
}
