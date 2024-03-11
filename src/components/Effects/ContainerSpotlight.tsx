import React, { useEffect, useRef } from "react";

export default function ContainerSpotlight({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children);
    const mouse = { x: 0, y: 0 };
    const containerSize = { w: 0, h: 0 };

    const initContainer = () => {
      containerSize.w = container.offsetWidth;
      containerSize.h = container.offsetHeight;
    };

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();
      const { w, h } = containerSize;
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.x = x;
        mouse.y = y;
        cards.forEach((card: Element) => {
          const cardX =
            -(card.getBoundingClientRect().left - rect.left) + mouse.x;
          const cardY =
            -(card.getBoundingClientRect().top - rect.top) + mouse.y;
          const htmlCard = card as HTMLElement;
          htmlCard.style.setProperty("--mouse-x", `${cardX}px`);
          htmlCard.style.setProperty("--mouse-y", `${cardY}px`);
        });
      }
    };

    initContainer();
    window.addEventListener("resize", initContainer);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", initContainer);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} {...props}>
      {children}
    </div>
  );
}
