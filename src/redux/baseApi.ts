import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: env.baseUrl,
  //   credentials: "include",
  // }),
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  tagTypes: [
    "USER",
    "TOUR",
    "DIVISION",
    "BOOKING",
    "TRANSACTION",
    "WALLET",
    "ALL_USER",
    "TRANSACTION_OVERVIEW",
    "LIMIT",
  ],
});
