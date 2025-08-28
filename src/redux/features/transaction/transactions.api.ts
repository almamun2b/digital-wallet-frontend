import { baseApi } from "@/redux/baseApi";
import type {
  AgentTransactionsOverview,
  ICashInBody,
  ICashOutBody,
  IResponse,
  ISendMoneyBody,
  ITransaction,
  ITransactionQuery,
} from "@/types";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myTransactions: builder.query<
      IResponse<ITransaction[]> & {
        meta: { limit: number; page: number; totalPage: number; total: number };
      },
      ITransactionQuery
    >({
      query: (params) => ({
        url: "/transaction/my-transactions",
        method: "GET",
        params: params,
      }),
      providesTags: ["TRANSACTION", "WALLET"],
    }),
    sentMoney: builder.mutation<IResponse<ITransaction>, ISendMoneyBody>({
      query: (body) => ({
        url: "/transaction/transfer",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    cashOutMoney: builder.mutation<IResponse<ITransaction>, ICashOutBody>({
      query: (body) => ({
        url: "/transaction/cash-out",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    cashInMoney: builder.mutation<IResponse<ITransaction>, ICashInBody>({
      query: (body) => ({
        url: "/transaction/cash-in",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    agentTransactions: builder.query<
      IResponse<AgentTransactionsOverview>,
      void
    >({
      query: (params) => ({
        url: "/transaction/agent-transaction-overview",
        method: "GET",
        params: params,
      }),
      providesTags: ["TRANSACTION_OVERVIEW"],
    }),
  }),
});

export const {
  useMyTransactionsQuery,
  useSentMoneyMutation,
  useCashOutMoneyMutation,
  useCashInMoneyMutation,
  useAgentTransactionsQuery,
} = transactionApi;
