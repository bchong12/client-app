import { createStore, combineReducers } from "redux";
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
});

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);