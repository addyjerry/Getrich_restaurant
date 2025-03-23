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
      <Footer />
    </>
  );
}

export default App;
