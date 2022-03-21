import "./Filter.scss";
function Filter({ onChangeData }) {
  return (
    <>
      <div className="filter">
        <select onChange={(e) => onChangeData(e.target.value)}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
    </>
  );
}
export default Filter;
