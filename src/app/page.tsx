"use client";

import { Navbar } from './components/navbar';
import { Gallery } from './components/gallery';
import { Projects } from './components/projects';
import { Achievements } from './components/achievements';
import { Contact } from './components/contact';
import ProfileCard from './components/LandingPage/profilecard';
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