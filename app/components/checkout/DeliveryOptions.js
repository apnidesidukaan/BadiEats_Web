"use client";
import React from "react";

const DeliveryOptions = () => {
  return (
    <>

      {/* Delivery Options */}
      < div className="bg-white p-6 rounded-lg shadow-sm" >
        <h2 className="text-lg font-semibold mb-4">Delivery Options</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="delivery" defaultChecked />
            <span>Standard Delivery (3-5 Days) - Free</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="delivery" />
            <span>Express Delivery (1-2 Days) - ₹50</span>
          </label>
        </div>
      </div >

      {/* Payment Method */}
      < div className="bg-white p-6 rounded-lg shadow-sm" >
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" defaultChecked />
            <span>UPI</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            <span>Cash on Delivery</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            <span>Credit/Debit Card</span>
          </label>
        </div>
      </div >

      {/* Notes */}
      < div className="bg-white p-6 rounded-lg shadow-sm" >
        <h2 className="text-lg font-semibold mb-2">Order Notes</h2>
        <textarea className="w-full input resize-none" rows="3" placeholder="Leave a note for the delivery..." />
      </div >
    </>
  );
};

export default DeliveryOptions;
