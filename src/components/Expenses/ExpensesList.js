import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenesesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">Found No Expense</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amaount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenesesList;
