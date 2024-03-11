import { useEffect, useState } from "react";

export default function PageSpotlight() {
  const [style, setStyle] = useState("");

  // 67 56 202
  // 79 70 229

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (clientX && clientY) {
        setStyle(
          `radial-gradient(500px at ${clientX}px ${clientY}px, rgba(67 ,56 ,202, 0.2), transparent 80%)`,
        );
      } else {
        setStyle("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 h-screen w-screen transition duration-300"
      style={{
        background: style,
      }}
    ></div>
  );
}
