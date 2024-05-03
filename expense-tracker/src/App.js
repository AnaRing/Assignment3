
import './styles/App.css';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';


// implement functions to add, delete and calculate expenses
const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const totalAmount = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  return (
    <div className="application">
      <div className="form_container">
        <h1 className="headline">Expense Tracker App</h1>
      <ExpenseForm addExpense={addExpense}/>
      </div>
    <div className="list_container">
    <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
    <p className="total_amount">Total Amount: ${totalAmount.toFixed(2)}</p>
    </div>
    </div>
  );
};
// export the App component

export default App;
