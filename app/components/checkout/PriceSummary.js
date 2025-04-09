"use client";
import React from "react";

const PriceSummary = () => {
  return (
    <>

      <div className="bg-white p-6 rounded-lg shadow-md h-fit">
        <h2 className="text-lg font-semibold mb-4">Price Summary</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹998</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span>₹0</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">− ₹100</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹898</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-accent text-white py-3 rounded-md text-center font-semibold hover:bg-opacity-90">
          Confirm & Pay
        </button>

        <p className="text-xs text-gray-500 mt-3 text-center">
          By confirming, you agree to our <span className="underline">terms & conditions</span>.
        </p>
      </div>
    </>
  );
};

export default PriceSummary;
