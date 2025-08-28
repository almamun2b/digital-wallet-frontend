interface ISendOtp {
  email: string;
}

interface IVerifyOtp {
  email: string;
  otp: string;
}

interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface ILogin {
  email: string;
  password: string;
}

type Role = "SUPER_ADMIN" | "ADMIN" | "USER" | "AGENT";
type IsActive = "ACTIVE" | "INACTIVE" | "BLOCKED";
type AGENT_STATUS = "NONE" | "PENDING" | "APPROVED" | "SUSPENDED";
type AuthProviderName = "credential" | "google" | "facebook" | "github";

interface IAuthProvider {
  provider: AuthProviderName;
  providerId: string;
}

interface IAgent {
  status: AGENT_STATUS;
}

interface IUser {
  _id: string;
  wallet: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  picture?: string;
  address?: string;
  isActive?: IsActive;
  isVerified?: boolean;
  isDeleted?: boolean;
  role: Role;
  agent?: IAgent;
  auths: IAuthProvider[];
  createdAt: string;
  updatedAt: string;
}

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

export type {
  AGENT_STATUS,
  AuthProviderName,
  IAgent,
  IAuthProvider,
  IChangePassword,
  ILogin,
  IRegister,
  IsActive,
  ISendOtp,
  IUser,
  IVerifyOtp,
  Role,
};
