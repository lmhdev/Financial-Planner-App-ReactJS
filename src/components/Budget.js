import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
//In order to consume the context, we need to import useContext hook

import BudgetDisplay from "./BudgetDisplay";
import BudgetEdit from "./BudgetEdit";

const Budget = () => {
  //The value { budget } is imported from the AppProvider
  const { budget, dispatch } = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);

  const editHandler = (e) => {
    setIsEditing(true);
  };

  const saveHandler = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <>
      {!isEditing ? (
        <BudgetDisplay budget={budget} editHandler={editHandler} />
      ) : (
        <BudgetEdit budget={budget} saveHandler={saveHandler} />
      )}
    </>
  );
};

export default Budget;
