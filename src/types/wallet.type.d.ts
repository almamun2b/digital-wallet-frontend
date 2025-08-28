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

interface IAdjustFeesCommissionLimits {
  cashInFeeRate: number;
  cashOutFeeRate: number;
  commissionRate: number;
  dailyLimit: number;
  monthlyLimit: number;
  sendMoneyFee: number;
}

export { IAdjustFeesCommissionLimits, IChangePin, IWallet, WalletStatus };
