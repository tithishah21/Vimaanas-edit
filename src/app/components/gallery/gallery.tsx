
export const Gallery = () => {
    return (
      <section id="gallery" className="h-screen w-full rounded-t-2xl relative bg-[#FFFFFF] text-white overflow-hidden flex flex-col items-center justify-center">
        <div className="relative w-fit">
          <div className="text-stroke relative font-monument-extended font-ultrabold text-9xl tracking-widest">
            WHO ARE WE?
          </div>
          <div className="absolute flex font-monument-extended font-ultrabold text-6xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-5">
            <div className="text-[#FF0000] ">ABOUT</div> 
            <div className="text-[#000000]">TEAM</div>
          </div>
        </div>
        <div className="flex h-[30vw] w-screen justify-center gap-28 mt-20">
          <div className="h-[30vw] w-[40vw] bg-[#F5F5F5] rounded-3xl border-4 border-[#F5F5F5] flex flex-col justify-center align-middle text-center">
            <div className="text-[#000000] font-monument-extended font-ultrabold text-5xl mt-3">WHO ARE</div>
            <div className="text-[#FD0000] font-monument-extended font-ultrabold text-5xl mb-5">WE?</div>
            <div className="text-[#3F3F3F] font-ultrabold tracking-wider text-xl leading-tight">
            Team Vimaanas is a<br/>
            passionate and innovative<br/>
            microclass RC plane team<br/>
            driven by a shared love for<br/>
            aeronautics, engineering,<br/>
            and the spirit of competition.<br/>
            We are a diverse group of<br/>
            thinkers, designers, and<br/>
            builders who push the<br/>
            boundaries of flight and<br/>
            technology.
            </div>
          </div>

          <div className="h-[30vw] w-[40vw] bg-[#F5F5F5] rounded-3xl border-4 border-[#F5F5F5] flex flex-col justify-center align-middle text-center">
            <div className="text-[#FD0000] font-monument-extended font-ultrabold text-5xl">OUR</div>
            <div className="text-[#000000] font-monument-extended font-ultrabold text-5xl mb-7">MISSION</div>
            <div className="text-[#3F3F3F] font-ultrabold tracking-wider text-xl leading-tight">
            To design, innovate, and<br/>
            excel in the field of<br/>
            microclass RC aviation, while<br/>
            fostering a culture of<br/>
            collaboration, creativity, and<br/>
            excellence. We aim to inspire<br/>
            future generations by<br/>
            showcasing the potential of<br/>
            engineering and teamwork in<br/>
            competitive settings.
            </div>
          </div>
        </div>
      </section>

    );
  };