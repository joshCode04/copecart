import "../index.css";

function Nav() {
  return (
    <section className="px-20 max-[1139px]:px-0 border border-[#D9DEF4] bg-white">
      <div className="flex justify-center max-[1023px]:hidden">
        <p className="font-bold text-xl text-[#2E384D]">SECURE CHECKOUT</p>
      </div>
      <div className="sticky top-0 bg-white z-50">
        {" "}
        {/* Make the entire section sticky */}
        <div className="flex items-center justify-center p-4">
          <div className="absolute left-20 max-[1139px]:left-0 max-[1023px]:hidden">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div className="bg-[#2E5BFF] w-5 h-5 rounded-full"></div>
              <div className="h-[1px] w-[100px] bg-[#BCC3D0]"></div>
              <div className="bg-[#2E5BFF] w-5 h-5 rounded-full"></div>
              <div className="h-[1px] w-[100px] bg-[#BCC3D0]"></div>
              <div className="bg-[#2E5BFF] w-5 h-5 rounded-full"></div>
            </div>
            <div className="flex gap-14 max-[330px]:gap-16 max-[374px]:gap-20 mt-2 font-bold max-[374px]:text-[11.5px] text-[#2E384D]">
              <p>1. Product</p>
              <p>2. Checkout</p>
              <p>3. Finish</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
