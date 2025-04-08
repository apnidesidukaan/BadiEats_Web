"use client";
import React from "react";

import Footer from "../components/Footer";
import SEOTextRichSection from "../components/vendorJoining/SEOTextRichSection";
import BlinkitNavbar from "../components/marketPlace/BlinkitNavbar";
import ProductSection from "../components/marketPlace/ProductSection";
//==================================================================
const MarketPlaceHome = () => {
  const dummyProducts = [
    {
      id: 1,
      title: "Lakmé 9to5 Primer + Matte Lipstick",
      price: 349,
      image: "/products/lipstick.png",
      eta: "15 mins",
      quantity: "3.6g",
    },
    {
      id: 2,
      title: "Maybelline Fit Me Foundation 30ml",
      price: 499,
      image: "/products/mamaearth.png",
      eta: "18 mins",
      quantity: "30ml",
    },
    {
      id: 3,
      title: "Mamaearth Vitamin C Face Wash",
      price: 249,
      image: "/products/lipstick.png",
      eta: "20 mins",
      quantity: "100ml",
    },
    {
      id: 4,
      title: "Plum Green Tea Moisturizer",
      price: 399,
      image: "/products/mamaearth.png",
      eta: "14 mins",
      quantity: "50ml",
    },
    {
      id: 5,
      title: "Biotique Bio Fruit Lip Balm",
      price: 199,
      image: "/products/lipstick.png",
      eta: "12 mins",
      quantity: "12g",
    },
  ];
  const dummyProductsPaan = [
    {
      id: 1,
      title: "Lakmé 9to5 Primer + Matte Lipstick",
      price: 349,
      image: "/products/ciggar.png",
      eta: "15 mins",
      quantity: "3.6g",
    },
    {
      id: 2,
      title: "Maybelline Fit Me Foundation 30ml",
      price: 499,
      image: "/products/mamaearth.png",
      eta: "18 mins",
      quantity: "30ml",
    },
    {
      id: 3,
      title: "Mamaearth Vitamin C Face Wash",
      price: 249,
      image: "/products/ciggar.png",
      eta: "20 mins",
      quantity: "100ml",
    },
    {
      id: 4,
      title: "Plum Green Tea Moisturizer",
      price: 399,
      image: "/products/mamaearth.png",
      eta: "14 mins",
      quantity: "50ml",
    },
    {
      id: 5,
      title: "Biotique Bio Fruit Lip Balm",
      price: 199,
      image: "/products/ciggar.png",
      eta: "12 mins",
      quantity: "12g",
    },
  ];
  const dummyProductsDailry = [
    {
      id: 1,
      title: "Lakmé 9to5 Primer + Matte Lipstick",
      price: 349,
      image: "/products/milk.png",
      eta: "15 mins",
      quantity: "3.6g",
    },
    {
      id: 2,
      title: "Maybelline Fit Me Foundation 30ml",
      price: 49,
      image: "/products/mamaearth.png",
      eta: "18 mins",
      quantity: "30ml", discountedPrice: 79,

    },
    {
      id: 3,
      title: "Mamaearth Vitamin C Face Wash",
      price: 249,
      image: "/products/milk.png",
      eta: "20 mins",
      quantity: "100ml", discountedPrice: 179,

    },
    {
      id: 4,
      title: "Plum Green Tea Moisturizer",
      price: 399,
      image: "/products/mamaearth.png",
      eta: "14 mins",
      quantity: "50ml", discountedPrice: 179,

    },
    {
      id: 5,
      title: "Biotique Bio Fruit Lip Balm",
      price: 199,
      image: "/products/milk.png",
      eta: "12 mins",
      quantity: "12g",
      discountedPrice: 179,
    },
  ];
  //==================================================================
  return (
    <>
      <div className="scrollbar p-1 bg-background-section text-primary-text">


        <BlinkitNavbar />
        <ProductSection
          title="Dairy, Bread & Eggs"
          dummyProducts={dummyProductsDailry}
        />
        <ProductSection
          title="Best Cosmetics"
          dummyProducts={dummyProducts}
        />
        <ProductSection
          title="Rolling paper & tobacco"
          dummyProducts={dummyProductsPaan}
        />
        <SEOTextRichSection />
        <Footer />
      </div>
    </>
  );
};
//==================================================================
export default MarketPlaceHome;
//==================================================================