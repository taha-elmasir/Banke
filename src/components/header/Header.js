import { useState, useRef, useEffect } from "react";

import Nav from "./Nav";
import MainSection from "./MainSection";
import FeaturedIn from "./FeaturedIn";

const Header = (props) => {
  const [isVisible, setIsVisible] = useState();
  const headerRef = useRef(null);

  const sticky = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(sticky, options);
    headerRef.current && observer.observe(headerRef.current);
    return () => headerRef.current && observer.unobserve(headerRef.current);
  }, [headerRef]);

  return (
    <header ref={headerRef}>
      <Nav onShowModal={props.onShowModal} sticky={isVisible} />
      <MainSection onShowModal={props.onShowModal} sticky={isVisible} />
      <FeaturedIn />
    </header>
  );
};

export default Header;
