import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import { authApi } from "@/features/api/AuthApi";

const rootReducer = combineReducers({
    [authApi.reducerPath] : authApi.reducer,
    auth:authReducer
});

export default rootReducer;

