import React from 'react';
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
// import Expensewa from "./ExpenseDetails.js";
import "./Expense.css";

const Expense = (props)=>{
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            {/* <Expensewa amount={props.amount} title={props.title} /> */}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>            
       </Card>
    );
    
}
export default Expense;