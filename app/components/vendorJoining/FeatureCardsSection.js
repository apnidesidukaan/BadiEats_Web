"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/icons/easy-sell.png", // Replace with your custom icons
    title: "Sell With Ease",
    description: "Start selling online with simple tools to manage orders, inventory, and payments.",
  },
  {
    icon: "/icons/growth.png",
    title: "Grow Your Business",
    description: "Reach more customers with delivery, promotions, and built-in analytics.",
  },
  {
    icon: "/icons/support.png",
    title: "24/7 Seller Support",
    description: "From onboarding to scaling — we’re with you every step of the way.",
  },
];

const FeatureCardsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-primary-text">
          Why Choose <span className="text-accent">BadiDukaan</span>?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#fefcf8] border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">
                <Image src={feature.icon} alt={feature.title} width={120} height={120} />
              </div>
              <h3 className="text-xl font-semibold text-primary-text mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
