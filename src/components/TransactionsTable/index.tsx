import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = useContext(TransactionsContext);
    
    console.log('TransactionsTable');
    console.log(transactions);
    
    const valueFormat = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const dateFormat = Intl.DateTimeFormat('pt-BR');
    
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
                                        : `+ ${valueFormat.format(amount)}`
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