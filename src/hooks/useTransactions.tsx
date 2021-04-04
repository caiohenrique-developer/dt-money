import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../services/api";
import {
    TransactionProps,
    CreateTransactionProps,
    ChildrenProps,
    TransactionContextValue
} from '../utils/dataTypes/hooks';

const TransactionsContext = createContext<TransactionContextValue>({} as TransactionContextValue);

export function TransactionsProvider({ children }: ChildrenProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then((response) => { setTransactions(response.data.transactions); });
    }, []);
    
    const createTransaction = async (createTransaction: CreateTransactionProps) => {
        const { data } = await api.post('transactions', { ...createTransaction, createdAt: new Date() });

        const { transaction } = data;
        
        setTransactions([ ...transactions, transaction ]);
    }
    
    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const useTransactions = () => {
    const context = useContext(TransactionsContext);

    return context;
}