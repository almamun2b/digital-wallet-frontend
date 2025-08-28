import type { TRole } from ".";

interface IAllUserParams {
  searchTerm?: string;
  sort?: string;
  fields?: string;
  page?: number;
  limit?: number;
  role?: TRole;
}

export type { IAllUserParams };
