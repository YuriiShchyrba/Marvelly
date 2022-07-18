import { applyMiddleware, combineReducers, createStore } from "redux";
import heroReducer from "./reducers/heroReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import marvelReducer from "./reducers/marvelReducer";
import usersReducer from "./reducers/usersReducer";
import friendsReducer from "./reducers/friendsReducer";
import messagesReducer from "./reducers/messagesReducer";

const reducers = combineReducers({
    hero: heroReducer,
    marvel: marvelReducer,
    users: usersReducer,
    friends: friendsReducer,
    messages: messagesReducer,
    form: formReducer
});

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)) );
window.store = store;

export default store;