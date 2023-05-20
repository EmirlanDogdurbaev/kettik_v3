import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import "./BookFrom.scss";

const BookForm = () => {
  const [numberOfPersons, setNumberOfPersons] = useState(1);
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

  const handleDecrement = () => {
    if (numberOfPersons > 1) {
      setNumberOfPersons((prevPersons) => prevPersons - 1);
    }
  };

  const handleIncrement = () => {
    setNumberOfPersons((prevPersons) => prevPersons + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const tourName = form.tourName.value;
    const data = form.date.value;
    console.log(tourName, "axaax")
    const formData = {
      name,
      email,
      phone,
      numberOfPersons,
      data,
      tourName
      
    };
    axios
      .post("http://localhost:8081/bookings/book", formData)
      .then((response) => {
        // Обработка успешного ответа
        console.log(response.data, "axaxa");
      })
      .catch((error) => {
        // Обработка ошибок
        console.error(error);
      });
  };

  return (
    <form className="book" onSubmit={handleSubmit}>
      <label htmlFor="name">
        <h5 className="title">Name and surname of the contact person</h5>
        <input id="name" type="text" placeholder="Ваше имя" name="name" />
      </label>
      <label htmlFor="email">
        <h5 className="title">Email</h5>
        <input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
        />
      </label>
      <label htmlFor="phone">
        <h5 className="title">Phone</h5>
        <input
          id="phone"
          type="text"
          placeholder="+996500023120"
          name="phone"
        />
      </label>
      <div className="count">
        <h4 className="title">Number of persons</h4>
        <span>
          <button type="button" onClick={handleDecrement}>
            -
          </button>
          <h4>{numberOfPersons}</h4>
          <button type="button" onClick={handleIncrement}>
            +
          </button>
        </span>
      </div>
      <aside>
        <h4 className="title">Select a tour</h4>
        <Select options={options} styles={customStyles} name="tourName" />
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
      <button className="book_btn" type="submit">
        Book a room
      </button>
    </form>
  );
};

export default BookForm;
