import React, { useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from: from,
  to: from + 360,
  ease: "linear",
  duration: duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  // Memoized transition function to prevent unnecessary re-renders
  const getTransition = useCallback(
    (duration: number) => ({
      rotate: getRotationTransition(duration, currentRotation),
      scale: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    }),
    [currentRotation]
  );

  // Effect to start rotation animation
  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration),
    });
  }, [spinDuration, controls, onHover, text, currentRotation, getTransition]);

  // Handle hover effects
  const handleHoverStart = () => {
    if (!onHover) return;
    let newDuration = spinDuration;
    switch (onHover) {
      case "slowDown":
        newDuration *= 2;
        break;
      case "speedUp":
        newDuration /= 4;
        break;
      case "pause":
        controls.stop();
        return;
      case "goBonkers":
        newDuration /= 20;
        break;
      default:
        break;
    }
    controls.start({
      rotate: currentRotation + 360,
      scale: onHover === "goBonkers" ? 0.8 : 1,
      transition: getTransition(newDuration),
    });
  };

  // Handle hover end (resume normal speed)
  const handleHoverEnd = () => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration),
    });
  };

  return (
    <motion.div
      initial={{ rotate: 0 }}
      className={`mx-auto rounded-full w-[200px] h-[200px] text-white font-black text-center cursor-pointer origin-center ${className}`}
      animate={controls}
      onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotation = (360 / letters.length) * i;
        const factor = Number((Math.PI / letters.length).toFixed(0));
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
