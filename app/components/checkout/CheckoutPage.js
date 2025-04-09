"use client";
//====================================================================
import React from "react";
import ShippingAddress from "./ShippingAddress";
import ProductReview from "./ProductReview";
import PromoCode from "./PromoCode";
import DeliveryOptions from "./DeliveryOptions";
import PriceSummary from "./PriceSummary";
import { Breadcrumbs } from "../ui/Breadcrumb/breadcrumb";
//====================================================================
const breadcrumbs = [
  { label: 'Marketplace', href: '/' },
  { label: 'Cart', },
];
//====================================================================
const CheckoutPage = () => {
  //====================================================================
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-16 w-fit m-auto" >
      <Breadcrumbs items={breadcrumbs} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ShippingAddress />
          <ProductReview />
          <PromoCode />
          <DeliveryOptions />
        </div>
        <PriceSummary />
      </div>
    </div>
  );
};
//====================================================================
export default CheckoutPage;
//====================================================================