import { useState } from "react";
function OrderOverview() {
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 1000;
  const unitPrice = 4999; // Price per unit
  const discount = 0; // Assuming no discount
  const shipping = 0; // Assuming no shipping cost
  const salesTaxRate = 0.0; // Assuming no sales tax

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const grossPrice = unitPrice * quantity;
  const netPrice = grossPrice - discount;
  const salesTax = netPrice * salesTaxRate;
  const totalCharge = netPrice + shipping + salesTax;
  return (
    <div>
      <div className="bg-white rounded-lg flex-1 max-w-[612px]">
        <div className="px-10 py-10 max-[900px]:py-5 max-[900px]:px-5 max-sm:px-4">
          <div className="text-[#005AFF] flex gap-2">
            <span className="text-3xl">
              <ion-icon name="card"></ion-icon>
            </span>
            <p className="text-xl font-normal">
              <span className="font-bold">Step 2: </span>Order Overview
            </p>
          </div>
          <p className="text-[#CBB2B9] text-xs">
            This is a summary of your order
          </p>
        </div>
        <div className="w-full h-[2px] bg-[#B6C3D2]"></div>
        <div className="flex max-md:flex-col gap-8 px-10 py-10">
          <div>
            <img src="/coin.jpg" alt="" className="h-[69px] w-[125px]" />
          </div>
          <div className="flex-col w-[377px] max-md:w-[299px]">
            <h5 className="font-bold mb-4 grotesk text-[#4C4C4C]">
              50x Republican Gold Coin
            </h5>
            <div className="text-xs text-[#87A5CA]">
              <div className="flex justify-between mb-3">
                <p>Quantity: (max: {maxQuantity})</p>
                <div className="flex flex-col items-center gap-0">
                  <div className="inline-flex items-center justify-center gap-4">
                    <span
                      className="text-2xl leading-none hover:bg-slate-500 cursor-pointer"
                      onClick={handleDecrement}
                    >
                      -
                    </span>
                    <span className="text-2xl font-bold leading-none">
                      {quantity}
                    </span>
                    <span
                      className="text-2xl leading-none hover:bg-slate-500 cursor-pointer"
                      onClick={handleIncrement}
                    >
                      +
                    </span>
                  </div>
                  <div className="w-full h-[1px] bg-[#005AFF] mt-[-1px]"></div>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <p>Payment plan:</p>
                <div>
                  <p className="text-[#005AFF] grotesk text-base">
                    One-time payment
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <p>Gross price:</p>
                <div>
                  <p className="text-[#005AFF] grotesk text-base">
                    ${grossPrice.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <p>Promo code discount (Gross):</p>
                <div>
                  <p className="text-[#005AFF] grotesk text-base">
                    ${discount.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <p>Net price:</p>
                <div>
                  <p className="text-[#005AFF] grotesk text-base">
                    ${netPrice.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <p>Shipping Net:</p>
                <div>
                  <p className="text-[#005AFF] grotesk text-base">
                    ${shipping.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <p>Sales Tax ({(salesTaxRate * 100).toFixed(2)}%):</p>
                <div>
                  <p className="text-[#005AFF] grotesk text-base">
                    ${salesTax.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#005AFF] grotesk text-lg font-semibold">
                  Charge (Incl. Sales TAX):
                </p>
                <div>
                  <p className="text-[#005AFF] grotesk text-lg font-semibold">
                    ${totalCharge.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10">
          <p className="text-[#B9A5AD] text-base grotesk mb-5">
            By placing your order you agree to accept the Terms & Conditions,
            having taken due note of the Cancellation Policy.
          </p>
          <button className="grotesk bg-[#F26B05] w-full mb-5 py-3 text-2xl font-semibold text-white rounded-md shadow-lg hover:shadow-xl">
            Order Now
          </button>
          <img src="/image.png" className="m-auto" alt="" />
        </div>
      </div>
    </div>
  );
}

export default OrderOverview;
