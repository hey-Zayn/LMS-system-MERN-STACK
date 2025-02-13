import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggesIn, userLoggesOut } from "../authSlice";

const USER_API = "http://localhost:8080/api/v1/user/";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (inputData) => ({
        url: "register",
        method: "POST",
        body: inputData,
      }),
    }),
    loginUser: builder.mutation({
      query: (inputData) => ({
        url: "login",
        method: "POST",
        body: inputData,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggesIn({ user: result.data.user }));
        } catch (error) {
          console.log(`${error} : Error`);
        }
      },
    }),

    logoutUser:builder.mutation({
      query: () => ({
        url: "logout",
        method:"GET"
      }),
      async onQueryStarted(_, { queryFulfilled , dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(userLoggesOut());
        } catch (error) {
          console.log(`${error} : Error`);
        }

      },
    }),

    

    loadUser: builder.query({
      query: ()=>({
        url: "profile",
        method: "GET",
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggesIn({ user: result.data.user }));
        } catch (error) {
          console.log(`${error} : Error`);
        }
      },
    }),
   

    updateUser: builder.mutation({
      query: (formData) => ({
          url:"profile/update",
          method:"PUT",
          body:formData,
          credentials:"include"
      })
  }),
 
    
  }),
});


export const { useRegisterUserMutation, useLoginUserMutation, useLoadUserQuery, useUpdateUserMutation, useLogoutUserMutation  } = authApi;
