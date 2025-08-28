type TransactionType =
  | "DEPOSIT"
  | "WITHDRAW"
  | "TRANSFER"
  | "CASH_IN"
  | "CASH_OUT";

type TransactionStatus = "PENDING" | "COMPLETED" | "FAILED" | "CANCELLED";

interface ITransactionParty {
  _id: string;
  name: string;
  email: string;
}

interface IWalletRef {
  _id: string;
  walletNumber: string;
}

interface ITransaction {
  _id: string;
  transactionId: string;
  type: TransactionType;
  sender: ITransactionParty;
  receiver: ITransactionParty;
  senderWallet: IWalletRef;
  receiverWallet: IWalletRef;
  agent?: ITransactionParty;
  agentWallet?: string;
  amount: number;
  fee: number;
  commission: number;
  status: TransactionStatus;
  reference?: string;
  senderBalanceBefore: number;
  receiverBalanceBefore: number;
  senderBalanceAfter: number;
  receiverBalanceAfter: number;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
interface ITransactionQuery {
  searchTerm?: string;
  sort?: string;
  fields?: string;
  page?: number;
  limit?: number;
  type?: TransactionType;
  status?: TransactionStatus;
  amount?: number;
  fee?: number;
  commission?: number;
  reference?: string;
  description?: string;
  transactionId?: string;
  sender?: string;
  receiver?: string;
  agent?: string;
  senderWallet?: string;
  receiverWallet?: string;
  agentWallet?: string;
  createdAt?: string;
  updatedAt?: string;
  startDate?: string;
  endDate?: string;
}

interface ISendMoneyBody {
  senderWalletId: string;
  receiverWalletId: string;
  amount: number;
  pin: string;
  reference?: string;
  description?: string;
}

interface ICashOutBody {
  customerWalletId: string;
  agentWalletId: string;
  amount: number;
  pin: string;
  reference?: string;
}

interface ICashInBody {
  agentWalletId: string;
  customerWalletId: string;
  amount: number;
  pin: string;
  reference?: string;
}

interface AgentTransactionsOverview {
  cashIn: {
    totalCount: number;
    totalAmount: number;
  };
  cashOut: {
    totalCount: number;
    totalAmount: number;
  };
  totalCommission: number;
  commissionRate: number;
}

interface AdminTransactionOverview {
  totalUsers: number;
  totalAgents: number;
  totalAdmins: number;
  totalSuperAdmins: number;
  totalTransactionCount: number;
  totalTransactionVolume: number;
}

export {
  AdminTransactionOverview,
  AgentTransactionsOverview,
  ICashInBody,
  ICashOutBody,
  ISendMoneyBody,
  ITransaction,
  ITransactionParty,
  ITransactionQuery,
  IWalletRef,
  TransactionStatus,
  TransactionType,
};
