
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
    <div>
    <h1>Expense Tracker App</h1>
    <ExpenseForm addExpense={addExpense}/>
    <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
    <p>Total Amount: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};
// export the App component

export default App;
