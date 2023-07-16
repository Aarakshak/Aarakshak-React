import NavbarMain from "./navbar-main";
import Banner from "./banner";
import About from "./about";
import News from "./news";

const MainHomepage = () => {
  let URL = 'http://localhost:3000';
  return (
    <>
        <NavbarMain />
        <Banner />
        <About />
        <News />
    </>
  );
};

export default MainHomepage;
