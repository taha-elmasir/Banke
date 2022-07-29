import Layout from "./components/UI/Layout";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";

const App = () => {
  return (
    <Layout>
      <HowItWorks />
      <Features />
      <Testimonials />
    </Layout>
  );
};

export default App;
