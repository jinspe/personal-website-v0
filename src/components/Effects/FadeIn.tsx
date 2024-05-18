"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const DURATION_ANIMATION = 0.6;

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -100px" };
const viewportOnce = { once: true };

export function FadeIn({
  side = "up",
  viewportAlt,
  ...props
}: {
  side?: "up" | "down";
  viewportAlt?: "once";
  [key: string]: any; // This allows for additional props
}) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  const y = side === "up" ? 44 : -44;

  return (
    <motion.div
      /* initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : y,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }} */
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {
          opacity: 0,
          y: shouldReduceMotion ? 0 : y,
        },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: DURATION_ANIMATION }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: viewportAlt === "once" ? viewportOnce : viewport,
          })}
      {...props}
    />
  );
}

export function FadeSide({
  side = "right",
  ...props
}: {
  side?: "left" | "right";
  [key: string]: any; // This allows for additional props
}) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);
  const x = side === "left" ? -44 : 44;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: shouldReduceMotion ? 0 : x,
        },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: DURATION_ANIMATION }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({ faster = false, ...props }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
