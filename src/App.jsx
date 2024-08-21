import Content from "./MainPage/Content";
import Footer from "./MainPage/Footer";
import Hero from "./MainPage/Hero";
import Nav from "./MainPage/Nav";

export default function App() {
  return (
    <section>
      <section>
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Content />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}
