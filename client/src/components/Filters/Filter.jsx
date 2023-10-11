import { useDispatch } from "react-redux";
import { fetchItems } from "../../actions/items.actions";

import "./Filter.css";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (category) => {
    if (category === "all") {
      dispatch(fetchItems());
    } else {
      dispatch({ type: "FILTER_BY_CATEGORY", payload: category });
    }
  };

  return (
    <div className="filter">
      <label htmlFor="filter">Filter by Category :</label>
      <input
        type="radio"
        name="category"
        value="all"
        onChange={(e) => handleFilter(e.target.value)}
      />
      <input
        type="radio"
        name="category"
        value="jeans"
        onChange={(e) => handleFilter(e.target.value)}
      />
      <input
        type="radio"
        name="category"
        value="t-shirts"
        onChange={(e) => handleFilter(e.target.value)}
      />
      <input
        type="radio"
        name="category"
        value="jackets"
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  );
};
