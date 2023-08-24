import ExpenseItem from "./ExpenseItem";
import "./ExpensesLists.css";

export default function ExpensesList({ expenses }) {
  // return expenses.length ? (
  //   <div className="expenses-list">
  //     {expenses.map((expense) => (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     ))}
  //   </div>
  // ) : (
  //   <h2 className="expenses-list__fallback">No Expenses Found!!!</h2>
  // );

  // Alternate method
  if (expenses.length === 0)
    return <h2 className="expenses-list__fallback">No Expenses Found!!!</h2>;

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
