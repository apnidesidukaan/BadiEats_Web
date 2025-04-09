"use client";
import React from "react";

const ShippingAddress = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Full Name" />
        <input className="input" placeholder="Phone Number" />
        <input className="input md:col-span-2" placeholder="Address Line" />
        <input className="input" placeholder="City" />
        <input className="input" placeholder="Postal Code" />
      </form>
    </div>

  );
};

export default ShippingAddress;
