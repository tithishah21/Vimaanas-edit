'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const animatedWords = ['', 'ACHIEVE', 'PROWESS', 'EXCEL', 'TRIUMPH', 'DELIVER*'];

export default function AboutTeamPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (currentWordIndex < animatedWords.length - 1) {
      const interval = setInterval(() => {
        setCurrentWordIndex((prev) => prev + 1);
      }, 1000); // 1 second per word
      return () => clearInterval(interval);
    }
  }, [currentWordIndex]);

  return (
    <section
      id="aboutteampage"
      className="h-[300px] lg:h-[580px] w-full relative bg-bg text-white overflow-hidden flex flex-col justify-center px-6"
    >
      <div className="text-left">
        {/* DREAM */}
        <motion.h1
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white font-monument-extended font-extrabold tracking-wide leading-[1] text-[11vw] md:text-[9vw] lg:text-[10vw]"
        >
          DREAM
        </motion.h1>

        {/* DESIGN */}
        <motion.h1
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="text-white font-monument-extended font-extrabold tracking-wide leading-[1] text-[11vw] md:text-[9vw] lg:text-[10vw]"
        >
          DESIGN
        </motion.h1>

        {/* Changing Word */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={animatedWords[currentWordIndex]}
            initial={{ opacity: 0, y: 1 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -1 }}
            transition={{ duration: 0.2 }}
            className="text-white font-monument-extended font-extrabold tracking-wide leading-[1] text-[11vw] md:text-[9vw] lg:text-[10vw]"
          >
            {animatedWords[currentWordIndex]}
          </motion.h1>
        </AnimatePresence>

        {/* Red Subtext */}
        <motion.h4
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 5.6 }}
          className="text-[#FF0000] font-monument-extended font-extrabold tracking-widest leading-[1] text-[1.5vw] md:text-[1.7vw] lg:text-[1.6vw]"
        >
          * We dream of flight, design with might, and deliver sky-high delight !
        </motion.h4>
      </div>
    </section>
  );
}
