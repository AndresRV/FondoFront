import { Client } from "./client";
import { TransactionHistory } from "./transaction-history";
import { Fund } from "./fund";

export interface ClientPortfolio {
    client: Client;
    transactionHistory: TransactionHistory[];
    fundsAvailable: Fund[];
    registeredFunds: Fund[];
}