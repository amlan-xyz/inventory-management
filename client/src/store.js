import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { inventoryManagementReducer } from "./reducers/inventory-management.reducer";

const store = createStore(inventoryManagementReducer, applyMiddleware(thunk));

export default store;
