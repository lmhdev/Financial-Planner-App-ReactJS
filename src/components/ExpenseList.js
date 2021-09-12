import React, { useState, useContext, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);
  //If there are no expenses on the list, make the initial state an empty array [], otherwise make it an array of existing expenses

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]); //Set the filteredExpenses to the list of ALL expenses everytime we update the expenses list

  const handleChange = (e) => {
    const searchResults = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(e.target.value)
    );
    setFilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      {expenses.length ? (
        <ul className="list-group">
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
        </ul>
      ) : (
        <p className="lead text-muted">Add an expense item to start</p>
      )}
    </>
  );
};

export default ExpenseList;
