// display expense details and a delete button

import React from 'react';

const ExpenseItem = ({ expense, deleteExpense, index }) => {
    return (
        <tr>
            <td>{expense.title}</td>
            <td>${expense.amount}</td>
            <td>{expense.date}</td>
            <td>{expense.category}</td>
            <td>
                <button onClick={() => deleteExpense(index)}>Delete</button>
            </td>
        </tr>
    );
};

// export ExpenseItem component

export default ExpenseItem;