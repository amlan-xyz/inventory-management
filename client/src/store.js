import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { inventoryManagementReducer } from "./reducers/items.reducer";

const store = createStore(inventoryManagementReducer, applyMiddleware(thunk));

export default store;
