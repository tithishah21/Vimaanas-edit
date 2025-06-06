import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StandardWobbleCard } from "../About Team/wobblecard";
import UturnArrow from "../LandingPage/components/uturn_arrow";
import Plane from "../LandingPage/components/plane";
import ZigZagArrow from "../LandingPage/components/zigziag_arrow";
import ExploreAboutTeamButton from "../buttons/ExploreAboutTeamButton";
import HeadingOverlay from '../About Team/heading_overlay';

export const Achievements = () => {
  const handleExploreClick = () => {
    toast.info('Coming Soon', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark', 
    });
  };

  return (
    <div id="achievements">
      <HeadingOverlay 
      backgroundText='ACHIEVEMENTS'
      redText='ACHIEVEMENTS'
      blackText=''
      />
      <div className="lg:flex w-full justify-center gap-28 mt-10 lg:mt-20 relative z-20 md:ml-20 lg:ml-0">
        <div className="absolute left-[2.3vw] lg:left-[2vw] top-[0.5%] lg:top-[0%] rotate-[265deg] lg:rotate-[250deg] filter grayscale brightness-[0.42] contrast-[1.2] z-50">
          <UturnArrow />
        </div>
        <div className="absolute left-[45vw] top-[45%] lg:top-[47%] rotate-[120deg] lg:rotate-[360deg] filter grayscale brightness-0 z-50">
          <ZigZagArrow />
        </div>
        <div className="absolute lg:blur-sm bottom-[125vw] md:bottom-[99vw] lg:bottom-[24vw] left-[85%] md:left-[83%] lg:left-[90%]  rotate-[344deg] lg:rotate-[350deg] opacity-90 z-10">
          <Plane />
        </div>
        <div className="relative h-auto lg:h-[30vw] w-[90vw] lg:w-[40vw] ml-5 sm:ml-0">
          <div className="absolute inset-0  md:rounded-3xl blur-xl opacity-60" style={{ backgroundColor: '#ff9999' }}></div>
          <div className="rounded-none md:rounded-3xl">
            <StandardWobbleCard
              title="1st Place"
              subtitle="Overall"
              message={
                <>
                  Aero Dominator <br /> <br />
                  1st place overall in the Micro Class RC Aircrafts Category.
                </>
              }
            />
          </div>
        </div>
        <div className="relative h-auto lg:h-[30vw] w-[90vw] lg:w-[40vw] ml-5 mt-6 sm:mt-0 sm:ml-0">
          <div className="absolute inset-0 blur-xl opacity-60" style={{ backgroundColor: '#ff9999' }}></div>
          <StandardWobbleCard
            title="13th Place"
            subtitle="Overall"
            message={
              <>
                SAE International <br /> <br />
                13th Place Overall in the Micro Class RC Aircrafts Category.
              </>
            }
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <ExploreAboutTeamButton
          size="auto"
          className="font-monument-extended font-ultrabold mt-[5vw] md:mt-[4vw] lg:mt-[4vw]"
          onClick={handleExploreClick} // Use the new handler here
          text="  Explore Achievements"
        />
      </div>
      <ToastContainer />
    </div>
  );
};