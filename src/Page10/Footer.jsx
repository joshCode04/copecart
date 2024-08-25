function Footer() {
  return (
    <section className="px-20 max-[1139px]:px-0 border border-[#D9DEF4] bg-[#E4E8F4] flex max-[420px]:flex-col max-[420px]:pl-3 md:items-center p-4 mt-10 gap-2">
      <div className="">
        <img src="/foot.png" alt="logo" />
      </div>
      <div className="text-[#444549] flex gap-3 max-[420px]:flex-col">
        <p className="hover:text-[#5c3e1f] hover:no-underline underline cursor-pointer">
          Privacy Policy
        </p>
        <p className="hover:text-[#5c3e1f] hover:no-underline underline cursor-pointer">
          Terms & Conditions
        </p>
        <p className="hover:text-[#5c3e1f] hover:no-underline underline cursor-pointer">
          Contact Us
        </p>
      </div>
      <p className="text-[#8798AD]">© 2024 – CopeCart – All rights reserved.</p>
    </section>
  );
}

export default Footer;
