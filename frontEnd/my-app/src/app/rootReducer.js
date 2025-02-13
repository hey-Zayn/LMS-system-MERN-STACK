import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import { authApi } from "@/features/api/AuthApi";
import { courseApi } from "@/features/api/CourseApi";
import { purchaseApi } from "@/features/api/purchaseApi";
const rootReducer = combineReducers({
    [authApi.reducerPath] : authApi.reducer,
    [courseApi.reducerPath] : courseApi.reducer,
    [purchaseApi.reducerPath] : purchaseApi.reducer,
    auth:authReducer
});

export default rootReducer;

