"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button/button";

const TaglineSection = ({ setIsAddVendorModalOpen }) => {
    return (
        <section className="bg-[#f5f5f5] py-12">
            <div className="container mx-auto px-4 text-center">
                {/* Logo or Icon */}
                <div className="flex justify-center mb-4 ">
                    <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 font-medium flex items-center justify-center gap-2 flex-wrap">

                        🧺
                    </p>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-text">
                    BadiDukaan
                </h1>

                <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 font-medium flex items-center justify-center gap-2 flex-wrap">
                    {/* <Image src="/icons/basket-icon.png" alt="Rocket" width={32} height={32} /> */}
                    🚀
                    Sell Online on India's #1 Instant Delivery Service
                    {/* <Image src="/icons/basket-icon.png" alt="Lightning" width={32} height={32} /> */}
                    ⚡
                </p>
                <div className="m-auto flex items-center justify-center gap-2 flex-wrap mt-6">

                    <Button

                        onClick={() => setIsAddVendorModalOpen(true)}
                    >

                        Become a Delivery Partner

                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TaglineSection;
