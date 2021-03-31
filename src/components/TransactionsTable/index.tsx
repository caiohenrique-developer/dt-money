import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { api } from '../../services/api'
import { Container } from "./styles";

interface TransactionProps {
    id: number;
    type: 'deposit' | 'withdraw';
    title: string;
    amount: number;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {
    const data = useContext(TransactionsContext);

    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    const valueFormat = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const dateFormat = Intl.DateTimeFormat('pt-BR');
    
    useEffect(() => {
        api.get('transactions')
        .then((response) => { setTransactions(response.data.transactions); });
    }, []);
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactions.map(({ id, type, title, amount, category, createdAt }) => (
                            <tr key={id}>
                                <td>{title}</td>
                                <td className={type}>
                                    {
                                        type === 'withdraw'
                                        ? `- ${valueFormat.format(amount)}`
                                        : valueFormat.format(amount)
                                    }
                                </td>
                                <td>{category}</td>
                                <td>{dateFormat.format(new Date(createdAt))}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}