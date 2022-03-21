import "./List.scss";
import Months from "../../Resourcres/Months";
import CategoryObj from "../../Resourcres/CategoryObj";
function List({ data, onDelete }) {
  const category = CategoryObj(data.type);
  const emoji = category[data.category];
  const onDeleteHandler = () => {
    onDelete(data.id);
  };
  return (
    <div className="task" id={data.type}>
      <div className="type"></div>
      <div className="task__emoji">{emoji}</div>
      <div className="task__description">
        <div className="task__description--main">
          <h3>{data.title}</h3>
          <h3>
            {(+data.ammount).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
          </h3>
        </div>
        <div className="task__description--secondary">
          <p>{data.category}</p>
          <p>{`${data.date.getDate()}-${
            Months[data.date.getMonth()]
          }-${data.date.getFullYear()}`}</p>
        </div>
      </div>
      <button className="btn" onClick={onDeleteHandler}>
        X
      </button>
    </div>
  );
}
export default List;
