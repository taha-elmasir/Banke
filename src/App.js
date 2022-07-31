import { Fragment, useState } from "react";

import Layout from "./components/UI/Layout";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/footer/Footer";
import Modal from "./components/UI/Modal";

const App = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  return (
    <Fragment>
      {modalIsShown && <Modal onCloseModal={() => setModalIsShown(false)} />}
      <Layout onShowModal={() => setModalIsShown(true)}>
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
