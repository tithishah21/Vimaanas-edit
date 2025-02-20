"use client";

import { Navbar } from './components/Navbar/navbar';
import { Gallery } from './components/gallery/gallery';
import { Projects } from './components/projects/projects';
import { Achievements } from './components/achievements/achievements';
import { Contact } from './components/contact/contact';
import { LandingPage } from './components/LandingPage/landingpage';

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Gallery />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}