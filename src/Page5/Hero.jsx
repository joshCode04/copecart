import { useState } from "react";

function Hero() {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="px-12 pt-12 max-[900px]:px-6 max-sm:px-0">
      <div className="bg-white flex max-[900px]:flex-col max-[900px]:items-center gap-8 border border-[#D9DEF4] px-10 py-10 max-[900px]:py-5 max-[900px]:px-5 max-sm:px-4 rounded-lg">
        <div className="w-1/3 max-[900px]:w-full">
          <img
            src="/coin.jpg"
            alt="coin"
            className="w-full h-[189px] max-[900px]:h-[361px] max-sm:h-[189px]"
          />
        </div>
        <div className="w-1/3 max-[900px]:w-full">
          <h2 className="text-4xl font-bold mb-4 grotesk text-[#4C4C4C]">
            5x Republican Gold Coin
          </h2>
          <p
            className={`text-[#4C4C4C] font-bold grotesk ${
              showMore ? "" : "max-sm:hidden"
            }`}
          >
            Own a piece of history, the Republican Gold Coin This COIN is a
            symbol of President Trump’s victory and success. This
            quality-crafted REPUBLICAN COIN showcases two designs that scream
            patriotism and greatness in one and comes with a premium Republican
            Membership. The shipping time for this product is around 10-15
            business days after the sale was placed. CopeCart encourages you to
            seek additional information, conduct research, and consider your
            circumstances before purchasing this product. <br />
            <strong>After a review of this product:</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>
                CopeCart has determined that this product has NO MONETARY VALUE
                and aims to provide value through intangible benefits.
              </li>
              <li>
                The content of this product, including text, images, logos, and
                other creative elements, may contain copyrighted material owned
                by another party (not the Seller).
              </li>
              <li>
                There is no affiliation with any individuals, organizations, or
                entities that may be mentioned, or perceived as connected to
                this commemorative or souvenir-type product.
              </li>
              <li>This Vendor may be based outside the United States.</li>
            </ul>
            <p className="mt-2">
              By purchasing this product, you acknowledge that you have read,
              understood, and agreed to the terms and considerations mentioned
              in this product disclosure. You accept full responsibility for
              purchasing this product. CopeCart does not manage the shipping of
              any products. If you experience any issues with receiving your
              products, you must reach out to the Vendor directly.
            </p>
          </p>
          <p
            className="text-blue-500 hover:underline cursor-pointer max-sm:block hidden text-center"
            onClick={toggleContent}
          >
            {showMore ? "Hide Content" : "Read More"}
          </p>
        </div>
        <div className="w-1/3 flex flex-col gap-4 max-[900px]:w-full">
          <div className="flex justify-between">
            <p className="text-[#8798AD] text-xs grotesk">Net price:</p>
            <p className="montserat">$599.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#8798AD] text-xs grotesk">
              Net shipping price:
            </p>
            <p className="montserat">$0.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#8798AD] text-xs grotesk">Sales Tax (0.00%):</p>
            <p className="montserat">$0.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#8798AD] text-sm grotesk">
              Total (Incl. Sales TAX):
            </p>
            <p className="montserat text-2xl font-semibold text-[#005AFF]">
              $599.99
            </p>
          </div>
          <p className="text-[#B2B2B2] text-[10px] grotesk text-right">
            (Net). One-time shipping costs per item: $0.00
          </p>
          <button className="flex justify-center">
            <span>
              <img src="/warranty.png" className="rounded-md w-64" alt="" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
