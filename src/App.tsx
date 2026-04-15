/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}
