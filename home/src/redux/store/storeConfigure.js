import { createStore, combineReducers } from "redux";
import { allProductReducer, jsonPlaceholder } from './../reducers/sampleReducer';


const configureStore = () => {
    return createStore(
        combineReducers({
            allProductReducer: allProductReducer,
            jsonPlaceholder: jsonPlaceholder
        })
    );
};
export default configureStore;