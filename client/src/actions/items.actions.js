const url = "https://inventory-management.theweird0ne.repl.co/api/items";

const fetchItems = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_LOADING" });
    const response = await fetch(url);
    const { data } = await response.json();
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

const deleteItem = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_LOADING" });
    const response = await fetch(`${url}/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await response.json();
    dispatch({ type: "DELETE_ITEM_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DELETE_ITEM_FAILURE" });
  }
};

const updateItem = (itemId, updatedItem) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_LOADING" });
    const response = await fetch(`${url}/${itemId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    const { data } = await response.json();
    dispatch({ type: "UPDATE_ITEM_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "UPDATE_ITEM_FAILURE" });
  }
};

export { addItem, deleteItem, fetchItems, updateItem };
