import { createStore } from "redux";
import app from "./stores/app"
import reducer from "./reducers/reducer";

const store = createStore(reducer, app,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


export default store;
