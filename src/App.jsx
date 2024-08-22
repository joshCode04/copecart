import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./MainPage/Content";
import Footer from "./MainPage/Footer";
import Hero from "./MainPage/Hero";
import Nav from "./MainPage/Nav";
import Page1Content from "./Page1/Content";
import Page1Footer from "./Page1/Footer";
import Page1Hero from "./Page1/Hero";
import Page1Nav from "./Page1/Nav";
import Page2Content from "./Page2/Content";
import Page2Footer from "./Page2/Footer";
import Page2Hero from "./Page2/Hero";
import Page2Nav from "./Page2/Nav";
import Page3Content from "./Page3/Content";
import Page3Footer from "./Page3/Footer";
import Page3Hero from "./Page3/Hero";
import Page3Nav from "./Page3/Nav";
import Page4Content from "./Page4/Content";
import Page4Footer from "./Page4/Footer";
import Page4Hero from "./Page4/Hero";
import Page4Nav from "./Page4/Nav";
import Page5Content from "./Page5/Content";
import Page5Footer from "./Page5/Footer";
import Page5Hero from "./Page5/Hero";
import Page5Nav from "./Page5/Nav";
import Page6Content from "./Page6/Content";
import Page6Footer from "./Page6/Footer";
import Page6Hero from "./Page6/Hero";
import Page6Nav from "./Page6/Nav";
import Page7Content from "./Page7/Content";
import Page7Footer from "./Page7/Footer";
import Page7Hero from "./Page7/Hero";
import Page7Nav from "./Page7/Nav";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
      </Routes>
    </Router>
  );
}

function MainPage() {
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

function Page1() {
  return (
    <section>
      <section>
        <Page1Nav />
      </section>
      <section>
        <Page1Hero />
      </section>
      <section>
        <Page1Content />
      </section>
      <section>
        <Page1Footer />
      </section>
    </section>
  );
}

// Repeat the same structure for Page2 to Page7

function Page2() {
  return (
    <section>
      <section>
        <Page2Nav />
      </section>
      <section>
        <Page2Hero />
      </section>
      <section>
        <Page2Content />
      </section>
      <section>
        <Page2Footer />
      </section>
    </section>
  );
}

function Page3() {
  return (
    <section>
      <section>
        <Page3Nav />
      </section>
      <section>
        <Page3Hero />
      </section>
      <section>
        <Page3Content />
      </section>
      <section>
        <Page3Footer />
      </section>
    </section>
  );
}

function Page4() {
  return (
    <section>
      <section>
        <Page4Nav />
      </section>
      <section>
        <Page4Hero />
      </section>
      <section>
        <Page4Content />
      </section>
      <section>
        <Page4Footer />
      </section>
    </section>
  );
}

function Page5() {
  return (
    <section>
      <section>
        <Page5Nav />
      </section>
      <section>
        <Page5Hero />
      </section>
      <section>
        <Page5Content />
      </section>
      <section>
        <Page5Footer />
      </section>
    </section>
  );
}

function Page6() {
  return (
    <section>
      <section>
        <Page6Nav />
      </section>
      <section>
        <Page6Hero />
      </section>
      <section>
        <Page6Content />
      </section>
      <section>
        <Page6Footer />
      </section>
    </section>
  );
}

function Page7() {
  return (
    <section>
      <section>
        <Page7Nav />
      </section>
      <section>
        <Page7Hero />
      </section>
      <section>
        <Page7Content />
      </section>
      <section>
        <Page7Footer />
      </section>
    </section>
  );
}
