import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// naming convention string must start with 'use' and end with 'Query'
export const { useLoginMutation } = usersApiSlice;