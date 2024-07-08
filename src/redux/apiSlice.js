import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080", // PORTNYA DIGANTI
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token

    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }

    return headers
  },
})

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["region", "country", "location", "employee", "job"],
  endpoints: (builder) => ({}),
})
