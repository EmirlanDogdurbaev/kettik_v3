import Galery from "../Galery/Galery";
import Nav from "../Nav/Nav";
import Slider from "../Slider/Slider";
import cl from "./Header.module.scss";
// import img from "./"

const Header = () => {
  const img =
    "https://thumb.tildacdn.com/tild3337-6664-4538-b230-383139313266/-/format/webp/IMG_5265.JPG";
  return (
    <header className={cl.Header}>
      
      <div
        className={cl.header}
        style={{
          backgroundImage:
            "url('https://thumb.tildacdn.com/tild3337-6664-4538-b230-383139313266/-/format/webp/IMG_5265.JPG')",
        }}
      >
        <h1>KYRGYZ REPUBLIC</h1>
        <h3>Travel Easily and comfortably</h3>
      </div>
    </header>
  );
};

export default Header;
