import React, { useState } from "react";

const BudgetEdit = ({ budget, saveHandler }) => {
  const [value, setValue] = useState(budget);
  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center">
      <input
        required="required"
        type="number"
        className="form-control mr-3 w-75"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => saveHandler(value)} className="btn btn-primary">
        Save
      </button>
    </div>
  );
};

export default BudgetEdit;
