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
      <p>Filter by :</p>
      <input
        type="radio"
        name="category"
        value="all"
        id="all"
        onChange={(e) => handleFilter(e.target.value)}
      />{" "}
      <label htmlFor="all">All</label>
      <input
        type="radio"
        name="category"
        value="jeans"
        id="jeans"
        onChange={(e) => handleFilter(e.target.value)}
      />
      <label htmlFor="jeans">Jeans</label>
      <input
        type="radio"
        name="category"
        value="t-shirts"
        id="t-shirts"
        onChange={(e) => handleFilter(e.target.value)}
      />{" "}
      <label htmlFor="t-shirst">T-Shirts</label>
      <input
        type="radio"
        name="category"
        value="jackets"
        id="jackets"
        onChange={(e) => handleFilter(e.target.value)}
      />{" "}
      <label htmlFor="jackets">Jackets</label>
    </div>
  );
};
