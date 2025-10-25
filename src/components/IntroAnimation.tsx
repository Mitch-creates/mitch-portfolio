import { motion, animate as globalAnimate } from "framer-motion";
import { useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      // Stage 1: Logo flip in
      await globalAnimate(
        ".logo",
        { rotateY: 0, opacity: 1 },
        { duration: 0.6, ease: "easeOut" }
      );

      // Stage 2: Logo stays visible for a moment
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Stage 3: Logo fades out
      await globalAnimate(
        ".logo",
        { rotateY: -90, opacity: 0 },
        { duration: 0.5, ease: "easeOut" }
      );

      // Stage 4: Hide the loading screen
      await globalAnimate(
        ".loading-container",
        { opacity: 0 },
        { duration: 0.3 }
      );

      await globalAnimate(
        ".reveal-page",
        { opacity: 1 },
        { duration: 0.6, ease: "easeIn" }
      );

      await globalAnimate(
        "[data-animate='reveal-1']",
        { opacity: 1, rotateY: 0 },
        { duration: 0.6, ease: "easeIn" }
      );

      // Complete the loading
      onComplete();
    };

    sequence();
  }, [onComplete]);
  return (
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
  );
}
