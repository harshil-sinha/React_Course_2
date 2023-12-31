// import logo from './logo.svg';
// import './App.css';

// import ExpenseItem from "./components/Expenseltem.js";
import Expenses from "./components/Expenses/Expenses.js";
import React,{useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSES =[{
  id: 'e1',
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2020, 7, 14)

},
{
  id: 'e2',
  title: 'New Tv',
  amount: 800.67,
  date: new Date(2021, 2, 11)

},
{
  id: 'e3',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 15)

},
{
  id: 'e4',
  title: 'New Desk(Wooden)',
  amount: 450,
  date: new Date(2021, 7, 13)

}
];
const App = ()=> {
  
  // return React.createElement(
  //   'div', 
  //    {},
  //    React.createElement('h2', {}, "Tracker"),
  //    React.createElement(Expenses,{items:expenses})
    
    
  //   );
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
