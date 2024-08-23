import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <div className="expense-form">
      <h2>Add New Expense</h2>
      <form>
        <div>
          <label htmlFor="expenseName">Expense Name</label>
          <input type="text" id="expenseName" />
        </div>
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <input type="number" id="expenseAmount" />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
