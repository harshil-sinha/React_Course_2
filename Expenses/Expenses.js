import React, { useState } from 'react';
import ExpenseItem from "./Expenseltem";
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
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        
        {filteredExpenses.map((data) => (
        <ExpenseItem
          key={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      ))}
        </Card>
    )
}

export default Expenses;
