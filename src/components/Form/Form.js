import { useState } from "react";
import "./Form.scss";
import Category from "../../Resourcres/Category";
import Uid from "../../Resourcres/Uid";
function Form({ onAddHandler, onClose }) {
  const [type, setType] = useState("income");
  const [category, setCategory] = useState(Category[1]);
  const [categoryText, setCategoryText] = useState(Category[1][0].title);
  const [ammount, setAmmount] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // console.log(category, categoryText);

  const onTypeHandler = (val) => {
    setType(val);
    const index = val === "income" ? 1 : 0;
    setCategory(Category[index]);
  };
  const onAmmountHandler = (e) => {
    setAmmount(e.target.value);
  };
  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onDateHandler = (e) => {
    setDate(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(type, ammount, title, new Date(date), categoryText);
    const newdata = {
      id: Uid(),
      ammount: ammount,
      type: type,
      title: title,
      category: categoryText,
      date: new Date(date),
    };
    setAmmount("");
    setTitle("");
    setType("income");
    setDate("");
    setCategory("select");
    onAddHandler(newdata);
    onClose();
  };
  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <div className="toggle">
        <input
          type="radio"
          id="income"
          className="radio"
          name="type"
          checked={type === "income"}
          onChange={() => onTypeHandler("income")}
        />
        <label htmlFor="income" className="type income">
          Income
        </label>
        <input
          type="radio"
          id="expense"
          name="type"
          className="radio"
          checked={type === "expense"}
          onChange={() => onTypeHandler("expense")}
        />
        <label htmlFor="expense" className="type expense">
          Expense
        </label>
      </div>
      <div className="ammount">
        <span>₹</span>
        <input
          type="number"
          min="0"
          value={ammount}
          onChange={(e) => onAmmountHandler(e)}
        />
      </div>
      <div className="description">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => onTitleHandler(e)}
        />
        <input
          type="date"
          placeholder="Date"
          min={new Date(new Date().getFullYear(), 0, 1)}
          max={
            new Date(
              new Date().getFullYear(),
              new Date().getMonth(),
              new Date().getUTCDate()
            )
          }
          value={date}
          onChange={(e) => onDateHandler(e)}
        />
      </div>
      <div className="category">
        <select
          className="search-item"
          onChange={(e) => setCategoryText(e.target.value)}
        >
          <option value="select">Select</option>
          {category.map((val, index) => (
            <option key={index} value={val.title}>
              {val.emoji} {val.title}
            </option>
          ))}
        </select>
      </div>
      <div className="submit">
        <input
          type="submit"
          className={`submit-btn ${type}-btn`}
          value={type}
        />
      </div>
    </form>
  );
}

export default Form;
