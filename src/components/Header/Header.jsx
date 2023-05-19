import { useLocation } from "react-router-dom";
import cl from "./Header.module.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header className={cl.Header}>
      {location.pathname === "/" ? (
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
      ) : location.pathname === "/about" ? (
        <div
          className={cl.header}
          style={{
            backgroundImage:
              "url('https://thumb.tildacdn.com/tild6130-3632-4134-b139-326265366262/-/format/webp/IMG_4221.JPG')",
          }}
        >
          <h1
            style={{
              fontSize: "65px",
            }}
          >
            Kettik
          </h1>
          <h3
            style={{
              width: "800px",
              textAlign: "center",
              letterSpacing: "2px",
            }}
          >
            No picture captures the beauty of the mountains as they are seen by
            mountain climbers. But the majesty does
          </h3>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
