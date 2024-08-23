import { useState } from "react";
import Select from "react-select";

function Payment() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
    value: "Bitcoin",
    label: (
      <div className="flex items-center">
        <img src="/bitcoin.png" alt="Bitcoin Logo" className="w-6 h-6 mr-2" />
        Bitcoin
      </div>
    ),
  });
  const [copied, setCopied] = useState("");

  const addresses = {
    Bitcoin: "bc1qlc99e96wqqqftc4cy9npmj5msj6xpvkf4v73n5",
    Ethereum: "0xa38a8a3eE2ff56E33e2D70c4A3e1e0437224041b",
    Litecoin: "0xa38a8a3eE2ff56E33e2D70c4A3e1e0437224041b",
  };

  const handleCopyAddress = (crypto) => {
    const address = addresses[crypto];
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(crypto);
      setTimeout(() => setCopied(""), 3000);
    }
  };

  const cryptoOptions = [
    {
      value: "Bitcoin",
      label: (
        <div className="flex items-center">
          <img src="/bitcoin.png" alt="Bitcoin Logo" className="w-6 h-6 mr-2" />
          Bitcoin
        </div>
      ),
    },
    {
      value: "Ethereum",
      label: (
        <div className="flex items-center">
          <img
            src="/ethereum.png"
            alt="Ethereum Logo"
            className="w-6 h-6 mr-2"
          />
          Ethereum
        </div>
      ),
    },
    {
      value: "Litecoin",
      label: (
        <div className="flex items-center">
          <img src="/USDT.png" alt="usdt Logo" className="w-6 h-6 mr-2" />
          USDT
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-between gap-8 mb-12">
      {" "}
      <div className="bg-white rounded-lg flex-1">
        {" "}
        {/* Flex-1 to make both sections take equal space */}
        <div className="px-10 py-10 max-[900px]:py-5 max-[900px]:px-5 max-sm:px-4">
          <div className="text-[#005AFF] flex gap-2">
            <span className="text-3xl">
              <ion-icon name="card"></ion-icon>
            </span>
            <p className="text-xl font-normal">
              <span className="font-bold">Step 1: </span>Payment Options
            </p>
          </div>
          <p className="text-[#CBB2B9] text-xs">
            Choose your preferred payment method now
          </p>
        </div>
        <div className="w-full h-[2px] bg-[#B6C3D2]"></div>
        <Select
          id="payment-method"
          options={cryptoOptions}
          value={selectedPaymentMethod}
          onChange={setSelectedPaymentMethod}
          className="border rounded-md p-2"
          components={{ IndicatorSeparator: () => null }} // Remove the separator between dropdown and value
        />
        {selectedPaymentMethod && (
          <div className="relative p-2">
            <p className="mb-2">
              Send {selectedPaymentMethod.value} to the following address:
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="border rounded-md p-2 w-full"
                value={addresses[selectedPaymentMethod.value]}
                readOnly
              />
              <button
                onClick={() => handleCopyAddress(selectedPaymentMethod.value)}
                className="bg-gray-300 text-black px-3 py-2 rounded-md"
              >
                Copy
              </button>
            </div>
            <div className="flex gap-4 justify-center mt-5">
              <div
                onClick={() => handleSelect("paypal")}
                className={`bg-[#F8F9FC] p-3 cursor-pointer ${
                  selectedOption === "paypal" ? "border-2 border-blue-500" : ""
                }`}
              >
                <img src="/paypal.png" alt="PayPal" className="w-16 h-7" />
              </div>
              <div
                onClick={() => handleSelect("visa")}
                className={`bg-[#F8F9FC] p-3 cursor-pointer ${
                  selectedOption === "visa" ? "border-2 border-blue-500" : ""
                }`}
              >
                <img src="/visa.png" alt="VISA" className="w-16 h-7" />
              </div>
              <div
                onClick={() => handleSelect("gpay")}
                className={`bg-[#F8F9FC] p-3 cursor-pointer ${
                  selectedOption === "gpay" ? "border-2 border-blue-500" : ""
                }`}
              >
                <img src="/Gpay.png" alt="Google Pay" className="w-16 h-7" />
              </div>
            </div>
            {copied === selectedPaymentMethod.value && (
              <div className="absolute top-full mt-2 p-2 bg-green-500 text-white rounded-md">
                {selectedPaymentMethod.value} address copied to clipboard!
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex-1 max-md:hidden">
        <div className="flex mb-3 gap-3 max-w-[495px]">
          <div className="bg-[#070F55] p-2 pt-3 rounded-lg h-14 text-3xl text-white px-3">
            <ion-icon name="time" className="text-white"></ion-icon>
          </div>
          <div className="">
            <h3 className="font-bold">Transparent and fast.</h3>
            <p className="text-[#8798AD] text-sm">
              Filling out the form takes only a few seconds.
            </p>
          </div>
        </div>
        <div className="flex mb-3 gap-3 max-w-[495px]">
          <div className="bg-[#070F55] p-2 pt-3 rounded-lg h-14 text-3xl text-white px-3">
            <ion-icon name="shield-checkmark" className="text-white"></ion-icon>
          </div>
          <div className="">
            <h3 className="font-bold">
              Extra secure and encrypted data transmission:
            </h3>
            <p className="text-[#8798AD] text-sm">
              This website protects your private information with SSL/TLS
              certificate. Information that is exchanged with an address
              starting with https is encrypted with SSL/TLS.
            </p>
          </div>
        </div>
        <div className="flex gap-3 max-w-[495px]">
          <div className="bg-[#070F55] p-2 pt-3 rounded-lg h-14 text-3xl text-white px-3">
            <ion-icon name="headset"></ion-icon>
          </div>
          <div className="">
            <h3 className="font-bold">Competent Support</h3>
            <p className="text-[#8798AD] text-sm">
              CopeCart Support is always there to help you with any questions
              you may encounter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
