"use client";
//==================================================================
import React from "react";
import Footer from "../components/Footer";
import SEOTextRichSection from "../components/vendorJoining/SEOTextRichSection";
import BlinkitNavbar from "../components/marketPlace/BlinkitNavbar";
import CheckoutPage from "../components/checkout/CheckoutPage";
//==================================================================
const ProductPreviewBeforeCheckout = () => {

  //==================================================================
  const dummyProduct = {
    title: "Mamaearth Vitamin C Face Wash",
    brand: "Mamaearth",
    category: "Skin Care",
    price: 249,
    image: "/products/mamaearth.png",
    description:
      "Enriched with natural ingredients, this face wash helps brighten your skin while removing dirt and impurities effectively.",
  };

  return (
    <>
      <div className="scrollbar p-1 bg-background-section text-primary-text">


        <BlinkitNavbar showCategory={false} />
        <CheckoutPage product={dummyProduct} />
        <SEOTextRichSection />
        <Footer />
      </div>
    </>
  );
};
//==================================================================
export default ProductPreviewBeforeCheckout;
//==================================================================