import React from "react";

const categories = [
  {
    name: "Noodles",
    image: "/products/ciggar.png",
  },
  {
    name: "Noodles",
    image: "/products/ciggar.png",
  },
  {
    name: "Noodles",
    image: "/products/ciggar.png",
  },
  {
    name: "Noodles",
    image: "/products/ciggar.png",
  },
  {
    name: "Noodles",
    image: "/products/ciggar.png",
  },
  {
    name: "Frozen Veg Snacks",
    image: "/products/mamaearth.png",
  },
  {
    name: "Frozen Non-Veg Snacks",
    image: "/products/milk.png",
  },
  {
    name: "Pasta",
    image: "/products/lipstick.png",
  },
  {
    name: "Instant Mixes",
    image: "/products/mamaearth.png",
  },
  {
    name: "Energy Bars",
    image: "/products/mamaearth.png",
  },
  {
    name: "Soup",
    image: "/products/mamaearth.png",
  },
  {
    name: "Soup",
    image: "/products/mamaearth.png",
  },
  {
    name: "Soup",
    image: "/products/mamaearth.png",
  },
  {
    name: "Soup",
    image: "/products/mamaearth.png",
  },
];

const SubCategorySidebar = () => {
  return (
<aside className="w-full lg:w-52 border-b lg:border-b-0 lg:border-r p-4 overflow-y-auto max-h-screen">
{/* Mobile: Horizontal Scroll */}
      <div className="scrollbar flex lg:hidden gap-3 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="shrink-0 flex flex-col items-center justify-center text-center px-2"
          >
            <div className="w-14 h-14 p-2 bg-gray-100 rounded-full border border-gray-200 hover:bg-green-100 transition">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-xs mt-1 text-gray-700">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Desktop: Vertical List with Fixed Height */}
      <div className="scrollbar hidden lg:flex lg:flex-col gap-4 items-center bg-background px-2 pt-4 pb-2 rounded-md shadow-inner h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center cursor-pointer group"
          >
            <div className="w-12 h-12 p-2 bg-gray-100 rounded-full border border-gray-200 group-hover:bg-green-100 transition">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-xs mt-1 text-gray-700 group-hover:text-green-600">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SubCategorySidebar;
