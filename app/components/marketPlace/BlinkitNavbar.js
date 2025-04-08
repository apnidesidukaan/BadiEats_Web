import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Input } from "../ui/input/input";
import CategorySelector from "./CategorySelector";
import LocationDetector from "./LocationDetector";
import { Button } from "../ui/button/button";
import { IconButton } from "../ui/button/iconButton";
import CartDrawer from "../ui/drawer/AddToCart";

export default function BlinkitNavbar() {
  const [openCart, setOpenCart] = useState(false);
const categories = [
  { name: "Dairy & Eggs", image: "/products/milk.png" },
  { name: "Breads & Bakery", image: "/products/mamaearth.png" },
  { name: "Beverages", image: "/products/milk.png" },
  { name: "Fruits & Vegetables", image: "/products/lipstick.png" },
  { name: "Snacks", image: "/products/ciggar.png" },
];
  const cartItems = [
    {
      id: 1,
      title: "MamyPoko Pants Standard Diaper (XL)",
      image: "https://www.bigbasket.com/media/uploads/p/l/40116416_5-mamypoko-pants-standard-diapers-xl.jpg",
      quantity: 1,
      price: 599,
      discountedPrice: 426,
      quantityText: "1 pack (36 pieces)",
    },
  ];
  
  return (
    <nav className="w-full bg-background shadow z-50 px-4 py-2 sticky top-0">
      {/* ==================== Upper Part ================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between  mx-auto gap-3 sm:gap-4">
        {/* Top Row: Logo & Location */}
        <LocationDetector />

        {/* Middle Row (on small screens it appears below): Search Bar */}
        <div className="w-full sm:flex-1">
          <Input
            type="text"
            placeholder="Search for products"
          // className="w-full px-4 py-2 border text-primary-text rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Icons: Always on the right */}
        <div className="flex items-center gap-4 min-w-fit self-end sm:self-auto">
          <IconButton>

            <FaUserAlt size={17} className=" text-background cursor-pointer mr-2" /> Login
          </IconButton>
          <IconButton
            onClick={() => setOpenCart(true)}

          >


            <MdShoppingCart size={18} className=" text-background cursor-pointer mr-2" /> Cart
          </IconButton>

        </div>
      </div>


      {/* ==================== Category Tabs ================== */}

      <CategorySelector categories={categories} />
      {/* ==================== Add TO Cart  ================== */}
      <CartDrawer
        isOpen={openCart}
        cartItems={cartItems}
        onClose={() => setOpenCart(false)}
      />
    </nav>
  );
}
