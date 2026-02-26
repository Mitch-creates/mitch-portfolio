import { motion, animate as globalAnimate } from "framer-motion";
import { useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const INTRO_SPEED_MULTIPLIER = 2;
const TIMINGS_MS = {
  initialDelay: 100,
  flipIn: 200,
  hold: 100,
  flipOut: 100,
  loaderFade: 100,
  pageReveal: 200,
  headerReveal: 100,
};

const scaledMs = (ms: number) => ms * INTRO_SPEED_MULTIPLIER;
const scaledSeconds = (ms: number) => scaledMs(ms) / 1000;

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  useEffect(() => {
    let isCancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const delay = (ms: number) =>
      new Promise<void>((resolve) => {
        const timeoutId = setTimeout(resolve, ms);
        timeouts.push(timeoutId);
      });

    const sequence = async () => {
      await delay(scaledMs(TIMINGS_MS.initialDelay));
      if (isCancelled) return;

      // Stage 1: Logo flip in
      const flipIn = globalAnimate(
        ".logo",
        { rotateY: 0, opacity: 1 },
        {
          duration: scaledSeconds(TIMINGS_MS.flipIn),
          ease: "easeOut",
          type: "tween",
        },
      );
      await flipIn;
      if (isCancelled) {
        flipIn.stop();
        return;
      }

      // Stage 2: Logo stays visible for a moment
      await delay(scaledMs(TIMINGS_MS.hold));
      if (isCancelled) return;

      // Stage 3: Logo fades out
      const fadeOutLogo = globalAnimate(
        ".logo",
        { rotateY: -90, opacity: 0 },
        {
          duration: scaledSeconds(TIMINGS_MS.flipOut),
          ease: "easeOut",
          type: "tween",
        },
      );
      await fadeOutLogo;
      if (isCancelled) {
        fadeOutLogo.stop();
        return;
      }

      // Stage 4: Hide the loading screen
      const fadeOutLoader = globalAnimate(
        ".loading-container",
        { opacity: 0 },
        { duration: scaledSeconds(TIMINGS_MS.loaderFade), type: "tween" },
      );
      await fadeOutLoader;
      if (isCancelled) {
        fadeOutLoader.stop();
        return;
      }

      const revealPage = globalAnimate(
        ".reveal-page",
        { opacity: 1 },
        {
          duration: scaledSeconds(TIMINGS_MS.pageReveal),
          ease: "easeIn",
          type: "tween",
        },
      );
      await revealPage;
      if (isCancelled) {
        revealPage.stop();
        return;
      }

      const revealHeader = globalAnimate(
        "[data-animate='reveal-1']",
        { opacity: 1, rotateY: 0 },
        {
          duration: scaledSeconds(TIMINGS_MS.headerReveal),
          ease: "easeIn",
          type: "tween",
        },
      );
      await revealHeader;
      if (isCancelled) {
        revealHeader.stop();
        return;
      }

      // Complete the loading
      onComplete();
    };

    sequence();
    return () => {
      isCancelled = true;
      timeouts.forEach(clearTimeout);
    };
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
