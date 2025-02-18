"use client";

import { Navbar } from './components/navbar';
import { Gallery } from './components/gallery';
import { Projects } from './components/projects';
import { Achievements } from './components/achievements';
import { Contact } from './components/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="h-screen bg-[#2A2929] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-monument-extended tracking-widest mb-6">VIMAANAS</h1>
          <p className="text-xl max-w-2xl mx-auto">Pioneering the future of aerospace engineering and innovation</p>
        </div>
      </section>
      
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-monument-extended mb-6 tracking-wider text-center">ABOUT TEAM</h2>
          <p>About team content goes here</p>
        </div>
      </section>
      <Gallery />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}