import { combineReducers, createStore } from "redux";
import openFormReducer from "./reducres/openFormReducer";
import renderReducer from "./reducres/renderReducer";
import addInfoReducer from "./reducres/addInfo"

const rootReducer = combineReducers({
    renderReducer,
    openFormReducer,
    addInfoReducer
}
)

const store = createStore(rootReducer)

export default store