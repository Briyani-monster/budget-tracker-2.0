import Category from "./Category";
function CategoryObj(type) {
  let index = 0;
  if (type === "income") {
    index = 1;
  }
  let result = {};
  for (let i = 0; i < Category[index].length; i++) {
    result[Category[index][i].title] = Category[index][i].emoji;
  }
  return result;
}
export default CategoryObj;
