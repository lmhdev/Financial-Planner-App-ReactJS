import React from "react";

const BudgetDisplay = ({ budget, editHandler }) => {
  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center">
      <span>Budget: ${budget}</span>
      <button onClick={editHandler} className="btn btn-primary">
        Edit
      </button>
    </div>
  );
};

export default BudgetDisplay;
