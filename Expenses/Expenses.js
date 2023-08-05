import React, { useState } from 'react';
// import ExpenseItem from "./Expenseltem";
import ExpensesList from './ExpensesList';
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from './ExpensesFilter';

const Expenses= (props)=>{
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);

  }
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

    return (
      <li>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList items={filteredExpenses}/>
        </Card>
        </li>
    )
}

export default Expenses;
