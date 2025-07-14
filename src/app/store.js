import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from '../features/slice'

const store = configureStore({
    reducer : hotelReducer,
});


export default store;