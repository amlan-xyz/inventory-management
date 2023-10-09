const url = "http://localhost:3001/api/sales";

const fetchSales = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_LOADING" });
    const response = await fetch(url);
    const { data } = await response.json();
    dispatch({ type: "FETCH_SALES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_SALES_SUCCESS" });
  }
};

const addSale = (saleDetails) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_LOADING" });
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saleDetails),
    });
    const {
      data: { savedSale, updatedItem },
    } = await response.json();
    dispatch({ type: "ADD_SALE_SUCCESS", payload: { savedSale, updatedItem } });
  } catch (error) {
    dispatch({ type: "ADD_SALE_FAILURE" });
  }
};

export { addSale, fetchSales };
