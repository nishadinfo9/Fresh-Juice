import React from "react";
import { motion } from "framer-motion";

const FloatingElements = () => {
  const fruits = [
    {
      emoji: "🍓",
      size: "text-4xl",
      delay: 0,
      duration: 4,
      x: "10%",
      y: "20%",
    },
    {
      emoji: "🍋",
      size: "text-5xl",
      delay: 0.5,
      duration: 5,
      x: "80%",
      y: "15%",
    },
    {
      emoji: "🥝",
      size: "text-3xl",
      delay: 1,
      duration: 4.5,
      x: "15%",
      y: "70%",
    },
    {
      emoji: "🍌",
      size: "text-4xl",
      delay: 1.5,
      duration: 5.5,
      x: "85%",
      y: "65%",
    },
    {
      emoji: "🍉",
      size: "text-6xl",
      delay: 2,
      duration: 6,
      x: "50%",
      y: "10%",
    },
    {
      emoji: "🥕",
      size: "text-3xl",
      delay: 2.5,
      duration: 4,
      x: "90%",
      y: "40%",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fruits.map((fruit, index) => (
        <motion.div
          key={index}
          className={`absolute ${fruit.size} opacity-20`}
          style={{ left: fruit.x, top: fruit.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: fruit.duration,
            delay: fruit.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {fruit.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
