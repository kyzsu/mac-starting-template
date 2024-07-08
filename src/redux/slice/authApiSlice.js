import { apiSlice } from "../apiSlice"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/...",
        method: "POST",
        body: {
          usernameOrEmailAddress: email,
          password: password,
        },
      }),
    }),
    // logout,
  }),
})

export const { useLoginMutation } = authApiSlice
