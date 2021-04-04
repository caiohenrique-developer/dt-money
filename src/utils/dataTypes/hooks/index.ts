import { ReactNode } from "react";

// useTransactions
export interface TransactionProps {
    id: number;
    type: string;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
}

export type CreateTransactionProps = Omit<TransactionProps, 'id' | 'createdAt'>

export interface ChildrenProps { children: ReactNode; }

export interface TransactionContextValue {
    transactions: TransactionProps[];
    createTransaction(transaction: CreateTransactionProps): Promise<void>;
}