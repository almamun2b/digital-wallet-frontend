type WalletStatus = "ACTIVE" | "INACTIVE" | "BLOCKED";

interface IWallet {
  _id: string;
  walletNumber: string;
  user: string;
  balance: number;
  currency: "BDT";
  status: WalletStatus;
  dailyLimit: number;
  monthlyLimit: number;
  totalDeposited: number;
  totalWithdrawn: number;
  totalSent: number;
  totalReceived: number;
  pinAttempts: number;
  pinLockedUntil: string | null;
  createdAt: string;
  updatedAt: string;
}

interface IChangePin {
  oldPin: string;
  newPin: string;
}

export { IChangePin, IWallet, WalletStatus };
