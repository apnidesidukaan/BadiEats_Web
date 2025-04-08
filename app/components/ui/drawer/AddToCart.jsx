import { MdClose } from "react-icons/md";
import { FiClock, FiShoppingBag, FiTruck, FiInfo, FiBox, FiTag } from "react-icons/fi";

export default function CartDrawer({ isOpen, onClose, cartItems = [] }) {

  const totalMRP = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalDiscounted = cartItems.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
    0
  );
  const savings = totalMRP - totalDiscounted;
  const deliveryCharge = 25;
  const handlingCharge = 4;
  const totalAmount = totalDiscounted + deliveryCharge + handlingCharge;

  return (
    <div
      className={` fixed top-0 right-0 h-screen w-full max-w-sm bg-white z-[9999] flex flex-col shadow-2xl ${isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b sticky top-0 bg-white z-10">
        <h2 className="text-lg font-bold">My Cart</h2>
        <MdClose className="w-6 h-6 cursor-pointer text-muted" onClick={onClose} />
      </div>

      {/* ============================================================================== */}

      <div className="flex-1 overflow-y-auto">



        {/* Total savings banner */}
        <div className="bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium flex justify-between items-center">
          <span>Your total savings</span>
          <span>₹{savings}</span>
        </div>

        {/* Delivery info */}
        <div className="p-4 bg-gray-50 rounded-none border-b">
          <div className="flex items-center gap-2 text-sm text-gray-800 mb-1">
            <FiClock className="text-green-600" />
            <span className="font-medium">Delivery in 8 minutes</span>
          </div>
          <div className="text-xs text-muted ml-6">Shipment of {cartItems.length} item</div>
        </div>

        {/* Cart items */}
        <div className="p-4 space-y-4 bg-white max-h-[calc(100vh-360px)] overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-3 border p-3 rounded-xl shadow-sm bg-gray-50">
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-contain rounded bg-white border"
              />
              <div className="flex-1 text-sm">
                <div className="font-medium">{item.title}</div>
                <div className="text-xs text-muted mt-0.5">{item.quantityText}</div>

                {/* Qty Control */}
                <div className="flex gap-2 mt-2">
                  <button className="bg-gray-200 px-2 py-1 rounded">−</button>
                  <span className="min-w-[20px] text-center">{item.quantity}</span>
                  <button className="bg-gray-200 px-2 py-1 rounded">+</button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right text-sm mt-1 min-w-[60px]">
                {item.discountedPrice && item.discountedPrice < item.price ? (
                  <>
                    <div className="line-through text-xs text-muted">₹{item.price}</div>
                    <div className="text-green-600 font-semibold">₹{item.discountedPrice}</div>
                  </>
                ) : (
                  <div className="text-green-600 font-semibold">₹{item.price}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bill Details */}
        <div className="bg-white p-4 border-t space-y-2 text-sm">
          <h3 className="font-semibold text-base mb-1">Bill details</h3>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center text-muted">
              <FiTag />
              Item total
              <span className="ml-2 text-blue-700 text-xs bg-blue-100 px-2 py-0.5 rounded-full font-medium">
                Saved ₹{savings}
              </span>
            </div>
            <div>
              <span className="line-through text-xs text-muted mr-1">₹{totalMRP}</span>
              ₹{totalDiscounted}
            </div>
          </div>

          <div className="flex justify-between text-muted">
            <div className="flex items-center gap-2">
              <FiTruck /> Delivery charge
            </div>
            <div>₹{deliveryCharge}</div>
          </div>

          <div className="flex justify-between text-muted">
            <div className="flex items-center gap-2">
              <FiBox /> Handling charge
            </div>
            <div>₹{handlingCharge}</div>
          </div>

          <hr className="border-dashed border-t my-2" />

          <div className="flex justify-between font-bold text-base">
            <span>Grand total</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>

        {/* Savings summary again */}
        <div className="bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium flex justify-between items-center border-t">
          <span>Your total savings</span>
          <span>₹{savings}</span>
        </div>

      </div>
      {/* ============================================================================== */}
      {/* Cancellation Policy */}
      <div className="bg-gray-50 px-4 py-3 text-xs text-muted border-t">
        <strong className="text-sm text-gray-700 block mb-1">Cancellation Policy</strong>
        Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.
      </div>
      <div className="shrink-0 border-t px-4 py-3 bg-white sticky bottom-0 z-10">



        {/* Footer */}
        <div className="flex items-center justify-between bg-white border-t px-4 py-3 sticky bottom-0">
          <div className="text-lg font-bold text-green-500">₹{totalAmount} <span className="text-sm font-medium text-muted">TOTAL</span>
          </div>
          <button className="bg-accent cursor-pointer text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-sm">
            Login to Proceed →
          </button>
        </div>
      </div>
    </div>
  );
}
