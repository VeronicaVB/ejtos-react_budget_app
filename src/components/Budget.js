
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        console.log(totalExpenses);
        console.log(event.target.value)

        if (totalExpenses > event.target.value) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;