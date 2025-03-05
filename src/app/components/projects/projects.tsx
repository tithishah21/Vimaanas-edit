import ExploreProjectsButton from "../buttons/ExploreProjectsButton";
import AnimationCard from "../LandingPage/components/projectsanimation";

export const Projects = () => {
    return (
      <section id="projects" className="relative w-full rounded-t-2xl bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 py-20">

        {/* Heading Section */}
        <div className="relative w-[104vw] lg:w-full flex justify-center items-center z-20 mb-10">
          <div className="text-stroke font-monument-extended font-ultrabold text-4xl md:text-7xl lg:text-9xl tracking-widest">
            S PROJECTS P
          </div>
          <div className="absolute font-monument-extended font-ultrabold text-lg md:text-4xl lg:text-6xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="text-[#FF0000]">PROJECTS</div>
          </div>
        </div>

        {/* Animation Box */}
        <div className="relative flex flex-col items-center justify-center w-[1290px] h-[830px] 
                rounded-2xl border-4 border-transparent bg-bg shadow-lg text-center p-6 
                before:content-[''] before:absolute before:inset-0 before:-z-10 
                before:blur-[30px] before:bg-[#FF0000]/40 before:rounded-2xl">
          <AnimationCard
            imageSrc="/assets/ui components/BG-101.png" // Using BG101 image
            altText="BG - 101 2024-2025"
            containerHeight="710px"
            containerWidth="300px"
            imageHeight="710px"
            imageWidth="1290px"
            rotateAmplitude={12}
            scaleOnHover={0.9}
            showMobileWarning={false}
            />

          <br/><div className="font-monument-extended font-ultrabold text-[#FF0000] text-5xl">BG-101</div>
          <div className="font-monument-extended font-ultrabold text-2xl">2024-2025</div><br/>
        </div>

        {/* Explore Projects Button */}
        <ExploreProjectsButton
          size="auto"
          className="font-monument-extended font-ultrabold mt-[3%]"
          onClick={() => console.log("Explore Projects Clicked")}
        />
      </section>
    );
};
