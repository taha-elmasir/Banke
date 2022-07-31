import Nav from "./Nav";
import MainSection from "./MainSection";
import FeaturedIn from "./FeaturedIn";

const Header = (props) => {
  return (
    <header>
      <Nav onShowModal={props.onShowModal} />
      <MainSection onShowModal={props.onShowModal} />
      <FeaturedIn />
    </header>
  );
};

export default Header;
