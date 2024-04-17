import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/landing-page/Hero";
import Preview from "@/components/landing-page/Preview";
import Benefits from "@/components/landing-page/Benefits";
import Team from "@/components/landing-page/Team";
import Community from "@/components/landing-page/Community";
import Footer from "@/components/Footer";
import TransitUp from "@/components/TransitUp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="x-adjust">
        <TransitUp>
          <Hero />
        </TransitUp>
        <TransitUp>
          <Preview />
        </TransitUp>
        <TransitUp>
          <Benefits />
        </TransitUp>
        <TransitUp>
          <Team />
        </TransitUp>
        <TransitUp>
          <Community />
        </TransitUp>
      </main>
      <TransitUp>
        <Footer />
      </TransitUp>
    </>
  );
}
