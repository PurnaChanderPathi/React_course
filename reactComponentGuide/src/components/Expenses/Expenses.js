import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import App from '../../App';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilterYear] = useState('2020');
    //  const [filterInfoText, setFilterInfoText] = useState('2019, 2021, & 2022');

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
        // if(selectedYear === '2019') {
        //     setFilterInfoText('2020, 2021 & 2022');
        // } else if (selectedYear === '2020') {
        //     setFilterInfoText('2019, 2021 & 2022')
        // } else if (selectedYear === '2021') {
        //     setFilterInfoText('2019, 2020 & 2022')
        // } else {
        //     setFilterInfoText('2019, 2020 & 2021')
        // }
    };

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                 selected={filteredYear}
                 onChangeFilter={filterChangeHandler} />
                 <ExpensesChart expenses={filterExpenses} />
                <ExpensesList items={filterExpenses} />                   
            </Card>
        </div>
    );
};

export default Expenses;