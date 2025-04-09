"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button/button";

const HeroVendor = ({ setIsAddVendorModalOpen }) => {
  return (
    <section className="bg-[#fefcf8] py-16">
      <div className="container max-w-5xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-text mb-4 leading-tight">
            Powering <span className="text-accent">Local Businesses</span> to Go Global 🚀
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            BadiDukaan helps you manage your store, sell products online, and deliver faster than ever — all from a single dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              inverse
              onClick={() => setIsAddVendorModalOpen(true)}
            >
               Join as a Delivery Partner
            </Button>

            <Button

              onClick={() => setIsAddVendorModalOpen(true)}
            >
             Or Register as a Vendor
            </Button>

          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/hero-illustration.png" // Replace with your actual image path
            alt="BadiDukaan Hero"
            width={600}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroVendor;
