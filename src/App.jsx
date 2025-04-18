import React from "react";
import Header from "./Components/Header/Header";
import { About } from "./Components/About/About";
import { Aboutus } from "./Components/Aboutus/Aboutus";
import Special from "./Components/Special/Special";
import Chef from "./Components/Chef/Chef";
import Video from "./Components/Video/Video";
import Awards from "./Components/Awards/Awards";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <Aboutus />
      <Special />
      <Chef />
      <Video />
      <Awards />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
