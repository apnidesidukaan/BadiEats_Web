import { MdAccessTime } from "react-icons/md";
import { IconButton } from "../ui/button/iconButton";
import { useRouter } from "next/navigation";
import ViewMoreSection from "./ViewMoreSection";
import Badge from "../ui/Badges/badge";
import ViewMore from "../ui/Badges/ViewMore";

export default function ProductSection({ title = "Best Cosmetics", dummyProducts }) {
  const router = useRouter();
  const dummySubCategoryProducts = [
    { id: 1, title: "Lakmé Matte Lipstick", price: 349, image: "/products/lipstick.png" },
    { id: 2, title: "Maybelline Compact Powder", price: 399, image: "/products/powder.png" },
    { id: 3, title: "Plum Kajal", price: 199, image: "/products/kajal.png" },
    { id: 4, title: "Biotique Face Scrub", price: 249, image: "/products/scrub.png" },
  ];
  return (
    <div className="bg-background py-4 w-full">
      {/* Section Title */}
      {/* <h2 className="text-xl font-semibold text-primary-text px-4 mb-3">{title}</h2> */}
      <div className="flex items-center justify-between mb-4 p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <ViewMore />

      </div>
      {/* Product Cards */}
      <div className=" scrollbar flex gap-3 px-4 overflow-x-auto scrollbar-hide pb-2">
        {dummyProducts?.map((product) => (
          <div
            key={product.id}
            className="min-w-[160px] sm:min-w-[180px] max-w-[180px] bg-white rounded-xl p-3 shadow-sm shadow-accent/10 flex-shrink-0"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-24 sm:h-28 object-contain rounded"
              />
              {product.eta && (
                <div className="absolute top-1 left-1 flex items-center gap-1 bg-accent/10 text-accent text-xs px-2 py-0.5 rounded-full">
                  <MdAccessTime className="w-3.5 h-3.5" />
                  {product.eta}
                </div>
              )}
            </div>

            <div className="mt-2 text-sm font-medium text-primary-text line-clamp-2 min-h-[40px]">
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

              <IconButton
                onClick={() => router.push(`/checkout`)}
              >
                Add +
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
