"use client";
import React from "react";

const ProductReview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Review Your Items</h2>
      <div className="space-y-4">
        {[1, 2].map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/products/lipstick.png" className="w-16 h-16 rounded" />
              <div>
                <p className="font-medium">Sample Product Name</p>
                <p className="text-sm text-gray-500">Qty: 1</p>
              </div>
            </div>
            <p className="font-medium">₹499</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ProductReview;
