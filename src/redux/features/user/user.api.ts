import { baseApi } from "@/redux/baseApi";
import type { AGENT_STATUS, IChangePassword, IResponse, IUser } from "@/types";
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
    allUser: builder.query<
      IResponse<IUser[]> & {
        meta: { totalPage: number; total: number; limit: number; page: number };
      },
      IAllUserParams
    >({
      query: (params) => ({
        url: "/user/all-users",
        method: "GET",
        params: params,
      }),
      providesTags: ["ALL_USER"],
    }),
    blockUnblockUser: builder.mutation<
      IResponse<null>,
      {
        id: string;
        body: {
          isActive: IUser["isActive"];
        };
      }
    >({
      query: (data) => ({
        url: `/user/block-unblock/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["ALL_USER"],
    }),
    manageAgent: builder.mutation<
      IResponse<null>,
      {
        id: string;
        body: {
          status: AGENT_STATUS;
        };
      }
    >({
      query: (data) => ({
        url: `/user/manage-agent/${data.id}`,
        method: "POST",
        data: data.body,
      }),
      invalidatesTags: ["ALL_USER"],
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useAllUserQuery,
  useBlockUnblockUserMutation,
  useManageAgentMutation,
} = userApi;
