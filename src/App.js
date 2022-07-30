import { Fragment } from "react";

import Layout from "./components/UI/Layout";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <HowItWorks />
        <Features />
        <Testimonials />
        <Contact />
      </Layout>
      <Footer />
    </Fragment>
  );
};

export default App;
