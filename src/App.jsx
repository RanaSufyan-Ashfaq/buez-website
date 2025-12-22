// Components
import Header from "./components/header/Header.component";
import HeroSection from "./components/heroSection/HeroSection.component";
import WhatIsBuez from "./components/whatIsBuez/WhatIsBuez.component";
import OurFeatures from "./components/ourFeatures/OurFeatures.component";
import WhyChooseBuez from "./components/whyChooseBuez/WhyChooseBues.component";
import TryBuezFree from "./components/tryBuezFree/TryBuezFree.component";
import PricingPlan from "./components/pricingPlan/PricingPlan.component";
import FrequentlyAskQuestion from "./components/faq/FrequentlyAskQuestion.component";
import Footer from "./components/footer/footer.component";
// Styling
import "./App.css";

function App() {
  return (
    <>
    <Header/>
      <HeroSection />
      <WhatIsBuez />
      <OurFeatures />
      <WhyChooseBuez />
      <TryBuezFree/>
      <PricingPlan/>
      <FrequentlyAskQuestion/>
      <Footer/>
    </>
  );
}

export default App;
