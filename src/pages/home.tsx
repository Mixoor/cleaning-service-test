import React from "react";
import About from "../components/about";
import Cleaning from "../components/cleaning";
import Header from "../components/header.tsx";
import Services from "../components/service";
import Stats from "../components/stats";
import Footer from "../components/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Services />
      <Stats />
      <Cleaning />
      <About />
      <Footer />
    </React.Fragment>
  );
}
