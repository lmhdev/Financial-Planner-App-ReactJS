import { Pie } from "react-chartjs-2";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PieChart = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce(
    (total, item) => (total += item.cost),
    0
  );
  const myData = [
    ...[...expenses].map((expense) => expense.cost),
    budget - totalExpenses,
  ];

  let randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  console.log(randomColor());

  const data = {
    labels: [...[...expenses].map((expense) => expense.name), "Remaining"],
    datasets: [
      {
        label: "My Expenses",
        data: myData,
        backgroundColor: [...myData].map((item) => randomColor()),
        // "rgb(255, 99, 132)",
        // "rgb(54, 162, 235)",
        // "rgb(255, 205, 86)",
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
