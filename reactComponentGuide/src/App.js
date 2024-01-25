import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/UI/Card';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import React, { useState } from 'react';

const Dummy_Expenses = [
  { id: 'e1', title: 'Car Insurence', amount: 294.67, date: new Date(2021, 2 - 1, 26 + 1) },
  { id: 'e2', title: 'Car Service', amount: 94.12, date: new Date(2021, 2 - 1, 28 + 1) },
  { id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2021, 2 - 1, 12 + 1) },
  { id: 'e4', title: 'New Desk', amount: 450, date: new Date(2021, 5 - 1, 14 + 1) }
];

function App() {

  // function dateformate(date) {
  //   let date1 = date?.split("-")
  //   return date1[2] + "-" + date1[1] + "-" + date1[0]
  // }
  const [expenses, setExpenses] = useState(Dummy_Expenses);


  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
