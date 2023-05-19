import React from "react";
import Select from "react-select";
import "./BookFrom.scss";

const BookForm = () => {
  const options = [
    { value: "Ala-Archa", label: "Ala-Archa" },
    { value: "Alamedin", label: "Alamedin" },
    { value: "Kol-Tor", label: "Kol-Tor" },
  ];
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      borderBottom: "1px solid black",
      borderRadius: "0",
      outline: "none",
    }),
  };
  return (
    <form className="book">
      <label htmlFor="name">
        <h5 className="title">Name and surname of the contact person</h5>
        <input id="name" type="text" placeholder="Ваше имя" />
      </label>
      <label htmlFor="email">
        <h5 className="title">Email</h5>
        <input id="email" type="email" placeholder="example@gmail.com" />
      </label>
      <label htmlFor="phone">
        <h5 className="title">Phone</h5>
        <input id="phone" type="text" placeholder="+996500023120" />
      </label>
      <div className="count">
        <h4 className="title">Number of persons</h4>
        <span>
          <button>-</button>
          <h4>1</h4>
          <button>+</button>
        </span>
      </div>
      <aside>
        <h4 className="title">Select a tour</h4>
        <Select options={options} styles={customStyles} name="destination" />
      </aside>
      <label htmlFor="date">
        <h5 className="title">Дата поездки</h5>
        <input
          id="date"
          type="date"
          name="birthdate"
          placeholder="+996500023120"
        />
      </label>
      <button className="book_btn">Book a room</button>
    </form>
  );
};

export default BookForm;
