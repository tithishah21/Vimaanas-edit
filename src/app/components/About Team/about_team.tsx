import UturnArrow from "../LandingPage/components/uturn_arrow";
import Plane from "../LandingPage/components/plane";
import ZigZagArrow from "../LandingPage/components/zigziag_arrow";
import ExploreAboutTeamButton from "../buttons/ExploreAboutTeamButton";

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


  <div className="relative w-[104vw] lg:w-full flex justify-center items-center z-20 ">
    <div className="absolute top-[70%] left-[33%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
      <Plane />
    </div>

    <div className="text-stroke font-monument-extended font-ultrabold text-4xl md:text-7xl lg:text-9xl tracking-widest">
      WHO ARE WE?
    </div>

    <div className="absolute flex font-monument-extended font-ultrabold text-lg md:text-4xl lg:text-6xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
      <div className="text-[#FF0000]">ABOUT</div>
      <div className="text-[#000000]">TEAM</div>
    </div>
  </div>


  <div className="lg:flex w-screen justify-center gap-28 mt-10 lg:mt-20 relative z-20 ml-10 md:ml-20 lg:ml-0">
 
    <div className="relative h-auto lg:h-[30vw] w-[90vw] lg:w-[40vw] bg-[#F5F5F5] rounded-3xl border-4 border-[#F5F5F5] flex flex-col justify-center items-center text-center p-6 
      before:content-[''] before:absolute before:inset-0 before:-z-10 before:blur-[30px] before:bg-[#FF0000]/20">
      <div className="text-[#000000] font-monument-extended font-ultrabold text-3xl md:text-4xl lg:text-5xl mt-3">
        WHO ARE
      </div>
      <div className="text-[#FD0000] font-monument-extended font-ultrabold text-3xl md:text-4xl lg:text-5xl mb-5">
        WE?
      </div>
      <div className="text-[#3F3F3F] font-ultrabold tracking-wider text-lg lg:text-xl leading-tight">
        Team Vimaanas is a<br />
        passionate and innovative<br />
        microclass RC plane team<br />
        driven by a shared love for<br />
        aeronautics, engineering,<br />
        and the spirit of competition.<br />
        We are a diverse group of<br />
        thinkers, designers, and<br />
        builders who push the<br />
        boundaries of flight and<br />
        technology.
      </div>
    </div>

  <div className="relative h-auto lg:h-[30vw] w-[90vw] lg:w-[40vw] bg-[#F5F5F5] rounded-3xl border-4 border-[#F5F5F5] flex flex-col justify-center items-center text-center mt-10 md:mt-12 lg:mt-0 p-6 
      before:content-[''] before:absolute before:inset-0 before:-z-10 before:blur-[30px] before:bg-[#FF0000]/20">
    <div className="text-[#FD0000] font-monument-extended font-ultrabold text-3xl md:text-4xl lg:text-5xl pt-5 lg:pt-0">
      OUR
    </div>
    <div className="text-[#000000] font-monument-extended font-ultrabold text-3xl md:text-4xl lg:text-5xl mb-7">
      MISSION
    </div>
    <div className="text-[#3F3F3F] font-ultrabold tracking-wider text-lg lg:text-xl leading-tight">
      To design, innovate, and<br />
      excel in the field of<br />
      microclass RC aviation, while<br />
      fostering a culture of<br />
      collaboration, creativity, and<br />
      excellence. We aim to inspire<br />
      future generations by<br />
      showcasing the potential of<br />
      engineering and teamwork in<br />
      competitive settings.
    </div>
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