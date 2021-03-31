import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionProps {
    id: number;
    type: 'deposit' | 'withdraw';
    title: string;
    amount: number;
    category: string;
    createdAt: string;
}

interface ChildrenProps { children: ReactNode; }

export const TransactionsContext = createContext<TransactionProps[]>([]);

export function TransactionsProvider({ children }: ChildrenProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then((response) => { setTransactions(response.data.transactions); });
    }, []);
    
    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}