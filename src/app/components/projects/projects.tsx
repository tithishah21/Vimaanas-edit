import ExploreProjectsButton from "../buttons/ExploreProjectsButton";
import Marquee from "react-fast-marquee"; // Install using: npm install react-fast-marquee

export const Projects = () => {
    return (
      <section id="projects" className="relative w-full rounded-t-2xl bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 py-20">
        <div className="relative w-[104vw] lg:w-full flex justify-center items-center z-20 mb-1 overflow-hidden">

  <div className="whitespace-nowrap animate-marquee text-stroke font-monument-extended font-ultrabold text-4xl md:text-7xl lg:text-9xl tracking-tight opacity-50">
    PROJECTS &nbsp; PROJECTS  &nbsp; PROJECTS 
  </div>


  <div className="absolute font-monument-extended font-ultrabold text-lg md:text-4xl lg:text-6xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
    <div className="text-[#FF0000]">PROJECTS</div>
  </div>
</div>



        <div className="relative max-w-full h-[450px] overflow-hidden flex justify-center items-center">
          <Marquee speed={100} gradient={false}>
            <img src="/assets/ui components/BG-101.png" alt="BG-101" className="w-[700px] h-[400px] mx-7 rounded-2xl shadow-lg" />
            <img src="/assets/ui components/BG-101.png" alt="BG-101" className="w-[700px] h-[400px] mx-7 rounded-2xl shadow-lg" />
            <img src="/assets/ui components/BG-101.png" alt="BG-101" className="w-[700px] h-[400px] mx-7 rounded-2xl shadow-lg" />
            <img src="/assets/ui components/BG-101.png" alt="BG-101" className="w-[700px] h-[400px] mx-7 rounded-2xl shadow-lg" />
            
          </Marquee>
        </div>

        {/* Stagnant Text */}
        <div className="text-center mt-2">
          <div className="font-monument-extended font-ultrabold text-[#FF0000] text-5xl">BG-101</div>
          <div className="font-monument-extended font-ultrabold text-black text-2xl">2024-2025</div>
        </div>

        {/* Explore Projects Button */}
        <ExploreProjectsButton
          size="auto"
          className="font-monument-extended font-ultrabold mt-[2%]"
          onClick={() => console.log("Explore Projects Clicked")}
        />
      </section>
    );
};

export default Projects;
