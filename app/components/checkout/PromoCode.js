"use client";
import React from "react";

const PromoCode = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Promo Code</h2>
      <div className="flex gap-4">
        <input className="input flex-1" placeholder="Enter coupon code" />
        <button className="bg-accent text-white px-4 py-2 rounded-md">
          Apply
        </button>
      </div>
    </div>

  );
};

export default PromoCode;
