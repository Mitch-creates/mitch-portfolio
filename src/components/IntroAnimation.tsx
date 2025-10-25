import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = async () => {
      // Stage 1: Logo flip in
      await animate(
        ".logo",
        { rotateY: 0, opacity: 1 },
        { duration: 0.6, ease: "easeOut" }
      );

      // Stage 2: Logo stays visible for a moment
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Stage 3: Logo fades out
      await animate(
        ".logo",
        { rotateY: -90, opacity: 0 },
        { duration: 0.5, ease: "easeOut" }
      );

      // Stage 4: Hide the loading screen
      await animate(".loading-container", { opacity: 0 }, { duration: 0.3 });

      // Complete the loading
      onComplete();
    };

    sequence();
  }, [animate, onComplete]);
  return (
    <div ref={scope}>
      <motion.div
        className="loading-container fixed inset-0 bg-slate-50 z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
      >
        <motion.div
          className="logo"
          initial={{
            rotateY: 90,
            scale: 2,
            opacity: 0,
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            className="w-16 h-16"
            src="/images/M.svg"
            alt="Mitch Creates Logo"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
