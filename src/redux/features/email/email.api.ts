import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";

// Contact form data type
export interface IContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Feedback form data type
export interface IFeedbackFormData {
  type: string;
  subject: string;
  message: string;
  email?: string;
  rating?: number;
}

// Email response type
export interface IEmailResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export const emailApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendContactEmail: builder.mutation<
      IResponse<IEmailResponse>,
      IContactFormData
    >({
      query: (data) => ({
        url: "/email/contact",
        method: "POST",
        data,
      }),
    }),
    sendFeedbackEmail: builder.mutation<
      IResponse<IEmailResponse>,
      IFeedbackFormData
    >({
      query: (data) => ({
        url: "/email/feedback",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useSendContactEmailMutation, useSendFeedbackEmailMutation } =
  emailApi;
