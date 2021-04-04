import { useTransactions } from "../../hooks/useTransactions";
import { currencyFormat, dateFormat } from '../../utils/dataFormat';
import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = useTransactions();

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
                                        ? `- ${currencyFormat(amount)}`
                                        : `+ ${currencyFormat(amount)}`
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