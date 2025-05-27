const HeadingOverlay = ({backgroundText,redText,blackText,}:{backgroundText: string;redText: string;blackText: string;}) => {
    return (
      <div className="relative w-full text-center py-10">
        <div className="text-stroke-sm lg:text-stroke font-monument-extended font-ultrabold text-[2.0625rem] md:text-7xl lg:text-9xl tracking-widest text-[#D3D3D3]">
          {backgroundText}
        </div>
        <div className="absolute flex justify-center items-center font-monument-extended font-ultrabold text-lg md:text-4xl lg:text-6xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
          <div className="text-[#FF0000]">{redText}</div>
          <div className="text-[#000000]">{blackText}</div>
        </div>
      </div>
    );
  };
  
  export default HeadingOverlay;
  