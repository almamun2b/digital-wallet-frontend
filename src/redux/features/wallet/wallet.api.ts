import { baseApi } from "@/redux/baseApi";
import type {
  IAdjustFeesCommissionLimits,
  IChangePin,
  IResponse,
  IUser,
  IWallet,
} from "@/types";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myWallet: builder.query<IResponse<IWallet>, void>({
      query: () => ({
        url: "/wallet/my-wallet",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),
    applyForAgent: builder.mutation<IResponse<IUser>, void>({
      query: () => ({
        url: "/user/apply-for-agent",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    changePin: builder.mutation<
      IResponse<any>,
      { walletId: string; body: IChangePin }
    >({
      query: ({ walletId, body }) => ({
        url: `/wallet/${walletId}/change-pin`,
        method: "PATCH",
        data: body,
      }),
    }),
    adjustFeesCommissionLimits: builder.mutation<
      IResponse<any>,
      IAdjustFeesCommissionLimits
    >({
      query: (body) => ({
        url: "/wallet/adjust-fees-commission-limits",
        method: "PATCH",
        data: body,
      }),
      invalidatesTags: ["LIMIT"],
    }),
    getFeesCommissionLimits: builder.query<IResponse<any>, void>({
      query: () => ({
        url: "/wallet/fees-commission-limits",
        method: "GET",
      }),
      providesTags: ["LIMIT"],
    }),
  }),
});

export const {
  useMyWalletQuery,
  useApplyForAgentMutation,
  useChangePinMutation,
  useAdjustFeesCommissionLimitsMutation,
  useGetFeesCommissionLimitsQuery,
} = walletApi;
