import { authApi } from "@/features/api/AuthApi";
import { courseApi } from "@/features/api/CourseApi";
import {configureStore} from  "@reduxjs/toolkit";
import { purchaseApi } from "@/features/api/purchaseApi";
import rootReducer from "./rootReducer";

export const appStore   = configureStore({
    reducer: rootReducer,
    middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware, courseApi.middleware, purchaseApi.middleware)
});

const initializeApp = async () => {
    await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();
