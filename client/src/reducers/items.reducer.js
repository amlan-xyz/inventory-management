const initialState = {
  items: [],
  sales: [],
  loading: false,
  error: null,
};

export const inventoryManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_ITEMS_SUCCESS":
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_ITEMS_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching item",
      };
    case "ADD_ITEM_SUCCESS":
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
        error: null,
      };
    case "ADD_ITEM_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error adding items",
      };
    default:
      return state;
  }
};
