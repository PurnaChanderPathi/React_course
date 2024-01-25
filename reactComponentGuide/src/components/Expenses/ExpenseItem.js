import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    return ( 
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>         
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;


// second method
// function ExpenseItem({title, amount, date}) {
//     // const expenseDate = new Date(2021, 2, 28);
//     // const expenseTitle = 'Car Insurence';
//     // const expenseAmount = 294.67;
//     return (
//         <div className="expense-item">
//             <div>{date.toISOString()}</div>
//             <div className='expense-item__description'>
//                 <h2>{title}</h2>
//                 <div className='expense-item__price'>{amount}</div>
//             </div>
//         </div>
//     );
// }