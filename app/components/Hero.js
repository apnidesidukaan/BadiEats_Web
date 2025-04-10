"use client";
import React from "react";
import { Button } from "./ui/button/button";

const HeroSection = () => {
  return (
    <section className="mt-2 rounded  shadow   bg-gradient-to-r from-[#dec9b5] via-[#FFFAF0] to-[#FFFAF0] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-primary-text text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            From Local Hustle <br className="hidden sm:block" /> to Global Muscle
          </h1>
          <p className="text-lg md:text-xl lg:text-lg text-primary-muted mb-6">
            Empower your business with ProGate’s smart SaaS solutions. Manage inventory, customers, logistics, and growth—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button  variant="outline" inverse>Get Started</Button>
            <Button variant="outline" >Learn More</Button>



          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="/hero-images.png"
            alt="Business growth illustration"
            className="w-full max-w-md md:max-w-full drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
