// imports
import './styles/App.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';

// map the list and render ExpenseItem components
const ExpenseList = ({ expenses, deleteExpense}) => {
    return (
        <div>
            <h2>Expense List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <ExpenseItem key={index} index={index} expense={expense} deleteExpense={deleteExpense}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// export ExpenseList component

export default ExpenseList;