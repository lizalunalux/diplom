import { createStore } from "redux";
import app from "./stores/app"
import reducer from "./reducers/reducer";

const store = createStore(reducer, app);


export default store;
