import Plane from "@/app/components/LandingPage/components/plane";
import Image from "next/image";
import Captain from "./captain.svg";
import ViceCaptain from "./vicecaptain.svg";
import Manager from "./manager.svg";

export default function LeadershipSection() {
  const leaders = [
    {
      image: Captain,
      title: "CAPTAIN",
      name: "C S S SHAURI",
      titleColor: "text-[#FF0000]",
      nameColor: "text-[#000000]"
    },
    {
      image: ViceCaptain,
      title: "VICE CAPTAIN",
      name: "VAIBHAV DAVE",
      titleColor: "text-[#FF0000]",
      nameColor: "text-[#000000]"
    },
    {
      image: Manager,
      title: "MANAGEMENT HEAD",
      name: "DONA MAXIN",
      titleColor: "text-[#FF0000]",
      nameColor: "text-[#000000]"
    }
  ];

  return (
    <section
      id="leadership"
      className="relative w-full bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-10 pb-20"
    >
      {/* Header Section */}
      <div className="relative w-full lg:w-full flex justify-center items-center z-20 lg:mb-6">
        <div className="absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
          <Plane />
        </div>
        <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[2.28rem] md:text-6xl lg:text-[8.758rem] tracking-widest">
          OUR PATRONS
        </div>
        <div className="absolute flex font-monument-extended font-ultrabold text-md md:text-3xl lg:text-5xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
          <div className="text-[#000000]">THE</div>
          <div className="text-[#FF0000]">LEADERSHIP</div>
        </div>
      </div>

      {/* Leadership Cards */}
      <div className="w-full max-w-7xl mx-3 px-3">
        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-13 lg:items-center">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative lg:mb-3">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={800}
                  height={800}
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <div className={`${leader.titleColor} font-monument-extended font-ultrabold text-3xl tracking-wider`}>
                  {leader.title}
                </div>
                <div className={`${leader.nameColor} font-monument-extended font-ultrabold text-2xl tracking-wider`}>
                  {leader.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Single column stacked */}
        <div className="lg:hidden flex flex-col space-y-2">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-2">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={800}
                  height={800}
                  className="rounded-3xl object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <div className={`${leader.titleColor} font-monument-extended font-ultrabold text-lg tracking-wider`}>
                  {leader.title}
                </div>
                <div className={`${leader.nameColor} font-monument-extended font-ultrabold text-base tracking-wider`}>
                  {leader.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}