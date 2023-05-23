import React from "react";
import BookForm from "../../components/BookForm/BookForm";
import "./Book.scss";

const Book = () => {
  return (
    <div id="parallax-world-of-ugg">
      <section>
        <div className="parallax-one">
          <h2>Booked tour</h2>
        </div>
      </section>
      <section className="up">
        {/* <h2 style={{color:"black"}}>Nurzada</h2> */}
        <BookForm key="book-form" />
      </section>
    </div>
  );
};

export default Book;
