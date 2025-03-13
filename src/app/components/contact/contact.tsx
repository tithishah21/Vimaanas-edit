import { FaInstagram, FaLinkedin, FaXTwitter, FaPhone, FaEnvelope } from "react-icons/fa6";
import Image from "next/image";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    const smoothScroll = (target: string) => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        if (target) smoothScroll(target);
      });
    });

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  return (
    <footer className="bg-[#2A2929] text-white py-10 px-6 md:px-12 rounded-t-[2rem] md:rounded-t-[4rem] mt-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-16 lg:gap-40">
        <div className="flex flex-col items-center md:items-center">
          <Image src="/assets/logo.png" alt="VIMAANAS Logo" width={224} height={192} className="h-32 w-40 md:h-48 md:w-56" />
          <h2 className="text-3xl md:text-5xl text-[#FD0000] font-monument-extended font-ultrabold mt-3">VIMAANAS</h2>
          <p className="font-monument-extended font-bold tracking-wide text-sm mt-2">Copyright © | All Rights Reserved</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-base font-monument-extended font-semibold tracking-widest w-full items-center md:items-start text-center md:text-left">
          <div className="space-y-7 md:space-y-10">
            <div>
              <h3 className="text-[#FD0000] text-xl md:text-2xl font-bold ">Company</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="#about" className="hover:text-[#FD0000] transition-colors">About Team</a></li>
                <li><a href="#gallery" className="hover:text-[#FD0000] transition-colors">Gallery</a></li>
                <li><a href="#projects" className="hover:text-[#FD0000] transition-colors">Projects</a></li>
                <li><a href="#achievements" className="hover:text-[#FD0000] transition-colors">Achievements</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#FD0000] text-xl md:text-2xl font-bold">Address</h3>
              <p className="mt-2">VIT University<br/>Vellore.</p>
            </div>
          </div>

          <div className="space-y-7 md:space-y-10">
            <div>
              <h3 className="text-[#FD0000] text-xl md:text-2xl font-bold">Follow Us</h3>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <a href="https://www.instagram.com/vimaanas_inc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FD0000] transition-colors">
                    <FaInstagram /> @vimaanas_inc
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <a href="https://www.linkedin.com/company/team-vimaanas-inc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FD0000] transition-colors">
                    <FaLinkedin /> Vimaanas Inc
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <a href="https://x.com/vimaanas_inc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FD0000] transition-colors">
                    <FaXTwitter /> Vimaanas_inc
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#FD0000] text-xl md:text-2xl font-bold">Contact Us</h3>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center justify-center md:justify-start gap-2"><FaPhone /> +91 74188 61667</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><FaEnvelope /> vimaanasinc@vit.ac.in</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t mt-8 pt-4 font-monument-extended font-ultrabold text-center tracking-widest text-lg lg:text-2xl ">
        Made with <span className="text-red-500 font-monument-extended">❤️</span> by IEEE CS
      </div>
    </footer>
  );
};
