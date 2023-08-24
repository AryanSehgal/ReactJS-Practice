import "./ExpenseForm.css";

import { useState } from "react";

export default function ExpenseForm({ onUpdate, onSubmittingForm }) {
  // // Using different states and handlers
  // const [title, setTitle] = useState();
  // const [price, setPrice] = useState();
  // const [date, setDate] = useState();

  // function titleChangeHandler(event) {
  //   setTitle(event.target.value);
  //   console.log(title);
  // }
  // function priceChangeHandler(event) {
  //   setPrice(event.target.value);
  //   // console.log(event.target.value);
  // }
  // function dateChangeHandler(event) {
  //   setDate(event.target.value);
  //   // console.log(event.target.value);
  // }

  // // USING SINGLE STATE AND HANDLER
  const [details, setDetails] = useState({
    title: "",
    price: "",
    date: "",
  });

  function updateDetails(field, value) {
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [field]: value,
      };
    });
  }

  function submitHandler(event) {
    console.log(event.nativeEvent.submitter.name);
    if (event.nativeEvent.submitter.name === "submit") onUpdate({ ...details });

    setDetails({ title: "", price: "", date: "" });
    event.preventDefault();
    onSubmittingForm();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="formTitle">Title</label>
          <input
            type="text"
            id="formTitle"
            value={details.title}
            onChange={(event) => updateDetails("title", event.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="formPrice">Price</label>
          <input
            type="number"
            id="formPrice"
            value={details.price}
            onChange={(event) => updateDetails("price", event.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="formDate">Date</label>
          <input
            type="date"
            id="formDate"
            value={details.date}
            onChange={(event) => updateDetails("date", event.target.value)}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button name="cancel" type="submit">
          Cancel
        </button>
        <button name="submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
