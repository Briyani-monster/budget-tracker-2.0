import "./Description.scss";
function Description({ income, expense, total }) {
  const options = {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  };
  return (
    <div className="budget-description">
      <div className="total-ammount">
        <h3>Total Ammount</h3>
        <h4>{total.toLocaleString("en-IN", options)}</h4>
      </div>
      <div className="amount-description">
        <div className="amount-description--income">
          <h4 className="logo">🔽</h4>
          <div className="amount-description--income__desc">
            <h4 className="heading--secondary income">Income</h4>
            <h4>{income.toLocaleString("en-IN", options)}</h4>
          </div>
        </div>
        <div className="amount-description--expense">
          <h4 className="logo">🔼</h4>
          <div className="amount-description--expense__desc">
            <h4 className="heading--secondary expense">Expense</h4>
            <h4>{expense.toLocaleString("en-IN", options)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Description;
