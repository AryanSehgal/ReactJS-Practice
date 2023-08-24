import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import AddExpenseDialog from "./AddExpenseDialog";

export default function NewExpense({ onUpdate }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onUpdate={onUpdate}
          onSubmittingForm={() => setShowForm(false)}
        ></ExpenseForm>
      ) : (
        <AddExpenseDialog onClick={() => setShowForm(true)} />
      )}
    </div>
  );
}
