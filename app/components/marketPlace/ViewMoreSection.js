import React from "react";

const ViewMoreSection = ({ title, products }) => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <a href={`/category/${title.toLowerCase()}`} className="text-primary text-sm hover:underline">
          View All
        </a>
      </div>

      {products?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-3" />
              <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
              <p className="text-primary font-semibold mt-1">₹{product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm">No products found under this category.</p>
      )}
    </div>
  );
};

export default ViewMoreSection;
