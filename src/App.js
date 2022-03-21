import "./App.scss";
import React, { useState, useEffect } from "react";
import Card from "./UI/Card/Card";
import BudgetTile from "./components/BudgetTile/BudgetTile";
import Form from "./components/Form/Form";
import Description from "./components/Description/Description";
import Chart from "./components/Chart/Chart";
// let olddata = [
//   {
//     id: "e_1",
//     ammount: "50",
//     type: "expense",
//     title: "coffee",
//     category: "Beverage",
//     date: new Date(2022, 0, 3),
//   },
//   {
//     id: "e_2",
//     ammount: "26000",
//     type: "income",
//     title: "cognizant salary",
//     category: "Salary",
//     date: new Date(2022, 1, 15),
//   },
//   {
//     id: "e_3",
//     ammount: "7000",
//     type: "expense",
//     title: "Room Rent",
//     category: "Mortgage or rent",
//     date: new Date(2022, 2, 15),
//   },
//   {
//     id: "e_4",
//     ammount: "500",
//     type: "expense",
//     title: "water bill",
//     category: "Water Bill",
//     date: new Date(2022, 2, 16),
//   },
//   {
//     id: "e_5",
//     ammount: "26000",
//     type: "income",
//     title: "cognizant",
//     category: "Salary",
//     date: new Date(2022, 2, 11),
//   },
// ];
let olddata = [];
function App() {
  const [data, setData] = useState([...olddata]);
  const [filtereddata, setFilteredData] = useState(olddata);
  const [isfilting, setIsfiltering] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, settotal] = useState(0);
  const [isopen, setOpen] = useState(false);

  //   update database
  const onUpdateHandler = (newdata) => {
    setData(newdata);
    UpdateDescription();
  };
  const onAddHandler = (newdata) => {
    setData((prev) => {
      return [...prev, newdata];
    });
    UpdateDescription();
  };
  //   on Change data
  function onChangeHandler(value) {
    if (value === "all") {
      setData(data);
      setIsfiltering((prev) => (prev = false));
    } else {
      setFilteredData(data.filter((data) => data.type === value));
      setIsfiltering((prev) => (prev = true));
    }
    console.log(value, data);
  }
  // update description
  const UpdateDescription = () => {
    const income = data
      .filter((val) => val.type === "income")
      .map((d) => +d.ammount);
    const expense = data
      .filter((val) => val.type === "expense")
      .map((d) => +d.ammount);
    let incomeval = 0,
      expenseval = 0;
    if (income.length === 1) incomeval = income[0];
    else if (income.length === 0) incomeval = 0;
    else incomeval = income.reduce((a, b) => a + b);
    setIncome(incomeval);
    if (expense.length === 1) expenseval = expense[0];
    else if (expense.length === 0) expenseval = 0;
    else expenseval = expense.reduce((a, b) => a + b, 0);
    expenseval = expense.reduce((a, b) => a + b, 0);
    setExpense(expenseval);
    settotal(incomeval - expenseval);
  };

  useEffect(() => {
    UpdateDescription();
  });
  function oncloseHandler() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="App">
      <Card>
        <h1>BUDGET TRACKER</h1>
        {isopen && (
          <Form onAddHandler={onAddHandler} onClose={oncloseHandler} />
        )}
        {!isopen && (
          <>
            <input
              className="input"
              placeholder="Add..."
              onClick={oncloseHandler}
            />
            <button className="input-btn" onClick={oncloseHandler}>
              Add
            </button>
          </>
        )}
        <Description income={income} expense={expense} total={total} />
      </Card>
      <Card>
        <Chart data={data} />
      </Card>
      <Card>
        {!isfilting && (
          <BudgetTile
            data={data}
            onUpdateHandler={onUpdateHandler}
            onChangeHandler={onChangeHandler}
          />
        )}
        {isfilting && (
          <BudgetTile
            data={filtereddata}
            onUpdateHandler={onUpdateHandler}
            onChangeHandler={onChangeHandler}
          />
        )}
      </Card>
    </div>
  );
}

export default App;
