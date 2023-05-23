import React from "react";
import { useLocation } from "react-router-dom";
import Book from "../../pages/Book/Book";
import TourCards from "../TourCards/TourCards";
import "./Layout.scss";

const Layout = () => {
  const location = useLocation();

  return (
    <div id="parallax-world-of-ugg">
      {location.pathname === "/book" ? (
        <>
          <Book />
        </>
      ) : location.pathname === "/tours" ? (
        <>
          <section>
            <div
              className="parallax-one"
              style={{
                backgroundImage: `url("https://thumb.tildacdn.com/tild6634-6562-4563-b663-323730386339/-/format/webp/IMG_6018.JPG") !important`,
              }}
            >
              <h2>Tours</h2>
            </div>
          </section>
          <TourCards />
        </>
      ) : null}
    </div>
  );
};

export default Layout;
