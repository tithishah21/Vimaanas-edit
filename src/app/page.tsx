"use client";

import { AboutTeam } from './components/About Team/about_team';
import { Projects } from './components/projects/projects';
import { Achievements } from './components/achievements/achievements';
import { Contact } from './components/contact/contact';
import { LandingPage } from './components/LandingPage/landingpage';
// import { Gallery } from './components/Gallery/gallery';

export default function Home() {
  return (
    <>
      <LandingPage />
      <AboutTeam />
      {/* <Gallery/> */}
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}