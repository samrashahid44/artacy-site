/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import FloatingWidget from "./components/FloatingWidget";
import CustomCursor from "./components/CustomCursor";
import ExitIntentModal from "./components/ExitIntentModal";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderCurrentRoute = () => {
    if (route.startsWith("#/case-studies/")) {
      const id = route.split("/")[2];
      return <CaseStudy id={id} />;
    }

    if (route === "#/case-studies") {
      return <CaseStudies />;
    }

    return <Home />;
  };

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      {renderCurrentRoute()}
      <FloatingWidget />
      <ExitIntentModal />
    </>
  );
}
