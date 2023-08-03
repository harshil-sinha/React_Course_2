import React from 'react';
import ExpenseItem from "./Expenseltem";
import "./Expenses.css";
import Card from "../UI/Card.js";

const Expenses= (props)=>{
    return (
        <Card className="expenses">
        {
        props.items.map((data) => (
        <ExpenseItem title={data.title} amount={data.amount}date={data.date}/>
      ))
      } 
        </Card>
    )
}

export default Expenses;