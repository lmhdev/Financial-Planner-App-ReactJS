import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import PieChart from "./PieChart";
import Modal from "./Modal";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const totalExpenses = expenses.reduce(
    (total, item) => (total += item.cost),
    0
  );

  return (
    <>
      <div className="alert alert-primary d-flex justify-content-between align-items-center">
        <span>Spent so far: ${totalExpenses}</span>
        <button onClick={() => setIsOpen(true)} className="btn btn-dark">
          View Chart
        </button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <PieChart />
        <h4 className="mt-4 text-center">All Expenses & Remaining</h4>
      </Modal>
    </>
  );
};

export default ExpenseTotal;
