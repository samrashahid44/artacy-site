/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Advantage from "./components/Advantage";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantage />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
