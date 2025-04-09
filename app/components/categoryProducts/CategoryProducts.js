import React from "react";
import ProductDisplayCard from "../categoryProducts/ProductDisplayCard";
import SubCategorySidebar from "./SubCategorySidebar";
import { Breadcrumbs } from "../ui/Breadcrumb/breadcrumb";
//=======================================================================

const products = [
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },
  {
    title: "Kellogg's Double Chocolaty Fills Choco",
    weight: "250 g",
    oldPrice: 205,
    price: 185,
    discount: 9,
    time: "11 MINS",
    image: "/products/mamaearth.png",
  },

  // ... more products
];
const breadcrumbs = [
  { label: 'Marketplace', href: '/' },
  { label: 'Cart', },
];
//=======================================================================
const CategoryProductsLayout = () => {
  //=======================================================================// 
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-background-section min-h-screen items-center justify-center ">
        <SubCategorySidebar />
        <main className=" scrollbar  overflow-y-auto h-[100vh] p-4">
          <div className=" mb-4 text-primary-text text-start max-w-[1186px] m-auto">
            <Breadcrumbs items={breadcrumbs} />
            <h2 className="text-xl font-semibold mb-4 text-primary-text text-start max-w-[1186px] m-auto">Flakes and Cereals</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-[1186px] m-auto bg-background p-4">
            <ProductDisplayCard product={products} />
          </div>
        </main>
      </div>
    </>
  );
};
//=======================================================================
export default CategoryProductsLayout;
//=======================================================================
