import UturnArrow from "../LandingPage/components/uturn_arrow";
import Plane from "../LandingPage/components/plane";
import ZigZagArrow from "../LandingPage/components/zigziag_arrow";
import ExploreAboutTeamButton from "../buttons/ExploreAboutTeamButton";
import { StandardWobbleCard } from "./wobblecard";

export const AboutTeam = () => {
    return (
      <section
  id="about"
  className="relative w-full rounded-t-2xl bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 py-20">
  <div className="absolute left-[2vw] top-[14%] lg:top-[32%] rotate-[265deg] lg:rotate-[250deg] filter grayscale brightness-[0.42] contrast-[1.2] z-50">
    <UturnArrow />
  </div>


  <div className="absolute left-[45vw] top-[52%] lg:top-[62%] rotate-[120deg] lg:rotate-[360deg] filter grayscale brightness-0 z-50">
    <ZigZagArrow />
  </div>


  <div className="relative w-full lg:w-full flex justify-center items-center z-20 ">
    <div className="absolute top-[70%] left-[33%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
      <Plane />
    </div>

    <div className="text-stroke font-monument-extended font-ultrabold text-[2.0625rem] md:text-7xl lg:text-9xl tracking-widest">
      WHO ARE WE?
    </div>

    <div className="absolute flex font-monument-extended font-ultrabold text-lg md:text-4xl lg:text-6xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
      <div className="text-[#FF0000]">ABOUT</div>
      <div className="text-[#000000]">TEAM</div>
    </div>
  </div>


  <div className="lg:flex w-full justify-center gap-28 mt-10 lg:mt-20 relative z-20 md:ml-20 lg:ml-0">
 
  

  <div className="relative h-auto lg:h-[30vw] w-[90vw] lg:w-[40vw] ml-5 sm:ml-0">
<div className="absolute inset-0 bg-pink-500 rounded-3xl blur-lg opacity-50"></div>
<StandardWobbleCard
        title="WHO ARE"
        subtitle="WE?"
        message="Team Vimaanas is a passionate and innovative microclass RC plane team driven by a shared love for aeronautics, engineering, and the spirit of competition. We are a diverse group of thinkers, deisgners, and builderswho push the boundaries of flight and technology."
      />
</div>


<div className="relative h-auto lg:h-[30vw] w-[90vw] lg:w-[40vw] ml-5 sm:ml-0 mt-4 sm:mt-0">
<div className="absolute inset-0 bg-pink-500 rounded-3xl blur-lg opacity-50"></div>

      
      <StandardWobbleCard
        title="OUR"
        subtitle="MISSION"
        message="To design, innovate, and excel in the field of microclass RC aviation, while fostering a culture of collaboration, creativity, and excellence.We aim to inspire future generations by showcasing the potential of engineering and teamwork in competitive settings."
      />
</div>


    <div className="absolute bottom-[210vw] md:bottom-[99vw] lg:bottom-[24vw] left-[80%] md:left-[83%] lg:left-[90%]  rotate-[344deg] lg:rotate-[350deg] opacity-90 z-10">
      <Plane />
    </div>
    
    
  </div>
  <ExploreAboutTeamButton
      size="auto"
      className="font-monument-extended font-ultrabold mt-[5vw] md:mt-[4vw] lg:mt-[5vw]"
      onClick={() => console.log("Explore About Team Clicked")}
    />
</section>


    );
  };



