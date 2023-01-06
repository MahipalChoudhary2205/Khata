import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Rent', amount: 194.12, date: new Date(2021, 0, 14) },
  { id: 'e2', title: 'car insurance', amount: 799.49, date: new Date(2021, 1, 12) },
  { id: 'e3', title: 'car repair', amount: 294.67, date: new Date(2021, 3, 28) },
  { id: 'e4', title: 'Shoping', amount: 745, date: new Date(2021, 4, 28) },
  { id: 'e5', title: 'Installment', amount: 333, date: new Date(2021, 5, 28) },
  { id: 'e6', title: 'Misc', amount: 345, date: new Date(2021, 6, 28) },
  { id: 'e7', title: 'Hospital', amount: 234, date: new Date(2021, 7, 28) },
  { id: 'e8', title: 'Casfe', amount: 412, date: new Date(2021, 8, 28) },
  { id: 'e9', title: 'Party', amount: 123, date: new Date(2021, 9, 28) },
  { id: 'e10', title: 'Non veg', amount: 567, date: new Date(2021, 10, 28) },
  { id: 'e11', title: 'Date', amount: 234, date: new Date(2021, 11, 28) },
  { id: 'e12', title: 'Birthday', amount: 568, date: new Date(2021, 2, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;