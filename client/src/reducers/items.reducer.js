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
    case "DELETE_ITEM_SUCCESS":
      return {
        ...state,
        items: state.items.filter(({ _id }) => _id !== action.payload._id),
        loading: false,
        error: null,
      };
    case "DELETE_ITEM_FAILURE":
      return {
        ...state,
        error: "Error deleting items",
        loading: false,
      };
    case "UPDATE_ITEM_SUCCESS":
      return {
        ...state,
        items: state.items.map((item) => {
          if (action.payload._id === item._id) {
            return action.payload;
          }
          return item;
        }),
        loading: false,
      };
    case "UPDATE_ITEM_FAILURE":
      return {
        ...state,
        error: "Error updating item",
        loading: false,
      };
    default:
      return state;
  }
};
