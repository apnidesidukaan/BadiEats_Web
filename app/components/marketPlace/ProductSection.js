import { useState } from "react";
import { MdAccessTime } from "react-icons/md";



export default function ProductSection({ title = "Best Cosmetics", dummyProducts }) {
  return (
    // <div className="bg-background ">
    <div className="bg-background overflow-x-auto flex flex-col gap-2 py-4 items-center ">
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-primary-text px-4 mb-3">{title}</h2>

      {/* Product Cards */}
      <div className="flex space-x-4 px-4 scrollbar-hide pb-2">
        {dummyProducts?.map((product) => (
          <div
            key={product.id}
            className="min-w-[170px] max-w-[180px] flex-shrink-0 bg-white rounded-xl p-3 shadow  shadow-accent/15"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-28 object-contain rounded"
              />
              <div className="absolute top-1 left-1 flex items-center gap-1 bg-accent/10 text-accent text-xs px-2 py-0.5 rounded-full">
                <MdAccessTime className="w-3.5 h-3.5" />
                {product.eta}
              </div>
            </div>

            <div className="mt-2 text-sm font-medium text-primary-text line-clamp-2 h-[40px]">
              {product.title}
            </div>

            <div className="text-xs text-gray-500 mt-1">{product.quantity}</div>

            <div className="mt-2 flex items-center justify-between">
              <div>
                {product.discountedPrice ? (
                  <div className="flex flex-col">
                    <span className="text-green-600 font-bold text-sm">
                      ₹{product.discountedPrice}
                    </span>
                    <span className="text-gray-400 text-xs line-through">
                      ₹{product.price}
                    </span>
                  </div>
                ) : (
                  <span className="text-green-600 font-bold text-sm">₹{product.price}</span>
                )}
              </div>

              <button className="bg-accent text-white text-xs px-3 py-1 rounded-full hover:bg-accent/90 transition">
                Add +
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
