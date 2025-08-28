import { baseApi } from "@/redux/baseApi";
import type { IResponse, ISendOtp, IUser, IVerifyOtp } from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<IResponse<IUser>, Partial<IUser>>({
      query: (body) => ({
        url: "/user/register",
        method: "POST",
        data: body,
      }),
    }),
    login: builder.mutation<
      IResponse<{ accessToken: string; refreshToken: string; user: IUser }>,
      Partial<IUser>
    >({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        data: body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (body) => ({
        url: "/otp/send",
        method: "POST",
        data: body,
      }),
    }),
    verifyOtp: builder.mutation<IResponse<any>, IVerifyOtp>({
      query: (body) => ({
        url: "/otp/verify",
        method: "POST",
        data: body,
      }),
    }),
    userInfo: builder.query<IResponse<IUser>, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUserInfoQuery,
  useLogoutMutation,
} = authApi;
