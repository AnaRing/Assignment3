// imports
import './styles/App.css';
import React from 'react';

// display expense details and a delete button

const ExpenseItem = ({ expense, deleteExpense, index }) => {
    return (
        <tr>
            <td>{expense.title}</td>
            <td>${expense.amount}</td>
            <td>{expense.date}</td>
            <td>{expense.category}</td>
            <td>
                <button className="delete_button" onClick={() => deleteExpense(index)}>Delete</button>
            </td>
        </tr>
    );
};

// export ExpenseItem component

export default ExpenseItem;