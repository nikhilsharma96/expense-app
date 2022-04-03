import { React, useState } from 'react'
import ExpensesList from './ExpensesList';
import Card from '../Card/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  
  const [year, setDate] = useState('2020');

  function selectionHandler(value){
    setDate(value);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });
    return (
      <div>
      <Card className="expenses">
        <ExpensesFilter selectedDate={year} filteredYear={selectionHandler}/>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
      </div>
    )
}

export default Expenses;