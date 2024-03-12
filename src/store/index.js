import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import loginReducer from "./UserSlice";

const store = configureStore({
    reducer: {
        user: loginReducer
    }
})

export default store;