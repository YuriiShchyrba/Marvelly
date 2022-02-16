import { applyMiddleware, combineReducers, createStore } from "redux";
import heroReducer from "./reducers/heroReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
    hero: heroReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;