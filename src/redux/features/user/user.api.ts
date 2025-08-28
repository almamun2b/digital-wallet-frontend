import { baseApi } from "@/redux/baseApi";
import type { IChangePassword, IResponse, IUser } from "@/types";
import type { IAllUserParams } from "@/types/user.type";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<IResponse<IUser>, Partial<IUser>>({
      query: (body) => ({
        url: "/user/update-profile",
        method: "PATCH",
        data: body,
      }),
      invalidatesTags: ["USER"],
    }),
    changePassword: builder.mutation<IResponse<null>, IChangePassword>({
      query: (body) => ({
        url: "/auth/reset-password",
        method: "POST",
        data: body,
      }),
    }),
    allUser: builder.query<IResponse<IUser[]>, IAllUserParams>({
      query: (params) => ({
        url: "/user/all-users",
        method: "GET",
        params: params,
      }),
      providesTags: ["ALL_USER"],
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useAllUserQuery,
} = userApi;
