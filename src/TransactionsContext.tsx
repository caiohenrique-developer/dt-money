import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionProps {
    id: number;
    type: string;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
}

type CreateTransactionProps = Omit<TransactionProps, 'id' | 'createdAt'>

interface ChildrenProps { children: ReactNode; }

interface TransactionContextValue {
    transactions: TransactionProps[];
    createTransaction(transaction: CreateTransactionProps): void;
}

export const TransactionsContext = createContext<TransactionContextValue>({} as TransactionContextValue);

export function TransactionsProvider({ children }: ChildrenProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then((response) => { setTransactions(response.data.transactions); });
    }, []);
    
    const createTransaction = (transaction: CreateTransactionProps) => { api.post('transactions', transaction); }
    
    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}