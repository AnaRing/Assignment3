// imports
import './styles/App.css';
import React, { useState } from 'react';

// implement form inputs and validation logic, display error messages

// form input

const ExpenseForm = ({ addExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

// error handling

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount || !date) {
            setError('Please fill in the mandatory fields.');
            return;
        }

    
        const isoDate = new Date(date).toISOString();
        addExpense({title, amount, date : isoDate, category: category || '-'});
        setTitle('');
        setAmount('');
        setDate('');
        setCategory('');
        setError('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'category') {
            setCategory(value || '-');
        } else {
            switch (name) {
                case 'title':
                    setTitle(value);
                    break;
                case 'amount':
                    setAmount(value);
                    break;
                case 'date':
                    setDate(value);
                    break;
                default:
                    break;
            }
        }
    };

// implementing input-form data

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}></input>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Household">Household</option>
                <option value="Groceries">Groceries</option>
                <option value="Transportation">Transportation</option>
                <option value="Clothing">Clothing</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
            </select>
            <button className="add_button" type="submit">Add Expense</button>
            {error && <p className="error_message">{error}</p>}
        </form>
    );
};

// export ExpenseForm component

export default ExpenseForm;