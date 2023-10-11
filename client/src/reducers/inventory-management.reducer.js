const initialState = {
  items: [],
  filteredItems: [],
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
        filteredItems: action.payload,
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
    case "FETCH_SALES_SUCCESS":
      return {
        ...state,
        sales: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_SALES_FAILURE":
      return {
        ...state,
        error: "Error fetching sales",
        loading: false,
      };
    case "ADD_SALE_SUCCESS":
      return {
        ...state,
        sales: [...state.sales, action.payload.savedSale],
        error: null,
        loading: false,
      };
    case "ADD_SALE_FAILURE":
      return {
        ...state,
        error: "Adding sales failed",
        loading: false,
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filteredItems: state.items.filter(
          ({ category }) => category === action.payload
        ),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
