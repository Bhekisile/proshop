// import { get } from "mongoose";
import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }),
      providesTags: ['Users'],
      keepUnusedDataFor: 5,
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }),
    }),
    getUserDetails: builder.query({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }),
      keepUnusedDataFor: 5,
    }), 
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: 'PUT',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { 
  useLoginMutation, 
  useLogoutMutation, 
  useRegisterMutation, 
  useProfileMutation, 
  useGetUsersQuery,
  useDeleteUserMutation,
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} = usersApiSlice;