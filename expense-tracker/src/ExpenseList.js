// map the list and render ExpenseItem components

import React from 'react';
import ExpenseItem from './ExpenseItem';

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
                        <th>Action</th>
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