import "./App.css";
import Expenses from "./components/Expenses";
import Greeting from "./components/Greeting";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

let initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 140,
    date: new Date(2021, 2, 11),
  },
  {
    id: "e5",
    title: "New 2",
    amount: 20,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e6",
    title: "New 3",
    amount: 22.99,
    date: new Date(2019, 1, 1),
  },
  {
    id: "e7",
    title: "Toy",
    amount: 122.12,
    date: new Date(2020, 5, 7),
  },
  {
    id: "e8",
    title: "Books",
    amount: 21,
    date: new Date(2023, 3, 10),
  },
];

function App() {
  let count = initialExpenses.length + 1;
  const [expenses, setExpenses] = useState(initialExpenses);

  function updateHandler(expense) {
    const currExpense = {
      id: "e" + count++,
      title: expense.title,
      amount: expense.price,
      date: new Date(expense.date),
    };

    setExpenses((prevExpenses) => [currExpense, ...prevExpenses]);
    // console.log(expenses);
  }

  return (
    <div className="App">
      {/* children is a reserved property name for props object. */}
      <Greeting prefix="🙏" children="NO!">
        <h1>Namaste</h1>
      </Greeting>

      <NewExpense onUpdate={updateHandler}></NewExpense>

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
