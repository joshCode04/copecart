import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Page Components
import Nav from "./MainPage/Nav";
import Hero from "./MainPage/Hero";
import Content from "./MainPage/Content";
import Footer from "./MainPage/Footer";

// Page1 Components
import Page1Nav from "./Page1/Nav";
import Page1Hero from "./Page1/Hero";
import Page1Content from "./Page1/Content";
import Page1Footer from "./Page1/Footer";

// Page2 Components
import Page2Nav from "./Page2/Nav";
import Page2Hero from "./Page2/Hero";
import Page2Content from "./Page2/Content";
import Page2Footer from "./Page2/Footer";

// Page3 Components
import Page3Nav from "./Page3/Nav";
import Page3Hero from "./Page3/Hero";
import Page3Content from "./Page3/Content";
import Page3Footer from "./Page3/Footer";

// Page4 Components
import Page4Nav from "./Page4/Nav";
import Page4Hero from "./Page4/Hero";
import Page4Content from "./Page4/Content";
import Page4Footer from "./Page4/Footer";

// Page5 Components
import Page5Nav from "./Page5/Nav";
import Page5Hero from "./Page5/Hero";
import Page5Content from "./Page5/Content";
import Page5Footer from "./Page5/Footer";

// Page6 Components
import Page6Nav from "./Page6/Nav";
import Page6Hero from "./Page6/Hero";
import Page6Content from "./Page6/Content";
import Page6Footer from "./Page6/Footer";

// Page7 Components
import Page7Nav from "./Page7/Nav";
import Page7Hero from "./Page7/Hero";
import Page7Content from "./Page7/Content";
import Page7Footer from "./Page7/Footer";

// Page8 Components
import Page8Nav from "./Page8/Nav";
import Page8Hero from "./Page8/Hero";
import Page8Content from "./Page8/Content";
import Page8Footer from "./Page8/Footer";

// Page9 Components
import Page9Nav from "./Page9/Nav";
import Page9Hero from "./Page9/Hero";
import Page9Content from "./Page9/Content";
import Page9Footer from "./Page9/Footer";

// Page10 Components
import Page10Nav from "./Page10/Nav";
import Page10Hero from "./Page10/Hero";
import Page10Content from "./Page10/Content";
import Page10Footer from "./Page10/Footer";

// Page11 Components
import Page11Nav from "./Page11/Nav";
import Page11Hero from "./Page11/Hero";
import Page11Content from "./Page11/Content";
import Page11Footer from "./Page11/Footer";

// Page12 Components
import Page12Nav from "./Page12/Nav";
import Page12Hero from "./Page12/Hero";
import Page12Content from "./Page12/Content";
import Page12Footer from "./Page12/Footer";

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
        <Route path="/page8" element={<Page8 />} />
        <Route path="/page9" element={<Page9 />} />
        <Route path="/page10" element={<Page10 />} />
        <Route path="/page11" element={<Page11 />} />
        <Route path="/page12" element={<Page12 />} />
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

function Page8() {
  return (
    <section>
      <section>
        <Page8Nav />
      </section>
      <section>
        <Page8Hero />
      </section>
      <section>
        <Page8Content />
      </section>
      <section>
        <Page8Footer />
      </section>
    </section>
  );
}

function Page9() {
  return (
    <section>
      <section>
        <Page9Nav />
      </section>
      <section>
        <Page9Hero />
      </section>
      <section>
        <Page9Content />
      </section>
      <section>
        <Page9Footer />
      </section>
    </section>
  );
}

function Page10() {
  return (
    <section>
      <section>
        <Page10Nav />
      </section>
      <section>
        <Page10Hero />
      </section>
      <section>
        <Page10Content />
      </section>
      <section>
        <Page10Footer />
      </section>
    </section>
  );
}

function Page11() {
  return (
    <section>
      <section>
        <Page11Nav />
      </section>
      <section>
        <Page11Hero />
      </section>
      <section>
        <Page11Content />
      </section>
      <section>
        <Page11Footer />
      </section>
    </section>
  );
}

function Page12() {
  return (
    <section>
      <section>
        <Page12Nav />
      </section>
      <section>
        <Page12Hero />
      </section>
      <section>
        <Page12Content />
      </section>
      <section>
        <Page12Footer />
      </section>
    </section>
  );
}
