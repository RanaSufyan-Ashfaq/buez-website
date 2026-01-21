// Components
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.component";
import HeroSection from "./components/heroSection/HeroSection.component";
import WhatIsBuez from "./components/whatIsBuez/WhatIsBuez.component";
import OurFeatures from "./components/ourFeatures/OurFeatures.component";
import WhyChooseBuez from "./components/whyChooseBuez/WhyChooseBuez.component";
import TryBuezFree from "./components/tryBuezFree/TryBuezFree.component";
import PricingPlan from "./components/pricingPlan/PricingPlan.component";
import ExploreBuez from "./components/exploreBuezInterface/ExploreBuez.component";
import GetBetaVersion from "./components/getBetaVersion/GetBetaVersion.component";
import ApplyForBetaAccess from "./components/applyForBetaVersion/ApplyForBetaAccess.component";
import FrequentlyAskQuestion from "./components/faq/FrequentlyAskQuestion.component";
import Footer from "./components/footer/Footer.component";
// Styling
import "./App.css";

import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WhatIsBuez />
              <OurFeatures />
              <WhyChooseBuez />
              <TryBuezFree />
              <PricingPlan />
              <ExploreBuez />
              <GetBetaVersion />
              <FrequentlyAskQuestion />
            </>
          }
        />
        <Route path="/apply-beta-access" element={<ApplyForBetaAccess />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
