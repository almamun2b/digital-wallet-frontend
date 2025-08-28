export * from "./auth.type";
export * from "./transaction.type";
export * from "./wallet.type";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: React.ComponentType;
  }[];
}

type ZodIssue = {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
};

type ErrorSource = {
  path: string;
  message: string;
};

export interface IErrorResponse {
  success: boolean;
  message: string;
  errorSources?: ErrorSource[];
  err?: {
    issues: ZodIssue[];
    name: string;
  };
  stack?: string;
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER" | "AGENT" | "PUBLIC";
