const url = "http://localhost:3001/api/items";

const fetchItems = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_LOADING" });
    const response = await fetch(url);
    const { data } = await response.json();
    console.log(data);
    dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_ITEMS_FAILURE" });
  }
};

const addItem = (itemDetails) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_LOADING" });
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemDetails),
    });
    const { data } = await response.json();
    dispatch({ type: "ADD_ITEM_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "ADD_ITEM_FAILURE" });
  }
};

export { addItem, fetchItems };
