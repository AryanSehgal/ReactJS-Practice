import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "./Card";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  let { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2023");
  // const expenseItemsArray = expenses.map((expense) => (
  //   <ExpenseItem
  //     key={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
  //   />
  // ));

  // const [expenseItemsArrayShown, setExpenseItemsArrayShown] =
  //   useState(expenseItemsArray);

  function filteredExpenseItemsArray(year) {
    return expenses.filter((item) => {
      // console.log(Number(year));
      return item.date.getFullYear() === Number(year);
    });
  }

  function filterHandler(value) {
    // console.log(expenseItemsArrayShown);
    setFilteredYear(value);
  }

  let expenseItemsArrayShown = filteredExpenseItemsArray(filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilter={filterHandler}
          year={filteredYear}
        ></ExpensesFilter>
        <ExpensesChart expenses={expenseItemsArrayShown}></ExpensesChart>
        <ExpensesList expenses={expenseItemsArrayShown}></ExpensesList>

        {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
