import React from "react";
import { useLocation } from "react-router-dom";
import Book from "../../pages/Book/Book";
import TourCards from "../TourCards/TourCards"


const Layout = () => {
  const location = useLocation();
  const info = {
    id: "1",
    title: "Tours ",
    miniDescription: "mini info",
    fullDescription: "full info ",
    day: 12,
    price: 300,
    location: ["location1", "location2"],
    img: "img urls in this location",
  };

  return (
    <div id="parallax-world-of-ugg">
      {location.pathname === "/book" ? (
        <>
         <Book info={info}/>
        </>
      ) : location.pathname === "/tours" ? (
        <>
          <section>
            <div className="parallax-one">
              <h2>{info.title}</h2>
            </div>
          </section>
          <TourCards/>
        </>
      ) : null}
    </div>
  );
};

export default Layout;
