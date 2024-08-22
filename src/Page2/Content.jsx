import OrderOverview from "./ContentContainers/OrderOverview";
import Payment from "./ContentContainers/Payment";

function Content() {
  return (
    <section className="px-12 pt-12 max-[900px]:px-6 max-sm:px-0">
      <section className="flex-col">
        <Payment />
      </section>
      <section className="flex-col">
        <OrderOverview />
      </section>
    </section>
  );
}

export default Content;
