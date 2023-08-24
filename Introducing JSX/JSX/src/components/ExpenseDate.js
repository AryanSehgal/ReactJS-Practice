import "./ExpenseDate.css";

export default function ExpenseDate({ date }) {
  const month = date.toLocaleString("default", { month: "long" });
  const dayOfMonth = date.toLocaleString("default", { weekday: "long" });
  const day = date.toLocaleString("default", { day: "numeric" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{dayOfMonth}</div>
    </div>
  );
}
