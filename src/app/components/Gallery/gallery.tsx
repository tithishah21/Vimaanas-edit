import ConnectButton from "../buttons/ConnectButton";
import CircularGallery from "./CircularGallery";

export const Gallery = () => {
  const images = [
    { image: "assets/team/Dharrsan%20Amarnath%20-%20Team%20Mentor.jpeg",text:"Team Mentor " },
    { image: "assets/team/Krishna%20Arbatti%20-%20Design%20Head.jpeg",text:"Design Head" },
    { image: "assets/team/Mukund Bharadwaj L - Team Vice Captain.jpeg",text:"Team Vice Captain" },
    { image: "assets/team/Parth Jadhav - Assembly Head.jpeg",text:"Assembly Head" },
    { image: "assets/team/Priyank Dasondi - Team Captain.jpeg",text:"Team Captain" },
    { image: "assets/team/Rajdeep Roy - Avionics Head.jpeg",text:"Avionics Head" },
    { image: "assets/team/Siddhant Gupta - Team Manager.jpeg",text:"Team Manager" },
  ];
  
    return (
      <>
      <div id="gallery" className="relative w-full lg:w-full flex justify-center items-center z-20 ">
   

    <div className="text-stroke font-monument-extended font-ultrabold text-3xl md:text-6xl lg:text-9xl tracking-wider">
      RY GALLERY GA
    </div>

    <div className="absolute flex font-monument-extended font-ultrabold text-lg md:text-4xl lg:text-6xl tracking-widest top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 z-30">
      <div className="text-[#FF0000]">GALLERY</div>
      
    </div>
    
  </div>
  <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery items={images} bend={0} textColor="#ffffff" borderRadius={0.05} />
</div>

  <div className="flex w-full justify-center">
   <ConnectButton
            size="auto"
            className="font-monument-extended font-ultrabold mt-[5vw] md:mt-[4vw] lg:mt-[0vw]"
            onClick={() => console.log("Contact Us Clicked")}
            text="Explore Gallery"
          />
          </div>
    </>
    );
  };