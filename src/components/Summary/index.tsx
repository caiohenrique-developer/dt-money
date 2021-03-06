import { useTransactions } from '../../hooks/useTransactions';
import { currencyFormat } from '../../utils/dataFormat';
import { Container } from "./styles";

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';

export function Summary() {
    const { transactions } = useTransactions();
    
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw -= transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    });
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIcon} alt="Ícone de entradas"/>
                </header>
                <strong>{currencyFormat(summary.deposit)}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeIcon} alt="Ícone de saídas"/>
                </header>
                <strong>{currencyFormat(summary.withdraw)}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt="Ícone de cifrão"/>
                </header>
                <strong>{currencyFormat(summary.total)}</strong>
            </div>
        </Container>
    )
}