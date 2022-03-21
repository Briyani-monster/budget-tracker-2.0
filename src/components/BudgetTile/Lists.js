import { useState } from "react";
import List from "./List";
import "./Lists.scss";
function Lists({ displayData, onUpdateHandler }) {
  const [Id, setId] = useState(false);
  // ON DELETE ACTION
  const onDeleteId = (id) => {
    setId(id);
    let index;
    for (let i = 0; i < displayData.length; i++) {
      console.log(displayData[i].id === id, id);
      if (displayData[i].id === id) index = i;
    }
    console.log(index, id);
    if (index !== undefined) displayData.splice(index, 1);
    onUpdateHandler(displayData);
  };
  return displayData.map((data) => (
    <List key={data.id} data={data} onDelete={onDeleteId} />
  ));
}
export default Lists;
