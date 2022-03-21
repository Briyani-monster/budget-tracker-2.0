import Lists from "./Lists";
import Filter from "./FIlter";
import { useState } from "react";
function BudgetTile({ onUpdateHandler, onChangeHandler, data }) {
  return (
    <>
      <Filter onChangeData={onChangeHandler} />
      {data.length !== 0 && (
        <Lists displayData={data} onUpdateHandler={onUpdateHandler} />
      )}
    </>
  );
}
export default BudgetTile;
