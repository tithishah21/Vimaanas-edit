import Plane from "@/app/components/LandingPage/components/plane";
import Image from "next/image";

export default function LeadershipSection() {
  const leaders = [
    {
      image: "/assets/captain.svg",
      title: "CAPTAIN",
      name: "C S S SHAURI",
      titleColor: "text-[#FF0000]",
      nameColor: "text-[#000000]",
    },
    {
      image: "/assets/vicecaptain.svg",
      title: "VICE CAPTAIN",
      name: "VAIBHAV DAVE",
      titleColor: "text-[#FF0000]",
      nameColor: "text-[#000000]",
    },
    {
      image: "/assets/manager.svg",
      title: "MANAGEMENT HEAD",
      name: "DONA MAXIN",
      titleColor: "text-[#FF0000]",
      nameColor: "text-[#000000]",
    },
  ];

  return (
    <section
      id="leadership"
      className="relative w-full bg-[#FFFFFF] text-white flex flex-col items-center justify-center overflow-hidden z-20 pt-[5vw] pb-[10vw]"
    >
      {/* Header Section */}
      <div className="relative w-full flex justify-center items-center z-20 mb-[3vw]">
        <div className="absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2 rotate-[85deg] blur-[2px] z-0">
          <Plane />
        </div>
        <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[8.4vw] md:text-[6vw] lg:text-[9.5vw] tracking-widest">
          OUR PATRONS
        </div>
        <div className="absolute flex font-monument-extended font-ultrabold text-[3vw] md:text-[2vw] lg:text-[3vw] tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-[1vw] z-30">
          <div className="text-[#000000]">THE</div>
          <div className="text-[#FF0000]">LEADERSHIP</div>
        </div>
      </div>

      {/* Leadership Cards */}
      <div className="w-full max-w-7xl mx-auto px-[3vw]">
        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-[3vw] lg:items-center">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-[1/1] mb-[1.5vw] rounded-2xl overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <div
                  className={`${leader.titleColor} font-monument-extended font-ultrabold text-[1.8vw] tracking-wider`}
                >
                  {leader.title}
                </div>
                <div
                  className={`${leader.nameColor} font-monument-extended font-ultrabold text-[1.4vw] tracking-wider`}
                >
                  {leader.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col space-y-[1vw]">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-[1/1] mb-[0.5vw] rounded-3xl overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <div
                  className={`${leader.titleColor} font-monument-extended font-ultrabold text-[4vw] tracking-wider`}
                >
                  {leader.title}
                </div>
                <div
                  className={`${leader.nameColor} font-monument-extended font-ultrabold text-[3.5vw] tracking-wider`}
                >
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
