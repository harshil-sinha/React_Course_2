import React,{useState} from 'react';
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
// import Expensewa from "./ExpenseDetails.js";
import "./Expense.css";

const Expense = (props)=>{
    const[amount,setTitle] =   useState(props.amount);

    const clickHandler = ()=>{
        setTitle('$100');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            {/* <Expensewa amount={props.amount} title={props.title} /> */}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>          
       </Card>
    );
    
}
export default Expense;
