'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import WhoAreWeSection from './who-are-we/page';
import AimSection from './aim/page';
import ArchiveSection from './archive/page';
import LeadershipSection from './leadership/page';
import PartnersSection from './partners/page';
import FooterSection from './footer/page';

const animatedWords = ['', 'ACHIEVE*', 'PROWESS*', 'EXCEL*', 'TRIUMPH*', 'DELIVER*'];

export default function AboutTeamPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (currentWordIndex < animatedWords.length - 1) {
      const interval = setInterval(() => {
        setCurrentWordIndex((prev) => prev + 1);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [currentWordIndex]);

  return (
    <div className="w-full overflow-x-hidden bg-bg text-white">
      {/* HERO SECTION */}
      <section
        id="aboutteampage"
        className="h-[35vh] lg:h-[80vh] w-full relative bg-bg text-white overflow-hidden flex justify-center px-[3vw] pt-[5vh]"
      >
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white font-monument-extended font-extrabold tracking-wide leading-[1] text-[11vw] md:text-[9vw] lg:text-[10vw]"
          >
            DREAM
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="text-white font-monument-extended font-extrabold tracking-wide leading-[1] text-[11vw] md:text-[9vw] lg:text-[10vw]"
          >
            DESIGN
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.h1
              key={animatedWords[currentWordIndex]}
              initial={{ opacity: 0, y: 1 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -1 }}
              transition={{ duration: 0.2 }}
              className="font-monument-extended font-extrabold tracking-wide leading-[1] text-[11vw] md:text-[9vw] lg:text-[10vw]"
            >
              {animatedWords[currentWordIndex].includes('*') ? (
                <>
                  <span className="text-white">
                    {animatedWords[currentWordIndex].split('*')[0]}
                  </span>
                  <span className="text-red">*</span>
                </>
              ) : (
                <span className="text-white">{animatedWords[currentWordIndex]}</span>
              )}
            </motion.h1>
          </AnimatePresence>

          <motion.h4
            initial={{ opacity: 0, y: 1 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 5.0 }}
            className="text-[#FF0000] font-monument-extended font-extrabold tracking-widest leading-[1.2] text-[2.5vw] md:text-[1.8vw] lg:text-[1.6vw] mt-[1vh]"
          >
            * We dream of flight, design with might, and deliver sky-high delight !
          </motion.h4>
        </div>
      </section>

      {/* SUBSECTIONS */}
      <WhoAreWeSection />
      <AimSection />
      <ArchiveSection />
      <LeadershipSection />
      <PartnersSection />
      <FooterSection />
    </div>
  );
}
