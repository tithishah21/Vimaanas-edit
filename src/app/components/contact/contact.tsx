import { FaInstagram, FaLinkedin, FaXTwitter, FaPhone, FaEnvelope } from "react-icons/fa6";

export const Contact = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 rounded-t-[4rem] mt-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-40">
        
        {/* Logo Section - Center on Mobile, Left on Desktop */}
        <div className="flex flex-col items-center md:items-center">
          <img src="/assets/logo.png" alt="VIMAANAS Logo" className="h-48 w-56" />
          <h2 className="text-5xl text-[#FD0000] font-monument-extended font-ultrabold mt-3">VIMAANAS</h2>
          <p className="font-monument-extended font-bold tracking-wide text-sm mt-2">
            Copyright © | All Rights Reserved
          </p>
        </div>

        {/* Content Grid - Centered on Mobile, Left-Aligned on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-monument-extended font-ultrabold tracking-widest w-full items-center md:items-start text-center md:text-left">
          
          {/* Company & Address */}
          <div className="space-y-10">
            <div>
              <h3 className="text-[#FD0000] text-2xl font-bold">Company</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="#">About Team</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Achievements</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#FD0000] text-2xl font-bold">Address</h3>
              <p className="mt-2">VIT University, Vellore.</p>
            </div>
          </div>

          {/* Follow Us & Contact Us */}
          <div className="space-y-10">
            <div>
              <h3 className="text-[#FD0000] text-2xl font-bold">Follow Us</h3>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center justify-center md:justify-start gap-2"><FaInstagram /> @vimaanas_inc</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><FaLinkedin /> Vimaanas Inc</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><FaXTwitter /> TeamVimaanas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#FD0000] text-2xl font-bold">Contact Us</h3>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center justify-center md:justify-start gap-2"><FaPhone /> +91 74188 61667</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><FaEnvelope /> vimaanasinc@vit.ac.in</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-8 pt-4 font-monument-extended font-ultrabold text-center tracking-widest text-2xl">
        Made with <span className="text-red-500 font-monument-extended">❤️</span> by IEEE CS
      </div>

    </footer>
  );
};
